require('dotenv').config();
const envToken = process.env.TOKEN

const { Client, IntentsBitField, userMention, ActivityType } = require(`discord.js`);
const {Player, QueryType} = require("discord-player")

const resetCommands = require('./src/A-registerCommands').register

const rollDice = require("./src/commands/Dice").rollDice
const sexy = require("./src/commands/Sexy").Sexy
const bully = require("./src/commands/Bully").Bully
const flirt = require(`./src/commands/Flirt`).Flirt
const pun = require(`./src/commands/Pun`).Pun

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates
  ],
});

// const player = new Player(client)

client.on('ready', (c)=>{
    console.log(`${c.user.tag} IS READY TO INITIATE COMMANDS`)
    client.user.setActivity("🛠️ Work in Progress 🛠️",{
        // name: "🎶 | Music Time",
        type: ActivityType.Competing
    })
    // resetCommands(client)
})



client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
        await interaction.reply(`Pong`);
    }
    if (interaction.commandName === "roll"){
        await interaction.reply(`${rollDice()}`)
    }
    if (interaction.commandName === 'pun'){
        await interaction.reply(`${pun(interaction)}`)
    }
    if (interaction.commandName === 'sexy'){
        await interaction.reply(`${sexy(interaction)}`)
    }
    if (interaction.commandName === 'flirt'){
        await interaction.reply(`${flirt(interaction)}`)
    }
    if (interaction.commandName === 'bully'){
        let bulliedName = interaction.options.get('who').user.username || interaction.user.username
        client.user.setActivity({
            name: `& Bullying ${bulliedName}`,
            type: ActivityType.Watching
        })

        await interaction.reply(`${bully(interaction)}`)
    }
    if (interaction.commandName === 'happydango'){
        await interaction.reply('https://64.media.tumblr.com/998b507d66cd5bdbbf7b8d0a9adec491/tumblr_ndn73oBBRw1td6y6ho2_500.gif')
    }
    if (interaction.commandName === 'angrydango'){
        await interaction.reply('https://64.media.tumblr.com/eaeff45895abd85a2530aeeacd8e6e63/tumblr_ndn73oBBRw1td6y6ho1_500.gif')
    }

  });

client.login(envToken);
