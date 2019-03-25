export class BeginView{
    constructor(){
        console.log('View builded');
        this.pic = new Image();
        this.pic.src = 'media/fon1.jpg';
        this.butText = 'START';      
    }
    render(screen){
        console.log('Rernder start');
        //Обертка
        let div = screen.buildElemment('div');
        div.id = 'scene1';                
        //Кнопка старта
        let button = screen.buildElemment('a','',div);                
        button.text = this.butText;
        button.id = 'start-btn'; 
        //Стили офрмления сцены
        let style = screen.buildElemment('style','',div);
        style.innerText = `
                            #scene1{
                                min-height:100%;
                                background: url(${this.pic.src});
                                position: relative;
                            }
                            #start-btn{
                                font-family: BancoDi;
                                font-size: 60px;
                                color: white;
                                text-shadow:1px 3px 15px red;
                                position: absolute;
                                top:40%;
                                left:40%;
                                
                            }
                            #start-btn:hover{
                                cursor:pointer;
                                font-size:62px;
                            }                            
                            `;
        return {div,button};
    }    
}