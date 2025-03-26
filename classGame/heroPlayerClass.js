const Player = require("./playerClass")
/*
-Create a class called as HeroPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as heal() which takes a player object as argument and 
increases the healed player's score by 1.
*/

class HeroPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score)
    }
    heal(player) {
        player.score += 1
    }
}

module.exports = HeroPlayer