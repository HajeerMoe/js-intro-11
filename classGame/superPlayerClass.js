const Player = require("./playerClass");
/*
-Create a class called as SuperPlayer and inherit the Player class
-Create a constructor for this class which takes 2 arguments: 
    nickName
    score
    -Inherit the Player class constructor and the other methods
-Create a method called as superAttack() which takes a player object as argument and 
increases the attacking player's score by 2 while it decreases the attacked player's score by 2
*/
class SuperPlayer extends Player {
    constructor(nickName, score) {
        super(nickName, score)
    }
    superAttack(player) {
        this.score += 2
        player.score -= 2
    }
}

module.exports = SuperPlayer


