const { userMention } = require("discord.js")
const  getRandomNum  = require("../Intrinsics/randomInt").getRandomNum
const sexy = require("../dataPool/sexy.json").sexyReplies

module.exports = {
    Sexy: function(interaction){
        return(`${userMention(interaction.user.id)} ${sexy[getRandomNum(sexy.length)].message}`)
    }
}