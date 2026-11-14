
let slope = 2
let tilesdrawn = 0
export const tileCoords = []
export class Map {
        constructor(game) {
        this.game = game
        this.bg1 = document.getElementById("b1")
        this.bg2 = document.getElementById("b1")
        this.bg3 = document.getElementById("b1")
        this.bg4 = document.getElementById("b1")
        this.bg5 = document.getElementById("b1")
        this.state = this.game.state
        }

drawB(context, state){

    const tilesGone = this.state.tilesG

    if (tilesGone <= 25) {
        drawImage(this.bg, this.game.width, this.game.height)
        console.log("First Map!")
        return
    }
    
    if (tilesGone <= 60) {
        drawImage(this.bg, this.game.width, this.game.height)
        console.log("2 Map!")
        return
    }

    if (tilesGone <= 100) {
        drawImage(this.bg, this.game.width, this.game.height)
        console.log("3 Map!")
        return
    }

    if (tilesGone <= 150) {
        drawImage(this.bg, this.game.width, this.game.height)
        console.log("4 Map!")
        return
    }

    if (tilesGone <= 200) {
        drawImage(this.bg, this.game.width, this.game.height)
        console.log("last Map!")
        return
}

    // updating the bg after a certain amount of tiles have been passed

}
coordinateGenerator(px, py, tilesPrinted){
//tbc
}

drawTiles(context, state){


    /* if (!state.gone){
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
}

draw(){
    this.drawB(this.game.context, this.game.state)
    this.drawTiles(this.game.context, this.game.state)
}
    }

