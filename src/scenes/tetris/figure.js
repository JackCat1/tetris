export class Figure{
    constructor(startBlock,type,base){
        this.type=type;
        this.base = base;
        this.body = this.build(type,startBlock);
        
    }    
    
    round(){

    }
    toLeft(){
         for(let i=0;i<this.body.length;i++){
            this.body[i]=this.body[i]-1;
         }                
    }
    toRight(){
        for(let i=0;i<this.body.length;i++){
            this.body[i]=this.body[i]+1;
         } 
    }
    toDown(){
        for(let i=0;i<this.body.length;i++){
            this.body[i]=this.body[i]+10;
         }
    }
    build(type,x){
        let body=[];
        /*0-координата за левую границу
        3-координата за правую границу
        2-координата за низ        
        */

        switch(type){
            //Figure I
            case 0: 
                    body = [x,x+1,x+2,x+3];
                    break;
            //Figure J
            case 1:
                    body = [x,x+10,x+11,x+12];
                    break;
            //Figure L
            case 2:
                    body = [x,x+10,x+20,x+21];
                    break;
            //Figure O
            case 3:
                    body = [x,x+1,x+10,x+11];
                    break;
            //Figure S
            case 4:
                    body = [x,x+10,x+21,x+11];
                    break;
            //Figure T
            case 5:
                    body = [x,x+1,x+11,x+2];
                    break;
            //Figure Z
            case 6:
                    body = [x,x+1,x+11,x+12];
                    break;
        }
        return body;

    }
}