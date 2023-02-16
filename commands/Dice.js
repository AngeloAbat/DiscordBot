const getRandomNum = require("./randomInt").getRandomNum

module.exports = {
    rollDice: function(){
        let number = getRandomNum()
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

    return(`You rolled a(n) ${results}`)
    }
}