const axios = require("axios");

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const baseUrl = ``;

async function fetchWeather(location) {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`
    );
    const weather = response.data;
    console.log(weather);
    return weather;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = fetchWeather;
