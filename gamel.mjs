import {Player} from './playerP.mjs'
import { Input } from './inputL.mjs'
import { state } from './state.mjs'
import { StateMachine } from './state.mjs'
import { Map, tileCoords } from './map.mjs'
export let playerMoved = 0
export let hasMoved = 0

let rollin
let currentDice
let lastDice
let character = 1

    // 1, axle. 2, berry, and so on

document.getElementById("up").addEventListener("click", ()=>
{
    if(state.ableToMove === true){
        playerMoved++
        hasMoved++
        state.tilesG++
    }
    else{
        alert("You're done moving silly! Stay in place like the forest tells you to")
    }
})

document.getElementById("down").addEventListener("click", ()=>
{
    if(state.ableToMove === true){
        playerMoved++
        hasMoved++
        state.tilesG++

        if(playerMoved === tileCoords.length){
            tileCoords.splice(0)
        }
        if(playerMoved === state.movesTo){
            state.movesTo = 0
            playerMoved = 0
            state.ableToMove = true
        }
    }
    else{
         alert("You're done moving silly! Stay in place like the forest tells you to")
    }
})

window.addEventListener('load', function(){
    let moveTim = 200
    let moveNum = 0

    const gameBoard = canvas1;
    const board = gameBoard.getContext("2d");
    gameBoard.width = window.innerWidth
    gameBoard.height = window.innerHeight


    class Game {
        constructor(width, height) {
            this.width = gameBoard.width
            this.height =   gameBoard.height
            this.bw = gameBoard.width = window.innerWidth
            this.player = new Player(this)
            this.idle = document.getElementById('witch')
            this.input = new Input()
            this.keys = this.input.keys
            this.incre = 0
            this.map = new Map(this)
            this.state = new StateMachine(this)
        }

        update(context){
        this.player.update(context)
        this.map.update(context)
        
    
        }

        draw(context){
        this.map.draw(context) // draws the map & tiles n stuff
        this.player.draw(context) // draws the player sprite :D
        }
        diceDisplay(){
                const dice = document.getElementById("dCon")
                const diceHTML = dice.getElementsByTagName("img")
                const dices = diceHTML// yes ik this is grammatically incorrect
                rollin = setInterval(()=>{
                currentDice = Math.floor(Math.random() * 6) + 1

                if(lastDice){
                    dices[lastDice - 1].style.display = "none"
                        
                }
                else{
                    lastDice = currentDice
                    
                }
                if(currentDice === lastDice && currentDice != 6){
                      
                        currentDice++
                        

                if(currentDice === 6){
                    currentDice = 5
                    
                    }
                }

                    dices[currentDice - 1].style.display = "block"
                    lastDice = currentDice
                    }, 80)
                }
    }
    

    const game = new Game(gameBoard.width, gameBoard.height)
    const diceButton = document.getElementById("diceButton")
    diceButton.addEventListener('click', ()=>{
    if(state.ableToMove === true){
        return
       
        
    }
    else{
       const dice = document.getElementById("dCon")
       dice.style.display = "flex"
       state.rolling = true
       game.diceDisplay()
    }
})

document.getElementById("dCon").addEventListener("click", ()=>{
    if(state.rolling){
        clearInterval(rollin)
        state.movesTo = currentDice
        console.log("moves "+ currentDice)
        state.ableToMove = true 
        state.rolling = false
        document.getElementById("tell").textContent = "You rolled a " + currentDice + "!"
          const timeish = setTimeout(

        function(){
            document.getElementById("dCon").style.display = "none"
            document.getElementById("tell").textContent = ""
            clearTimeout(timeish)
            }, 2000 
        )
    }
})
    function move(){

        board.clearRect(0, 0, gameBoard.width, gameBoard.height)
        game.update(board) // uhhh feeds each of the modules info on the state n stuff I think
        game.draw(board, state) //directs you to the draw function which has uhhh the player and map drawn out by the other modules

        const time = setInterval(

            function(){
            requestAnimationFrame(move)
            clearInterval(time)
            }, 300 // lazy fix for movement. might change
        )


    }
    move()

})

