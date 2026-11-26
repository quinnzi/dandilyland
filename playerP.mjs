
import { state } from './state.mjs'
import { tileCoords } from './map.mjs'
import { keyArray } from './inputL.mjs'
import { hasMoved, playerMoved } from './gamel.mjs'




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
        

        context.drawImage(this.sprite, tileCoords[hasMoved].x, tileCoords[hasMoved].y, 150, 150)
    }

    update(context){
        console.log(keyArray)
        if(playerMoved === state.movesTo){
        state.ableToMove = false
        return
        }
        }
   
    }

