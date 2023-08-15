const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Provides information about the user")
    .addUserOption((option) =>
      option.setName("user").setDescription("The user to show info about")
    ),
  async execute(interaction) {
    const user = interaction.options.getUser("user");
    if (user)
      return await interaction.reply(
        `The username is ${user.username}, the tag is ${user.tag}, and the user joined on ${user.createdAt}.`
      );
    await interaction.reply(
      `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`
    );
  },
};
