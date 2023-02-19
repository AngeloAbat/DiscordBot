const { getRandomNum } = require("./randomInt")
const pun = require("./dataPool/puns.json").punReplies

module.exports = {
    Pun: function(){
        return(`${pun[getRandomNum(pun.length)].message}`)
    }
}