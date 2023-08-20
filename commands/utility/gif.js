const { SlashCommandBuilder } = require("discord.js");
const fetchRandomGif = require("../../api/giphy.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("gifs")
    .setDescription("Sends a random gif"),
  async execute(interaction) {
    const gifUrl = await fetchRandomGif();
    if (gifUrl) {
      await interaction.reply({ content: gifUrl });
    } else {
      await interaction.reply("Sorry, something went wrong.");
    }
  },
};
