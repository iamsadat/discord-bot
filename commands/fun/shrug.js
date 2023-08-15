const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("shrug")
    .setDescription("appends a shrug ¯\\_(ツ)_/¯ to your message")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("the message to append the shrug to")
    ),
  async execute(interaction) {
    const message = interaction.options.getString("message");
    await interaction.reply(`${message} ¯\\_(ツ)_/¯`);
  },
};
