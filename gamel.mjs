import {Player} from './playerP.mjs'
import { Input } from './input.mjs'
import { state } from './state.mjs'
import { screen } from './playerP.mjs'
import { StateMachine } from './state.mjs'
import { Map } from './map.mjs'
  // 1 is Axle
    // 2 is Berry
// 3 is Can
   // 4 is D
window.addEventListener('load', function(){
    let moveTim = 200
    let moveNum = 0

    const gameBoard = canvas1;
    const board = gameBoard.getContext("2d");
    gameBoard.width = window.innerWidth
    gameBoard.height = window.innerHeight


    class Game {
        constructor(width, height) {
            this.width = width
            this.height = height
            this.bw = gameBoard.width = window.innerWidth
            this.player = new Player(this)
            this.idle = document.getElementById('witch')
            this.input = new Input()
            this.incre = 0
        }

        update(context){
        this.player.update(this.input.keys, context)
        this.map.update(this.input.keys, context)
        }

        draw(context, state){
           this.map.draw(context, state) // draws the map & tiles n stuff
           this.player.draw(context, state) // draws the player sprite :D
        }
    }
    

    const game = new Game(gameBoard.width, gameBoard.height)


    function move(){

        board.clearRect(0, 0, gameBoard.width, gameBoard.height)
        game.update(board) // uhhh feeds each of the modules info on the state n stuff I think
        game.draw(board, state) //directs you to the draw function which has uhhh the player and map drawn out by the other modules

        const time = setInterval(

            function(){
            requestAnimationFrame(move)
            clearInterval(time)
            }, 200 // lazy fix for movement. might change
        )


    }
    move()
    
})
