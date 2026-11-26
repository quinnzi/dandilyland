export const tileCoords = []
let tilesPrinted = 0 
let slope = 100
let tilesdrawn = 0
let until = 0 
let tracked = 0
let tilesT = [ // for now theres two cause i lit have one day left & need to learn to scope D; aa
    {type: "basic"},
    {type: "kill"}, 
    {type: "blank"}
]

let tileT = document.getElementById("default")

    let tileColor = "rgb(11, 117, 20)"

import { state } from './state.mjs'
import { hasMoved, playerMoved } from './gamel.mjs'

export class Map {
        constructor(game) {
        this.game = game
        this.bg1 = document.getElementById("b1")
        this.bg2 = document.getElementById("b2")
        this.bg3 = document.getElementById("b3")
        this.bg4 = document.getElementById("b4")
        this.bg5 = document.getElementById("b5")
        this.state = this.game.state
        this.tc = tileCoords

        }

drawB(context){

    const tilesGone = state.tilesG
     
    if (tilesGone <= 25) {
        
        context.drawImage(this.bg1, 0, 0, this.game.width, this.game.height)
        return
    }
    
    if (tilesGone <= 60) {
        context.drawImage(this.bg2, this.game.width, this.game.height)
        return
    }

    if (tilesGone <= 100) {
        context.drawImage(this.bg3, this.game.width, this.game.height)
        return
    }

    if (tilesGone <= 150) {
        context.drawImage(this.bg4, this.game.width, this.game.height)
        return
    }

    if (tilesGone <= 200) {
        context.drawImage(this.bg5, this.game.width, this.game.height)
        return
}

    // updating the bg after a certain amount of tiles have been passed

}

chooseTile(){
    const types = ["death", "task", "basic"]
    const w = Math.random() * 4 
    const which = Math.floor(w)
    return types[which]
}


coordinateGenerator(){
    until = Math.floor((Math.random() * 10) + 3)
   
    console.log("until" + until)
    const maxHeight = this.game.height - 150 //THIS IS THE M A X HEIGHT ughh why is y inverseeeedddd okay so every value after has to be below this but not zero, gots it????
    const maxWidth = this.game.width - 250

    if(!tilesPrinted){ // to get the tile all of the other tiles positions'll be based on :D

        const x = Math.round(Math.random()) * (maxWidth + 1)
        const y = maxHeight

        tileCoords.push({x: 350, y, type: "blank"})    
        tilesPrinted++
        console.log(tileCoords)
}

else{
   
      const offsetY = Math.round(Math.random() * 10)  + 150// the offset is below the height of the tile to align every tile roughly in a line. ..I hope
      const offsetX = Math.round(Math.random() * 100) + 100 //thing to add to 500

      const ox = tileCoords[tileCoords.length - 1].x // values new values are based on 
      const oy = tileCoords[tileCoords.length - 1].y

      const nx = ox + offsetX // new values to make

      const ny = oy - offsetY
     
      if(ny < 0){
        return
      }

        if (tracked < until){
             tileCoords.push({x: nx, y: ny, type: "blank"})   
            tracked++ 
        }
        else {
            tracked = 0;
            tileCoords.push({x: nx, y: ny, type: this.chooseTile()})
        }
     
}
}
tileRun(tileT){
// this function runs the tile action
    switch (tileT) {
        case "death":{
                    let norp = 1                    
                    const toFloor = Math.random() * 7 
                    const atm = Math.floor(toFloor + 1)
                    if(Math.random() > .5){
                    norp = -1 
                    }
                    const finalMove = norp * atm
                    state.tileType = "basic"
                    state.movesTo = finalMove
                    state.ableToMove = true
                   }
            break;

            case "task":
              {     let norp = 1                    
                    const toFloor = Math.random() * 7 
                    const atm = Math.floor(toFloor + 1)
                    if(Math.random() > .5){
                        norp = -1 
                    }
                    const finalMove = norp * atm
                    state.tileType = "basic"
                    state.movesTo = finalMove
                    state.ableToMove = true
       }
            break;

                case "basic":
                   
                    {
                    let norp = 1                    
                    const toFloor = Math.random() * 7 
                    const atm = Math.floor(toFloor + 1)
                    if(Math.random() > .5){
                        norp = -1 
                    }
                    const finalMove = norp * atm
                    state.tileType = "basic"
                    state.movesTo = finalMove
                    state.ableToMove = true
                    console.log("basic")

                }        
            
            break;
    
        default:
            break;
    }
}


drawTiles(context){
    tilesPrinted = tileCoords.length
    for (let i = 0; i < 9; i++){
    this.coordinateGenerator()
}
    for (let i = 0; i <= tileCoords.length - 1; i++){
    this.coordinateGenerator()
    const dx = tileCoords[i].x 
    const dy = tileCoords[i].y
        switch (tileCoords[i].type) {
        case "death":
            tileT= document.getElementById("death")
            break;

            case "task":
            tileT= document.getElementById("quest")
            break;

            case "basic":
               tileT= document.getElementById("basic")
            break;

            case "blank":
            tileT= document.getElementById("default")
            break;

        default:
            break;
    }

    
 context.drawImage(tileT, dx, dy, 200, 200)




        }
        


}

    /* if (!state.tilesG){
        for(let i = 0; i < 9; i++){
         context.drawRect()
         // oh god how do i do a random s shape uhhh
         // lets think lines
         // one of the tiles starts at a random x at the bottom
         // that coordinate is what the othrs go off of so uhh say, (300, 700) was dx and dy
         // we'd do a slope of uhhh oh god im bad at math i need a line that reaches the corner of the screeeen
         // whatever, we'll do a slope of 2 x the tile width


        }
        
    } */


draw(context){
    this.drawB(context)
    this.drawTiles(context)
}
update(context){
    this.draw(context)
}
    }

