import uploadModel from "../models/uploadModel.js";

// Controller to handle storing image URL in the database
export const storeImage = async (req, res) => {
    const { url, destination } = req.body;

    // Validate the request body
    if (!url || !destination) {
        return res.status(400).json({ error: "URL and destination are required" });
    }

    try {
        // Create a new upload document
        const newUpload = new uploadModel({ url, destination });
        await newUpload.save();

        res.status(201).json({ message: "Image URL saved successfully", data: newUpload });
    } catch (error) {
        console.error("Error saving image URL:", error);
        res.status(500).json({ error: "Failed to save image URL" });
    }
};

// Controller to fetch images by destination
// export const getImagesByDestination = async (req, res) => {
//     const { destination } = req.params;

//     try {
//         // Fetch images from the database based on the destination
//         const images = await uploadModel.find("destination"=== destination);

//         if (images.length === 0) {
//             return res.status(404).json({ message: "No images found for this destination" });
//         }

//         res.status(200).json(images);
//     } catch (error) {
//         console.error("Error fetching images:", error);
//         res.status(500).json({ error: "Failed to fetch images" });
//     }
// };


export const getImagesByDestination = async (req, res) => {
  const { destination } = req.params;

  try {
    const images = await uploadModel.find({ destination });

    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found for this destination" });
    }

    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
};
