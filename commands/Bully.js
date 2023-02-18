const { getRandomNum } = require("./randomInt")
const rant = require("./dataPool/rants.json").rantReplies

module.exports = {
    Bully: function(){
        return(`${rant[getRandomNum(rant.length)].message}`)
    }
}