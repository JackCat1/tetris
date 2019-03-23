export class View{
    constructor(){
        this.fon = new Image();
        this.fon.src = './media/fon1.jpg';
        this.buttonText = 'START';
    }
    init(screen){
        this.fon.addEventListener('load',()=>{
            screen.img(this.fon);
            screen.setText(this.buttonText,{fontSize:'80px',fontStyle:'BancoDi',x:screen.width/2,y:screen.height/2,color:'yellow'});
        });
    }    
}