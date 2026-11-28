
import { state } from './state.mjs'
import { keyArray } from './inputL.mjs'
import { hasMoved, playerMoved } from './gamel.mjs'
import { Map, tileCoords, tilesPrinted } from './map.mjs'



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
        
        if(!tileCoords[hasMoved]){
            this.game.map.coordinateGenerator(newMap = true)

        }
        context.drawImage(this.sprite, tileCoords[hasMoved].x, tileCoords[hasMoved].y, 150, 150)
    }

    update(context){
        console.log(keyArray)

        }
   
    }

