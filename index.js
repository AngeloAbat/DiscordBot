const { token, prefix } = require("./config.json");
const rant = require("./comments/rants.json").rantReplies
const sexy = require("./comments/sexy.json").sexyReplies

const { Client, IntentsBitField } = require(`discord.js`);

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});


client.on('ready', (c)=>{
    console.log(`${c.user.tag} is ready!`)
})

client.on('messageCreate', (message)=>{
    function getRandomIntInclusive(maxi) {
        min = Math.ceil(0);
        max = Math.floor(maxi - 1);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
      }

    if(message.author.bot){
        return
    }

    if(message.content == `${prefix}Rant` ||message.content == `${prefix}rant`){
        message.reply(`${rant[getRandomIntInclusive(rant.length)].message}`)
    }

    // message.author.username === 'Śmìlę' && message.author.discriminator === '4512')
    if(message.content == `${prefix}Sexy` ||message.content == `${prefix}sexy`){
        message.reply(`${sexy[getRandomIntInclusive(sexy.length)].message}`)
    }

    if(message.content == `${prefix}Kawaii` || message.content == `${prefix}kawaii`){
        message.reply(`https://64.media.tumblr.com/998b507d66cd5bdbbf7b8d0a9adec491/tumblr_ndn73oBBRw1td6y6ho2_500.gif`)
    }

    if(message.content == `${prefix}Rage` || message.content == `${prefix}rage`){
        message.reply(`https://64.media.tumblr.com/eaeff45895abd85a2530aeeacd8e6e63/tumblr_ndn73oBBRw1td6y6ho1_500.gif`)
    }
})

client.login(token);

// const fs = require("node:fs");
// const path = require("node:path");
// const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
// const { token } = require("./config.json");

// const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.commands = new Collection();
// const commandsPath = path.join(__dirname, "commands");
// const commandFiles = fs
//   .readdirSync(commandsPath)
//   .filter((file) => file.endsWith(".js"));

// for (const file of commandFiles) {
//   const filePath = path.join(commandsPath, file);
//   const command = require(filePath);
//   client.commands.set(command.data.name, command);
// }

// client.once(Events.ClientReady, () => {
//   console.log("Ready!");
// });

// client.on(Events.InteractionCreate, async (interaction) => {
//   if (!interaction.isChatInputCommand())
//     console.log("didn't work no interaction");

//   if (interaction.commandName === "ping") {
//     await interaction.reply({ content: "Secret Pong!", ephemeral: true });
//   }

//   const command = client.commands.get(interaction.commandName);

//   if (!command) return;

//   try {
//     await command.execute(interaction);
//   } catch (error) {
//     console.error(error);
//     await interaction.reply({
//       content: "There was an error while executing this command!",
//       ephemeral: true,
//     });
//   }
// });

// client.on("ready", (event) => {
//   console.log(`Bot name = ${event.user.tag}`);
// });
// client.login(token);

