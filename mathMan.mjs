let diceSides = 7
export let max = num1 + num2
export let num1 
export let num2

export class MM {
        constructor(game) {
        this.game = game
        this.char = this.game.char
        }
       

        rollDice(){// decides how far the player can go

           if(this.char === 2){
            if(Math.random() < .70){
                console.log("charmy Draw!")
                num1 = Math.floor(Math.random() * diceSides) + 1
                return
            }
           }
           num1 = Math.floor(Math.random() * diceSides) + 1
           num2 =  Math.floor(Math.random() * diceSides) + 1
        }
        getTileType(){ // decides 
           max = Math.floor(Math.random() * diceSides)
        }
   
    }

