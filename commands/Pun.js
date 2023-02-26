const pun = require("./dataPool/pun.json").punsReplies
const { getRandomNum } = require("./randomInt")

module.exports = {
    Pun: function(){
        return(`${pun(getRandomNum(pun.length))}`)
    }
}