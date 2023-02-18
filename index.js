const { token, prefix } = require("./config.json");
const { Client, IntentsBitField, REST, Routes, ActivityType, Emoji, Guild, GuildMember, userMention } = require(`discord.js`);
const {Player, QueryType} = require("discord-player")

const rollDice = require("./commands/Dice").rollDice
const sexy = require("./commands/Sexy").Sexy
const bully = require("./commands/Bully").Bully

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildVoiceStates
  ],
});

// const player = new Player(client)

client.on('ready', (c)=>{
    console.log(`${c.user.tag} is ready`)
    client.user.setActivity({
        name: "🎶 | Music Time",
        type: ActivityType.Listening
    })
    const rest = new REST({version: `10`}).setToken(token)
    async function updateCommands() {
        try{
            console.log(`Started refreshing the commands for the application (/) commands.`)
            await rest.put(Routes.applicationCommands(client.user.id), {body: commands})
            console.log('Successfully reloaded the commands for the application (/) commands.')
        } catch(error){
            console.log(error)
        }
    }
    // updateCommands()
})

const commands = [
    {
        "name" : "ping",
        "description" : "Answers with Pong!",
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
        "name": "kawaii",
        "description": "Sends a Cute Dango gif",
    },
    {
        "name": "rage",
        "description": "Sends an angry Dango gif",
    },
    {
        "name": "play",
        "description": "Plays a song from youtube",
        "options": [
            {
                name : 'query',
                type : 3,
                description: "The song you want to play",
                required : true
            }
        ]
    },
    {
        "name" : "skip",
        "description" : "Skip to the current song"
    },
    {
        "name" : "queue",
        "description" : "See the queue"
    },
    {
        "name" : "stop",
        "description" : "Stop the player"
    }
    
];


client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    // if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel && interaction.command == 'play') {
    //     return void interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
    // }

    // if (interaction.me.voice.channelId !== interaction.me.voice.channelId) {
    //     return void interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
    // }

    // function repeatCmd(item){
    //     const itemV = `${item.returnValue}`
    //     console.log(itemV)
    //     if(interaction.commandName === item.name){
    //         interaction.reply(itemV)
    //     }
    // }

    // commands.forEach(repeatCmd)

  
    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
    }
    if (interaction.commandName === "roll"){
        await interaction.reply(`${rollDice()}`)
    }
    if (interaction.commandName === 'sexy'){
        await interaction.reply(`${sexy()}`)
    }
    if (interaction.commandName === 'bully'){
        let bullyMe = interaction.options.get('who').user.id || interaction.user.id

        await interaction.reply(`${userMention(bullyMe)} ${bully()}`)
    }
    if (interaction.commandName === 'kawaii'){
        await interaction.reply('https://64.media.tumblr.com/998b507d66cd5bdbbf7b8d0a9adec491/tumblr_ndn73oBBRw1td6y6ho2_500.gif')
    }
    if (interaction.commandName === 'rage'){
        await interaction.reply('https://64.media.tumblr.com/eaeff45895abd85a2530aeeacd8e6e63/tumblr_ndn73oBBRw1td6y6ho1_500.gif')
    }
    // if (interaction.commandName === 'play'){
    //     await interaction.deferReply();

    //     const query = interaction.options.get("query").value;
    //     const searchResult = await player.search(query, {
    //         requestedBy: interaction.user,
    //         searchEngine: QueryType.AUTO
    //     }).catch(()=>{});

    //     if(!searchResult || !searchResult.tracks.length) return void interaction.followUp({content: "No results were found!"})

    //     const queue = await player.createQueue(interaction.guild,{
    //         metadata: interaction.channel
    //     });

    //     try{
    //         if(!queue.connection) await queue.connect(interaction.member.voice.channel);
    //     } catch{
    //         void player.deleteQueue(interaction.guildId);
    //         return void interaction.followUp({content: "Could not join you Voice Channel!"});
    //     }

    //     await interaction.followUp({ content: `⏱ | Loading your ${searchResult.playlist ? "playlist" : "track"}...` });
    //     searchResult.playlist ? queue.addTracks(searchResult.tracks) : queue.addTrack(searchResult.tracks[0]);
    //     if (!queue.playing) await queue.play();
    // }

    // if (interaction.commandName === "skip") {
    //     await interaction.deferReply();
    //     const queue = player.getQueue(interaction.guildId);
    //     if (!queue || !queue.playing) return void interaction.followUp({ content: "❌ | No music is being played!" });
    //     const currentTrack = queue.current;
    //     const success = queue.skip();
    //     return void interaction.followUp({
    //         content: success ? `✅ | Skipped **${currentTrack}**!` : "❌ | Something went wrong!"
    //     });
    // } else if (interaction.commandName === "stop") {
    //     await interaction.deferReply();
    //     const queue = player.getQueue(interaction.guildId);
    //     if (!queue || !queue.playing) return void interaction.followUp({ content: "❌ | No music is being played!" });
    //     queue.destroy();
    //     return void interaction.followUp({ content: "🛑 | Stopped the player!" });
    // }
  });

client.login(token);
