export const state = {
    tilesG: 0,
    screen: 1,
    movesTo: 0,
    ableToMove: false,
    lives: 3,
    luck: 0,
    strength: 0,
    smarts: 0,
    rolling: false,
    tileType: "null",
    stalling: false
}


export class StateMachine {
        constructor(game) {
        this.game = game
         if(this.game.input.keys)
          {  this.keyArray = this.game.input.keys}
         
         

    
        }

   
    }

