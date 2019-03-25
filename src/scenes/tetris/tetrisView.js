export class TetrisView{
    constructor(){
        this.blockImg = new Image();
        this.blockImg.src = 'media/blocks.png';
        this.sliceImg(this.blockImg);
              
        
    }
    sliceImg(img){
        img.onload = ()=>{
            let height = img.height;
            let blocksCoord = [];
            for(let index=0;index<img.width;index += height) blocksCoord.push(index);           
            this.blocks = {blocksCoord,height};                                 
        };
    }
    render(screen){
        // Создаем обертку
        let mainDiv = screen.buildElemment('div');
        mainDiv.id = 'main';
        //Создаем табло для вывода информации
        let tablo = screen.buildElemment('div','',mainDiv);
        tablo.id = 'tablo';
        // Создаем канвас
        let canvas = screen.buildElemment('canvas','',mainDiv);
        canvas.id = 'canvas';
        canvas.width = screen.width/2;
        canvas.height = screen.height;
        //Создаем стили оформления
        let style = screen.buildElemment('style','',mainDiv);
        style.innerText = 
                        `
                            #main{
                                height: ${screen.height}px;                                
                                width:${screen.width}px;
                                position:relative;
                                background: url(media/fon1.jpg);                                
                            }
                            #tablo{
                                height: ${screen.height}px;                                
                                width:${screen.width/2}px;
                                float: left;
                                
                                
                            }
                            #canvas{
                                position:absolute;
                                display:block;
                                right:0;
                                background: rgb(0,0,0,0.5);
                                border: 2px solid rgb(255, 153, 51);
                                border-radius: 5px;                                
                            }
                            .result{
                                text-align: center;
                            }
                            .label,.output{
                                margin: 5px 0;
                            }
                            .label{
                                font: bold 20px san-serif;
                                color:white;
                            }
                            .output{
                                font: 40px BancoDi;
                                color: yellow;
                            }
                            .panel{
                                margin: 100px 0;
                            }
                            .btn{
                                display:block;
                                text-align: center;
                                font: 60px BancoDi;
                                color: white;
                                text-shadow:1px 3px 15px red;
                                margin: 30px 0;
                            }
                            .btn:hover{
                                cursor:pointer;
                                font-size: 64px;
                            }
                        `;
        
        //Создаем табло для вывода очков
        let result = screen.buildElemment('div','result',tablo);
        let label = screen.buildElemment('p','label',result);
        label.innerText = 'Очки:';
        let output = screen.buildElemment('p','output',result);
        output.innerText = '000';

        //Создаем панель управления
        let panel = screen.buildElemment('div','panel',tablo);
        let startBtn = screen.buildElemment('a','btn',panel);
        startBtn.innerText = 'START';
        let stopBtn = screen.buildElemment('a','btn',panel);
        stopBtn.innerText = 'Stop';

        //Дополняем свойства объекта
        this.canvas = canvas.getContext('2d');

        //Возращаем контроллеру
        return {mainDiv,output, startBtn, stopBtn};
    }
}