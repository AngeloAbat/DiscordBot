const { getRandomNum } = require("./randomInt")
const rant = require("./dataPool/bully.json").bullyReplies

const {userMention} = require(`discord.js`)

module.exports = {
    Bully: function(interaction){
        let bullyMe = interaction.options.get('who').user.id || interaction.user.id
        if(interaction.user.id === interaction.options.get('who').user.id ){
            return(`I do not consent to this Kink you have ${userMention(bullyMe)}! You need to rethink your life choices.`)
        } 

        return(`${userMention(bullyMe)} ${rant[getRandomNum(rant.length)].message}`)
    }
}