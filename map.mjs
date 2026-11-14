let tilesPrinted = 0 
let slope = 2
export let tileCoords = []
export class Map {
        constructor(game) {
        this.game = game
        this.bg = document.getElementById("b1")
        this.state = this.game.state
        }

drawB(context, state){

    const tilesGone = this.state.tilesG

    if (tilesGone <= 25) {
        context.drawImage(this.bg, this.game.width, this.game.height)
        console.log("First Map!")
        return
    }
    
    if (tilesGone <= 60) {
        context.drawImage(this.bg, this.game.width, this.game.height)
        console.log("2 Map!")
        return
    }

    if (tilesGone <= 100) {
        context.drawImage(this.bg, this.game.width, this.game.height)
        console.log("3 Map!")
        return
    }

    if (tilesGone <= 150) {
        context.drawImage(this.bg, this.game.width, this.game.height)
        console.log("4 Map!")
        return
    }

    if (tilesGone <= 200) {
        context.drawImage(this.bg, this.game.width, this.game.height)
        console.log("last Map!")
        return
}

    // updating the bg after a certain amount of tiles have been passed

}
coordinateGenerator (){
    const maxHeight = this.game.height - 500
    const maxWidth = this.game.width - 500

    if(!tilesPrinted){ // to get the tile all of the other tiles positions'll be based on :D

        const x = Math.random() * (maxWidth + 1)
        const y = maxHeight

        tileCoords.push({x, y})    
        tilesPrinted++
}

else{
      const offsetY = Math.random() * 400 // the offset is below the height of the tile to align every tile roughly in a line. ..I hope
      const offsetX = Math.random() * 500 //thing to add to 500

      const ox = tileCoords[tileCoords.length - 1].x // values new values are based on 
      const oy = tileCoords[tileCoords.length - 1].y

      const nx = ox + 500 + offsetX // new values to makes
      const ny = oy - offsetY
      
    tileCoords.push({nx, ny})    
    tilesPrinted++

    
}
}

drawTiles(context, state){

    for (let i = 0; i < 9; i++){


        this.coordinateGenerator()

        const dx = tileCoords[i].x 
        const dy = tileCoords[i].y

        context.fillStyle = "pink";
        context.fillRect(dx, dy, 500, 500);
        tilesPrinted++
        console.log("tile drawn")
    }
    
    tileCoords = []

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

draw(){
    this.drawB(this.game.context, this.game.state)
    this.drawTiles(this.game.context, this.game.state)
}
    }

