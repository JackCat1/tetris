import {TetrisView} from './tetrisView';
import {Figure} from './figure';
export class Tetris{
    constructor(){
        this.view = new TetrisView();
               
    }
    init(screen){        
        this.screen = screen;        
        return new Promise((resolve,reject)=>{
            let control = this.view.render(this.screen);
            this.result = control.output.innerText;
            this.startControl = control.startBtn;
            this.startControl.addEventListener('click',()=>{
                this.matrix = this.sliceCanvas();
                this.curretFigire = this.getFigure();
                document.addEventListener('keydown',(event)=>{
                    switch(event.keyCode){
                        case 37: 
                            this.isLeft();                       
                            break;
                        case 39: 
                            this.isRight();                            
                            break;
                        case 40: 
                            this.curretFigire.toDown();                            
                            break;
                    }

                });
                this.downFigure();
                this.loop();
            });
            this.endControl = control.stopBtn;
            this.endControl.onclick = ()=>{
                screen.removeElement(control.mainDiv);
                resolve();
            };

        });
        
    }    
    loop(){
        this.stopLoop = window.requestAnimationFrame(this.loop.bind(this));
                
        //Очищаем канвас
        this.view.clearCanvas();
        //Строим фигуру
        this.curretFigire.body.forEach(item=>{
            this.view.addBlock(this.curretFigire.base,this.matrix[item].x,this.matrix[item].y);
        });
        //Строим матрицу
        this.matrix.forEach(item=>{
            if(item.block>-1){
                this.view.addBlock(item.block,item.x,item.y);
            }
        });             
        
    }
    downFigure(){
        setInterval(()=>{
          this.isBottom();
          this.curretFigire.toDown();
          this.isResult();  
        },300);
    }
    isLeft(){
        let isStop = false;
        this.curretFigire.body.forEach(item=>{
            if(item % 10 === 0) isStop = true;
        });
        if(!isStop)this.curretFigire.toLeft(); 
    }
    isRight(){
        let isStop = false;
        this.curretFigire.body.forEach(item=>{            
            if((item+1) % 10 === 0) isStop = true;
        });
        if(!isStop)this.curretFigire.toRight(); 
    }
    isBottom(){
        let isStop=false;
        this.curretFigire.body.forEach(item=>{
            if(item>=190)isStop=true;
            else if(this.matrix[item+10].block>-1)isStop=true;
        });
        if(isStop){
            this.curretFigire.body.forEach(item=>{
                this.matrix[item].block=this.curretFigire.base;
            });
            this.curretFigire = this.getFigure(); 
        }
    }    
    getFigure(){
        let type = Math.floor(Math.random() * (7 - 0)) + 0;
        let base = Math.floor(Math.random() * (10 - 0)) + 0;
        base = this.view.blocks.blocksCoord[base];
        let startBlock = Math.floor(Math.random() * (7 - 0)) + 0;
        return new Figure(startBlock,type,base-1);
    }
    sliceCanvas(){
        let matrix =[];
        for(let y=0;y<this.view.canvas.height;y+=this.view.blocks.height){
            for(let x=0;x<this.view.canvas.width;x+=this.view.blocks.height){
                matrix.push({x,y,block:-1});
            }
        }
        return matrix;        
    }
    isResult(){
        for(let i=0;i<this.matrix.length;i+=10){
            if(this.matrix[i].block>-1 && 
                this.matrix[i+1].block>-1 && 
                this.matrix[i+2].block>-1 && 
                this.matrix[i+3].block>-1 && 
                this.matrix[i+4].block>-1 && 
                this.matrix[i+5].block>-1 && 
                this.matrix[i+6].block>-1 && 
                this.matrix[i+7].block>-1 && 
                this.matrix[i+8].block>-1 && 
                this.matrix[i+9].block>-1  
                ){
                    this.result+=100;


            }
        }
    }
}