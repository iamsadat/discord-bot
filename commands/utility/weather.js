require("dotenv").config();
const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Shows the weather of the provided location")
    .addStringOption((option) =>
      option
        .setName("location")
        .setDescription("The City to get the weather for")
    ),
  async execute(interaction) {
    try {
      const api_key = process.env.WEATHER_API_KEY;
      const location = interaction.options.getString("location");
      const city = location.charAt(0).toUpperCase() + location.slice(1);
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}&aqi=no`
      );
      interaction.reply(
        `The current weather in ${city} is ${response.data.current.condition.text} with a temperature of ${response.data.current.temp_c} degrees celsius`
      );
    } catch (error) {
      console.error(error);
      interaction.reply("There was an error fetching the weather");
      return null;
    }
  },
};
