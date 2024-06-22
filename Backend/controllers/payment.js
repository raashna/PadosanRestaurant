import crypto from 'crypto';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const frontend_url = 'http://localhost:5174/';
const MERCHANT_ID = process.env.MERCHANT_ID;
const SALT_KEY = process.env.SALT_KEY;
const API_KEY = "YOUR_API_KEY"; 
const PG_PAY_API_URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';


const newPayment = async (req, orderId) => {
    console.log("Received Order ID for Payment:", orderId); // Log the orderId
    const maxRetries = 5;
    const baseDelay = 500; // Starting delay in milliseconds

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const data = {
                merchantId: MERCHANT_ID,
                merchantTransactionId: req.body.transactionId,
                amount: req.body.amount * 100,
                merchantUserId: req.body.userId,
                redirectUrl: `${frontend_url}verify?orderId=${orderId}&success=true`,
                redirectMode: 'REDIRECT',
                callbackUrl: `http://localhost:4000/api/callback`,
                paymentInstrument: {
                    type: 'PAY_PAGE'
                }
            };

            console.log("Constructed Redirect URL:", data.redirectUrl); // Log the constructed redirectUrl

            const payload = JSON.stringify(data);
            const payloadMain = Buffer.from(payload).toString('base64');
            const keyIndex = 1;
            const string = payloadMain + '/pg/v1/pay' + SALT_KEY;
            const sha256 = crypto.createHash('sha256').update(string).digest('hex');
            const checksum = sha256 + '###' + keyIndex;

            const options = {
                method: 'POST',
                url: PG_PAY_API_URL,
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    'X-VERIFY': checksum
                },
                data: {
                    request: payloadMain
                }
            };

            const response = await axios.request(options);
            console.log("Payment API Response:", response.data);
            return { success: true, paymentUrl: response.data.data.instrumentResponse.redirectInfo.url };
        } catch (error) {
            if (error.response && error.response.status === 429) {
                const delay = baseDelay * Math.pow(2, attempt);
                console.log(`Rate limit hit, retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
            } else {
                console.error("Error in newPayment:", error);
                return { success: false, message: error.message };
            }
        }
    }

    return { success: false, message: 'Too Many Requests. Please try again later.' };
};




const checkStatus = async (req, res) => {
    try {
        const merchantTransactionId = req.params.transactionId;
        const merchantId = MERCHANT_ID;
        const keyIndex = 1;
        const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + SALT_KEY;
        const sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = sha256 + '###' + keyIndex;

        const options = {
            method: 'GET',
            url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum
            }
        };

        const response = await axios.request(options);
        console.log("Check Status API Response:", response.data);

        if (response.data.success === true) {
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }
    } catch (error) {
        console.error("Error in checkStatus:", error);
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
};

// Handle server-to-server callback
const handleCallback = (req, res) => {
    try {
        console.log("Inside the Callback API");
        const base64Response = req.body.response; // Get base64-encoded response from the request body

        // Validate checksum
        const receivedChecksum = req.headers['x-verify'];
        const calculatedChecksum = calculateChecksum(base64Response, SALT_KEY, 1);

        if (receivedChecksum === calculatedChecksum) {
            // Checksum is valid, proceed with handling the callback
            const decodedResponse = Buffer.from(base64Response, 'base64').toString('utf-8');
            const jsonResponse = JSON.parse(decodedResponse);

            // Now you can handle the callback response
            if (jsonResponse.success) {
                res.status(200).json({ message: 'Payment successful' });
            } else {
                res.status(400).json({ message: 'Payment failed' });
            }
        } else {
            // Checksum is not valid
            res.status(400).json({ message: 'Invalid checksum' });
        }
    } catch (error) {
        console.error("Error in handleCallback:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Function to calculate the checksum
function calculateChecksum(base64Response, saltKey, saltIndex) {
    const hash = crypto.createHash('sha256');
    hash.update(base64Response + saltKey);
    const digest = hash.digest('hex');
    return digest + '###' + saltIndex;
}

export {
    newPayment,
    checkStatus,
    handleCallback
};
