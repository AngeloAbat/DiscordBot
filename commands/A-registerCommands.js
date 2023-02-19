const {REST , Routes, Client, Collection, IntentsBitField} = require(`discord.js`);

const token = require('../config.json').token

const rest = new REST({version: `10`}).setToken(token);

const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds
    ],
  });
  


client.commands = new Collection();


module.exports = {
     register:async(e)=>{
        try{
            console.log(e.user.id)
            console.log(`Started refreshing the commands for the application (/) commands.`)
            await rest.put(Routes.applicationCommands(e.user.id), {body: commands})
            console.log('Successfully reloaded the commands for the application (/) commands.')
        } catch(error){
            console.log(error)
        }
    }
}

const commands = [
    {
        "name" : "ping",
        "description" : "Check client and server ms!",
    },
    {
        "name" : "roll",
        "description": "Gives you a number between 0-100",
    },
    {
        "name": "bully",
        "description": "Talks massive smack about you and doesn't hold back! ",
        "options": [
            {
                name: 'who',
                type: 6,
                description: "The person to bully",
                required: true
            }
        ]
    },
    {
        "name": "sexy",
        "description": "Try it out queen!",
    },
    {
        "name": "happydango",
        "description": "Sends a Cute Dango gif",
    },
    {
        "name": "angrydango",
        "description": "Sends an angry Dango gif",
    },
    {
        "name": "pun",
        "description": "Gives out a random pun"
    }
];

client.login(token)