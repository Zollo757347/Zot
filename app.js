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

  let numTotal, numInporsters;
  if (args[0] == "!impStart") {
    message.reply("csiduvbhsjvbedrivhrf");
    switch (args[1]) {
      case "easy":
        numTotal = 9;
        break;
      case "medium":
        numTotal = 18;
        break;
      case "hard":
        numTotal = 36;
        break;
      case "Glitch":
        numTotal = 300;
        break;
    }

    numImporsters = numTotal/3 + Math.floor( (numToatal / 3 + 1) * Math.random() );
    message.reply(`start! the numbers of imporsters ${numImporsters}`);
  }

  if (args[0] == "!impHint") {

  }

  if (args[0] == "!impGuess") {

  }

});

/******************* Error Catching *******************/
client.on('error', console.log);
process.on('uncaughtException', console.log);
/**/

// Login to Discord with your client's token
client.login(token);
