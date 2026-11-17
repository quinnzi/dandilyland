export const tileCoords = []
let tilesPrinted = 0 
let slope = 100
let tilesdrawn = 0
let tilesT = [ // for now theres two cause i lit have one day left & need to learn to scope D; aa
    {type: "basic"},
    {type: "kill"}, 
    {type: "blank"}
]

import { state } from './state.mjs'
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
        console.log("First Map!")
        console.log(this.bg1)
        return
    }
    
    if (tilesGone <= 60) {
        context.drawImage(this.bg2, this.game.width, this.game.height)
        console.log("2 Map!")
        return
    }

    if (tilesGone <= 100) {
        context.drawImage(this.bg3, this.game.width, this.game.height)
        console.log("third Map!")
        return
    }

    if (tilesGone <= 150) {
        context.drawImage(this.bg4, this.game.width, this.game.height)
        console.log("4 Map!")
        return
    }

    if (tilesGone <= 200) {
        context.drawImage(this.bg5, this.game.width, this.game.height)
        console.log("last Map!")
        return
}

    // updating the bg after a certain amount of tiles have been passed

}
coordinateGenerator(){
    console.log(this.game.height)
    console.log(this.game.height)
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
        console.log("YOUR MATH IS OFFFFFFFFF")
        return
      }
      console.log(tileCoords)
      tileCoords.push({x: nx, y: ny, type: "blank"})    
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
    context.fillStyle = "rgb(252, 184, 221)"
    context.fillRect(dx, dy, 150, 150)
    context.strokeStyle = 'rgb(114, 17, 114)';
    context.lineWidth = 3; // border thickness
    context.strokeRect(dx, dy, 150, 150);
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

