const axios = require("axios");

const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

async function fetchRandomGifByCategory(category) {
  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${GIPHY_API_KEY}`
    );
    const gifUrl = response.data.data.images.original.url;
    return gifUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = fetchRandomGifByCategory;
