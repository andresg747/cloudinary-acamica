require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  cloud_name: process.env.CLOUD_NAME,
});

// cloudinary.uploader.upload("./images/nodejs1.png", (error, result) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(result);
//   }
// });

const uploadImage = async () => {
  try {
    const result = await cloudinary.uploader.upload("./images/nodejs.png");
    console.log(result.secure_url);
  } catch (error) {
    console.log(error);
  }
}

uploadImage();
