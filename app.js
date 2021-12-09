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
client.on('messageCreate', message => {
  console.log(message);
});

// Login to Discord with your client's token
client.login(token);
