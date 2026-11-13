let diceSides = 13
export let max = 0
export class MM {
        constructor(game) {
        this.game = game
        }
       

        rollDice(){ // decides how far the player can
           max = Math.floor(Math.random() * diceSides)
        }
   
    }

