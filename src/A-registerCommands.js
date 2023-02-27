const {REST , Routes} = require(`discord.js`);
require('dotenv').config();

const envToken = process.env.TOKEN
const rest = new REST({version: `10`}).setToken(envToken);

const setCommand = require("./dataPool/commands.json").schema


module.exports = {
    
     register:async(event)=>{
        try{
            console.log(`Started refreshing the commands for the application (/) commands.`)
            await rest.put(Routes.applicationCommands(event.user.id), {body: setCommand})
            console.log('Successfully reloaded the commands for the application (/) commands.')
        } catch(error){
            console.log(error)
        }
    }
}