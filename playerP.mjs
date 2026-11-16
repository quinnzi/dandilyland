
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
        console.log(hasMovedTotal)
        context.drawImage(this.sprite, tileCoords[hasMovedTotal].x, tileCoords[hasMovedTotal].y, 250, 200)
    }

    update(context){
        console.log(keyArray)
        if(keyArray.includes("ArrowDown")){

            if(state.movesTo - hasMoved != 0){
                this.draw(context)
                hasMoved++
                hasMovedTotal++
            }

        else{
            console.log("you're done moving!")
            this.draw(context)
            }

            }
    

       

        }
   
    }

