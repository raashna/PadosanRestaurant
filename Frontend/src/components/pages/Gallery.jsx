import React, { useEffect, useState } from "react";
import "./Gallery.css";

export const Gallery = () => {
  const [selectedOption, setSelectedOption] = useState("Amantran");
  const [media, setMedia]= useState([]);
  const [loading, setLoading]= useState (false);
  const [error, setError] = useState("");

  const options = ["Amantran", "Padosan", "Atithi", "Titiksha", "Videos"];

  //fetch media from backend
  const fetchMedia = async(destination)=>{
    setLoading (true);
    setError ("");
    setMedia ([]);
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/upload/${destination.toLowerCase()}`);
      if(!res.ok){
        throw new Error ("Failed to fetch media");
      }
      const data = await res.json();
      setMedia(data);
    }catch (err){
      console.error("Error fetching media:",err);
      setError("Could not load media.Please try again later.");
    }finally{
      setLoading(false);
    }
  }

  //fetch media whenever selected option changes
  useEffect(()=>{
    fetchMedia(selectedOption);
  },[selectedOption]);
  return (
    <>
      <div className="gallery-container">
        <div className="options-menu">
          {options.map((option) => (
            <li
              key={option}
              className={selectedOption === option ? "active" : ""}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </li>
          ))}
        </div>
        <div className="media-container">
          {loading && <p>Loading...</p>}
          {error && <p className="error">{error}</p>}

          {!loading && !error && selectedOption!=="Videos" && (
            <div className="image-grid">
              {media.map((image, index) => (
                <div key={index} className="image-grid-item">
                  <img src={image.url} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
          {!loading && !error && selectedOption==="Videos" && (
            <div className="video-grid">
              {media.map((video, index) => (
                <div key={index} className="video-grid-item">
                  <video src={video.url} controls  width="100%"  height="100%" />
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          )}

          {/*No results*/}
          {!loading && !error && media.length ===0 && (
            <p>No media found for {selectedOption}</p>
          )}
        </div>
      </div>
    </>
  );
};