// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

/* Event Listeners */
// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

// Whenever the client receives a message, run this code
client.on('messageCreate', (message) => {
  let args = message.content.split(' '); // arguments

  if (args[0] == "add") {
    let sum = 0;
    for (let i = 1; i < args.length; ++i)
      sum += +args[i];
    message.reply(sum.toString());
  }
});

/******************* Error catching *******************/
client.on('error', console.log);
process.on('uncaughtException', console.log);
/**/

// Login to Discord with your client's token
client.login(token);
