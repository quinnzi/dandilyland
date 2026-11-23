
import { state } from './state.mjs'
import { tileCoords } from './map.mjs'
import { keyArray } from './inputL.mjs'
let hasMoved = 0
let hasMovedTotal = 0

export class Player {
        constructor(game) {
         this.game = game
         this.keys = this.game.keys
         this.sprite = document.getElementById("player")
        }

    draw(context){
        if(!tileCoords || tileCoords.length === 0){
            return
        }
      
        context.drawImage(this.sprite, tileCoords[hasMovedTotal].x, tileCoords[hasMovedTotal].y, 250, 200)
    }

    try(context){
        if(keyArray.includes("ArrowUp")){
            if(state.movesTo === hasMoved){
                console.log("you're done moving!")
                state.ableToMove = false
                hasMoved = 0
                state.movesTo = 0
            }
            console.log(state.movesTo - hasMoved)
            
            if(state.movesTo - hasMoved != 0 && state.ableToMove){
                hasMoved++
                hasMovedTotal++
                state.movesTo--
                this.draw(context)}
                console.log("I've moved " + hasMoved)
                console.log("I still have to move " + state.movesTo)
                console.log(hasMovedTotal)
            }
    }
    update(context){
        console.log(keyArray)
            
        
        
        

       

        }
   
    }

