const { token, prefix } = require("./config.json");
const rant = require("./comments/rants.json").rantReplies
const sexy = require("./comments/sexy.json").sexyReplies

const { Client, IntentsBitField } = require(`discord.js`);
const { Player, QueryType } 

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
    console.log(`${c.user.tag} is ready`)
    client.user.setActivity({
        name: "🎶 | Music Time",
        type: "Listening"
    })
})

client.on('messageCreate', (message)=>{
    function getRandomInt(maxi) {
        if(maxi){
            min = Math.ceil(0);
            max = Math.floor(maxi - 1);
            return Math.floor(Math.random() * (max - min + 1) + min); 
        } else{
            min = Math.ceil(0);
            max = Math.floor(100);
            return Math.floor(Math.random() * (max - min + 1) + min); 
        }
      }
    if(message.author.bot || !message.content.startsWith(prefix)){
        return
    }

    if(message.content == `${prefix}Rant` ||message.content == `${prefix}rant`){
        message.reply(`${rant[getRandomInt(rant.length)].message}`)
    }

    // message.author.username === 'Śmìlę' && message.author.discriminator === '4512')
    if(message.content == `${prefix}Sexy` ||message.content == `${prefix}sexy`){
        message.reply(`${sexy[getRandomInt(sexy.length)].message}`)
    }

    if(message.content == `${prefix}Kawaii` || message.content == `${prefix}kawaii`){
        message.reply(`https://64.media.tumblr.com/998b507d66cd5bdbbf7b8d0a9adec491/tumblr_ndn73oBBRw1td6y6ho2_500.gif`)
    }

    if(message.content == `${prefix}Rage` || message.content == `${prefix}rage`){
        message.reply(`https://64.media.tumblr.com/eaeff45895abd85a2530aeeacd8e6e63/tumblr_ndn73oBBRw1td6y6ho1_500.gif`)
    }

    if(message.content == `${prefix}Roll` || message.content == `${prefix}roll`){
        let number = getRandomInt()
        let results = `**${number}** `

        if(number === 100){
            results += 'Go buy yourself a lotto ticket!'
        } else if(number == 99){
            results += `Super close!!`
        } else if(number >= 98){
            results += `Lucky Mfkr`
        } else if(number >= 80){
            results += `Lucky!`
        } else if(number >= 60){
            results += `Sheeeshh`
        } else if(number >= 40){
            results += 'Nice'
        } else if(number >= 20){
            results += `Okay`
        } else if(number >= 10){
            results += `Loser`
        } else if(number === 0){
            results += `Same thing as a 100`
        } else{
            results += `Unlucky mfkr`
        }

        message.reply(`You rolled a(n) ${results}`)
    }
    
})

client.login(token);