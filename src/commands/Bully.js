const { getRandomNum } = require("../Intrinsics/randomInt")
const rant = require("../dataPool/bully.json").bullyReplies

const {userMention, ActivityType} = require(`discord.js`)

module.exports = {
    Bully: function(interaction, client){
        let bullyID = interaction.options.get('who').user.id || interaction.user.id
        let bullyUsername = interaction.options.get('who').user.username

        if(interaction.user.id === interaction.options.get('who').user.id ){
            return interaction.reply(`I do not consent to this Kink you have ${userMention(bullyID)}! You need to rethink your life choices.`).then(setTimeout(() => {
                interaction.deleteReply()
            }, 13000))
        }
    
        client.user.setActivity({
            name: `& Bullying ${bullyUsername}`,
            type: ActivityType.Watching
        })

        return interaction.reply(`${userMention(bullyID)} ${rant[getRandomNum(rant.length)].message}`)
    }
}