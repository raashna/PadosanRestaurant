import React, { useContext, useEffect } from "react";
import "./verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../StoreContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  console.log(success, orderId);
  const navigate = useNavigate();
  const { url } = useContext(StoreContext);
  const verifyPayment = async () => {
    try {
      const response = await axios.post(url + "/api/order/verify", {
        success,
        orderId,
      });
      
      if (response.data.success) {
        toast.success("Order confirmed successfully!", { autoClose: 30000 }); // Show for 10 seconds
        setTimeout(() => navigate("/myorders"), 6000); // Delay navigation by 10 seconds
      } else {
        toast.error("Order failed. Please try again.", { autoClose: 30000 }); // Show for 10 seconds
        setTimeout(() => navigate("/"), 6000); // Delay navigation by 10 seconds
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", { autoClose: 30000 }); // Show for 10 seconds
      setTimeout(() => navigate("/"), 6000); // Delay navigation by 10 seconds
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
       <ToastContainer />
      <div className="spinner"> </div>
    </div>
  );
};

export default Verify;