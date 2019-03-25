import {TetrisView} from './tetrisView';
export class Tetris{
    constructor(){
        this.view = new TetrisView();
               
    }
    init(screen){
        console.log('Tetris Build');
        this.screen = screen;        
        return new Promise((resolve,reject)=>{
            let control = this.view.render(this.screen);
            this.result = control.output.innerText;
            this.startControl = control.startBtn;
            this.startControl.onclick = this.start;
            this.endControl = control.stopBtn;
            this.endControl.onclick = ()=>{
                screen.removeElement(control.mainDiv);
                resolve();
            };

        });
        
    }
    start(){
        console.log('Game start');
        

    }
}