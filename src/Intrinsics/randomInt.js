
module.exports = {
    getRandomNum: function(maxi) {
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
}