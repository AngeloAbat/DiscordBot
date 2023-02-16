const { token, prefix } = require("./config.json");
const { Client, IntentsBitField, REST, Routes } = require(`discord.js`);

const rollDice = require("./commands/Dice").rollDice
const sexy = require("./commands/Sexy").Sexy
const rant = require("./commands/Rant").Rant

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates
  ],
});

client.on('ready', (c)=>{
    console.log(`${c.user.tag} is ready ${client.user.id}`)
    client.user.setActivity({
        name: "🎶 | Music Time",
        type: "Listening"
    })
    const ID = c.user.id
    const rest = new REST({version: `10`}).setToken(token)
    async function dumbbell() {
        try{
            console.log(`Started refreshing application (/) commands.`)
            await rest.put(Routes.applicationCommands(ID), {body: commands})
            console.log('Successfully reloaded application (/) commands.')
        } catch(error){
            console.log(error)
        }
    }
    dumbbell()
})

const commands = [
    {
        "name" : "ping",
        "description" : "Answers with Pong!",
        "look": 'test'
    },
    {
        "name" : "roll",
        "description": "Gives you a number between 0-100",
        "look": 'test'
    },
    {
        "name": "rant",
        "description": "Talks massive smack about you and doesn't hold back! ",
        "look": 'test'
    },
    {
        "name": "kawaii",
        "description": "Sends a Cute Dango gif",
        "look": 'test'
    },
    {
        "name": "rage",
        "description": "Sends an angry Dango gif",
        "look": 'test'
    }
    
];


client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    if (interaction.commandName === "roll"){
        await interaction.reply(`${rollDice()}`)
    }
    if (interaction.commandName === 'sexy'){
        await interaction.reply(`${sexy()}`)
    }
    if (interaction.commandName === 'rant'){
        await interaction.reply(`${rant()}`)
    }
    if (interaction.commandName === 'kawaii'){
        await interaction.reply('https://64.media.tumblr.com/998b507d66cd5bdbbf7b8d0a9adec491/tumblr_ndn73oBBRw1td6y6ho2_500.gif')
    }
    if (interaction.commandName === 'rage'){
        await interaction.reply('https://64.media.tumblr.com/eaeff45895abd85a2530aeeacd8e6e63/tumblr_ndn73oBBRw1td6y6ho1_500.gif')
    }
  });

client.login(token);