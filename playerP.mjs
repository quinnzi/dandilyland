
export class Player {
        constructor(game) {
         this.keys = his.game.input.keys
         this.sprite = document.getElementById("player")
        }

        update(){
            
                switch (ev.code) {
                    case 'ArrowDown':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;

                        case 'ArrowUp':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;

                        case 'ArrowRight':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;

                        case 'ArrowLeft':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;

                        case 'Enter':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }
                        break;
                        case 'KeyE':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }

                        break;
                         
                        case 'Space':
                        if(this.keys.indexOf(ev.code) === -1){
                            this.keys.push(ev.code)
                        }

                        break;
                        
                
                    default:
                      console.log(this.keys)  
                        break;
                }

       

        }
   
    }

