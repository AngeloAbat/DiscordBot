const { getRandomNum } = require("./randomInt")
const sexy = require("./dataPool/sexy.json").sexyReplies

module.exports = {
    Sexy: function(){
        return(`${sexy[getRandomNum(sexy.length)].message}`)
    }
}