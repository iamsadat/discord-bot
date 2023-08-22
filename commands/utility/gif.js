require("dotenv").config();
const { SlashCommandBuilder } = require("discord.js");

const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gif")
    .setDescription("Sends a random gif")
    .addStringOption((option) =>
      option.setName("tag").setDescription("The tag to search for")
    ),
  async execute(interaction) {
    try {
      const api_key = process.env.GIPHY_API_KEY;
      const tag = interaction.options.getString("tag") || "random";
      const response = await axios.get(
        `http://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(
          tag
        )}&api_key=${api_key}`
      );

      const gifUrl = response.data.data.images.original.url;
      interaction.channel.send(gifUrl);
    } catch (error) {
      console.error(error);
      interaction.reply("There was an error fetching a gif");
      return null;
    }
  },
};
