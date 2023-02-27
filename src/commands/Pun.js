const { userMention} = require('discord.js')
const pun = require("../dataPool/pun.json").punsReplies
const {getRandomNum} = require("../Intrinsics/randomInt")

module.exports = {
    Pun: function(interaction){
        console.log(getRandomNum())
        
        return(`${userMention(interaction.user.id)} ${pun[getRandomNum(pun.length)].message}`)
    }
}