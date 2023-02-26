const { userMention } = require("discord.js")
const { getRandomNum } = require("./randomInt")
const flirt = require("./dataPool/flirt.json").flirtsReplies

module.exports = {
    Flirt: function(interaction){
        return(`${userMention(interaction.user.id)} ${flirt[getRandomNum(flirt.length)].message}`)
    }
}