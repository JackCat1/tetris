import {TetrisView} from './tetrisView';
import {Figure} from './figure';
export class Tetris{
    constructor(){
        this.view = new TetrisView();
        this.gameSpeed = 300;
               
    }
    init(screen){        
        this.screen = screen;        
        return new Promise((resolve,reject)=>{
            let control = this.view.render(this.screen);
            this.result = control.output;
            this.startControl = control.startBtn;
            this.startControl.addEventListener('click',()=>{
                this.matrix = this.sliceCanvas();
                this.curretFigire = this.getFigure();
                this.intervalId = this.downFigure();
                this.isPauseGame = false;                
                document.addEventListener('keydown',(event)=>{
                    switch(event.keyCode){
                        case 37: 
                            this.isLeft();                       
                            break;
                        case 39: 
                            this.isRight();                            
                            break;
                        case 40:
                            this.isBottom(); 
                            //this.curretFigire.toDown();                            
                            break;
                        case 38:
                            this.isRound();
                            break;
                        case 32:
                            if(this.isPauseGame){
                                this.intervalId = this.downFigure();                                 
                            } else{
                                clearInterval(this.intervalId);
                            }
                            this.isPauseGame = !this.isPauseGame;
                            break;
                    }

                });
                this.upSpeed();
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
        return setInterval(()=>{
          this.isBottom();
          this.isResult();                            
        },this.gameSpeed);
    }
    isLeft(){
        let isStop = false;
        this.curretFigire.body.forEach(item=>{
            if(item % 10 === 0) isStop = true;
            if(this.matrix[item-1].block>-1)isStop = true;
        });
        if(!isStop)this.curretFigire.toLeft(); 
    }
    isRight(){
        let isStop = false;
        this.curretFigire.body.forEach(item=>{            
            if((item+1) % 10 === 0) isStop = true;
            if(this.matrix[item+1].block>-1)isStop = true;
        });
        if(!isStop)this.curretFigire.toRight(); 
    }
    isRound(){
        let isStop = false;
        let oldVers = [];
        this.curretFigire.body.forEach(item=>oldVers.push(item));
        this.curretFigire.round();
        this.curretFigire.body.forEach(item=>{            
             if(this.matrix[item+1].block>-1)isStop = true;
        });
        if(isStop)this.curretFigire.body=oldVers;
        else{
            isStop = false;
            this.curretFigire.body.forEach(item=>{
                if((item+1)%10===0){
                    this.curretFigire.body.forEach(x=>{
                        if(x>item&&this.curretFigire.type===0)this.curretFigire.toLeft();
                        if(x>item&&this.curretFigire.type>0)isStop=true;
                    });
                }
            });
            if(isStop){
                this.curretFigire.toLeft();
            }
        }

        
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
        if(!isStop)this.curretFigire.toDown(); 
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
        let resArr = [];
        let isGameEnd = false;
        for(let i=0;i<this.matrix.length;i+=10){
            let count = 0;
            for(let j=i;j<i+10;j++){
                if(this.matrix[j].block>-1)count++;
                if(i===0 && this.matrix[j].block>-1)isGameEnd=true;
            }
            if(count===10)resArr.push(i);
        }
        if(isGameEnd){
            console.log('Game over!');
            clearInterval(this.intervalId);
            window.cancelAnimationFrame(this.stopLoop);
            this.view.showText('Game over!!!');          

        } else if(resArr.length>0){
                    for(let i=0;i<resArr.length;i++){                
                        for(let j=resArr[i];j<resArr[i]+10;j++){
                            this.matrix[j].block=-1;
                            for(let t=j;t>=10;t-=10){
                                this.matrix[t].block=this.matrix[t-10].block;
                            }
                        }
                    }
                    switch(resArr.length){
                        case 1:this.result.innerText = +this.result.innerText+100;
                        break;
                        case 2:this.result.innerText = +this.result.innerText+300;
                        break;
                        case 3:this.result.innerText = +this.result.innerText+700;
                        break;
                        case 4:this.result.innerText = +this.result.innerText+1500;
                        break;
                    }           
            
                }      
    }
    upSpeed(){
        setInterval(()=>{
            this.gameSpeed -= 20;
            clearInterval(this.intervalId);            
            this.intervalId = this.downFigure();
        },30000);
    }
}