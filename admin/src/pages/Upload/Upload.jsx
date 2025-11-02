import { useState } from "react";
import "./Upload.css";
const Upload = () => {
    const [destination, setDestination] = useState("NA");
    const handleFileUpload = async(event) => {
        const file= event.target.files[0]
        if(!file) return;

        const data = new FormData();
        data.append("file", file);
        {destination === "Titiksha" ? data.append("upload_preset", "Titiksha_Gallery") :
        destination === "Padosan" ? data.append("upload_preset", "Padosan_Gallery") :
        destination === "Atithi" ? data.append("upload_preset", "Atithi_Gallery") :
        destination === "Amantran" ? data.append("upload_preset", "Amantran_Gallery") :
        destination === "Videos" ? data.append("upload_preset", "Videos_Gallery") : null}
        data.append("cloud_name", "dcwrp7six");

        
        const res = await (destination === "Videos" 
            ? fetch("https://api.cloudinary.com/v1_1/dcwrp7six/video/upload", {
            method: "POST",
            body: data,
            })
            : fetch("https://api.cloudinary.com/v1_1/dcwrp7six/image/upload", {
                method: "POST",
                body: data,
            })
        );
        const uploadedImg = await res.json();
        console.log("Uploaded Image URL:", uploadedImg.url);
        console.log(file);
    }
    return (
        <div className="upload-page">
                <h2>Where Do you want to upload the image/video?</h2>
                <select className="destination-select" onChange={(e)=>setDestination(e.target.value)}>
                    <option value="NA">Select Destination</option>
                    <option value="Titiksha">Titiksha</option>
                    <option value="Padosan">Padosan</option>
                    <option value="Atithi">Atithi</option>
                    <option value="Amantran">Amantran</option>
                    <option value="Videos">Videos</option>
                </select>
            {destination !== "NA" ? (
            <><h2>Upload to {destination} Gallery</h2>
            <div className="upload-container">
                <div className="upload-icon">
                    <img src="\upload_icon.png" alt="Upload Icon" />
                </div>
                <input type="file" className="file-input" onChange={handleFileUpload}/>
            </div>
            </>) : null}
        </div>
    );
}
 export default Upload;