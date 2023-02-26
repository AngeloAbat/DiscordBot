const { userMention} = require('discord.js')
const pun = require("./dataPool/pun.json").punsReplies
const { getRandomNum } = require("./randomInt")

module.exports = {
    Pun: function(interaction){
        
        return(`${userMention(interaction.user.id)} ${pun[getRandomNum(pun.length)].message}`)
    }
}