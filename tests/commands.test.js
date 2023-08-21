const pingTest = require("../commands/fun/ping.js");

test("ping command", async () => {
  const interaction = {
    reply: jest.fn(),
  };
  await pingTest.execute(interaction);
  expect(interaction.reply).toHaveBeenCalledWith("Pong!");
});
