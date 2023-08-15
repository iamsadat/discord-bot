const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("heart")
    .setDescription("sends a <3")
    .addStringOption((option) =>
      option.setName("input").setDescription("add a message to the heart")
    ),
  async execute(interaction) {
    const message = interaction.options.getString("input");
    await interaction.reply(`${message} <3`);
  },
};
