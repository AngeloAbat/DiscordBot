const { token, prefix } = require("./config.json");
const { Client, IntentsBitField, REST, Routes, Collection, Events, userMention } = require(`discord.js`);
const {Player, QueryType} = require("discord-player")

const resetCommands = require('./commands/A-registerCommands').register

const rollDice = require("./commands/Dice").rollDice
const sexy = require("./commands/Sexy").Sexy
const bully = require("./commands/Bully").Bully
const pun = require(`./commands/Pun`).Pun

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
    client.user.setActivity({
        name: "🛠️ Work in Progress 🛠️",
        // name: "🎶 | Music Time",
        // type: ActivityType.Listening
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
    if (interaction.commandName === 'sexy'){
        await interaction.reply(`${sexy(interaction)}`)
    }
    if (interaction.commandName === 'pun'){
        await interaction.reply(`${pun()}`)
    }
    if (interaction.commandName === 'bully'){
        let bulliedName = interaction.options.get('who').user.username || interaction.user.username
        client.user.setActivity({
            name: `Just Bullied ${bulliedName}`,
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

client.login(token);
