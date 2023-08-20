const { SlashCommandBuilder } = require("discord.js");
const fetchWeather = require("../../api/weatherapi.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Shows the weather of the provided location")
    .addStringOption((option) =>
      option
        .setName("location")
        .setDescription("The location to get the weather for")
    ),
  async execute(interaction) {
    const weather = await fetchWeather(location);
    console.log(weather);
    const location = interaction.options.getString("location");
    await interaction.reply(location);
  },
};
