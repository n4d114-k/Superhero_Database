const cloudinary = require("cloudinary").v2
const config = require('config')

cloudinary.config({
  cloud_name: config.get('CLOUD_NAME'),
  api_key: config.get('API_KEY'),
  api_secret: config.get('API_SECRET'),
});

module.exports = cloudinary
