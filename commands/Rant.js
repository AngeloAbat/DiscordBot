const { getRandomNum } = require("./randomInt")
const rant = require("./dataPool/rants.json").rantReplies

module.exports = {
    Rant: function(){
        return(`${rant[getRandomNum(rant.length)].message}`)
    }
}