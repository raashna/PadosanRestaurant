import { useState } from "react";
import "./Upload.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
    const [destination, setDestination] = useState("NA");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = async(event) => {
        const file= event.target.files[0]
        if(!file) return;

        setSelectedFile(file);
    };
    const handleFileUpload = async() => {
        if (!selectedFile) {
            console.error("No file selected for upload.");
            toast.error("No file selected for upload.");
            return;
        }

        const data = new FormData();
        data.append("file", selectedFile);
        {destination === "titiksha" ? data.append("upload_preset", "Titiksha_Gallery") :
        destination === "padosan" ? data.append("upload_preset", "Padosan_Gallery") :
        destination === "atithi" ? data.append("upload_preset", "Atithi_Gallery") :
        destination === "amantran" ? data.append("upload_preset", "Amantran_Gallery") :
        destination === "videos" ? data.append("upload_preset", "Videos_Gallery") : null}
        data.append("cloud_name", "dcwrp7six");

        
        const res = await (destination === "videos" 
            ? fetch("https://api.cloudinary.com/v1_1/dcwrp7six/video/upload", {
            method: "POST",
            body: data,
            })
            : fetch("https://api.cloudinary.com/v1_1/dcwrp7six/image/upload", {
                method: "POST",
                body: data,
            })
        );

        if (!res.ok) {
        console.error("Failed to upload:", await res.text());
        return;
        }
        else{
            console.log("Upload successful");
            toast.success("Upload successful");
        }
        const uploadedImg = await res.json();
        console.log("Uploaded Image URL:", uploadedImg.url);
        console.log(selectedFile);

        //Send img url to backend
        const backendRes = await fetch(`${import.meta.env.VITE_BACKEND}/api/admin/upload`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: uploadedImg.url, destination: destination }),
        });
        console.log(backendRes);
        console.log("Backend URL:",import.meta.env.VITE_BACKEND);
        if (!backendRes.ok) {
            console.error("Failed to save image url", await backendRes.text());
            return;
        }

        toast.success("Image URL sent to backend successfully");
    };

    return (
        <div className="upload-page">
                <label htmlFor="destination-select">Where Do you want to upload the image/video?</label>
                <select id="destination-select" className="destination-select" onChange={(e)=>setDestination(e.target.value)}>
                    <option value="NA">Select Destination</option>
                    <option value="titiksha">Titiksha</option>
                    <option value="padosan">Padosan</option>
                    <option value="atithi">Atithi</option>
                    <option value="amantran">Amantran</option>
                    <option value="videos">Videos</option>
                </select>
            {destination !== "NA" ? (
            <><h2>Upload to {destination} Gallery</h2>
            <div className="upload-container">
                <div className="upload-icon">
                    <img src="\upload_icon.png" alt="Upload Icon" />
                </div>
                <input type="file" className="file-input" onChange={handleFileChange}/>
                <button className="upload-button" onClick={handleFileUpload}>Upload</button>
            </div>
            </>) : null}
        </div>
    );
}
 export default Upload;