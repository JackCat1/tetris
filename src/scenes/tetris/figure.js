export class Figure{
    constructor(startBlock,type,base){
        this.type=type;
        this.base = base;
        this.body = this.build(type,startBlock);
        
    }    
    
    round(){            
        switch(this.type){
                //Figure I
                case 0: 
                        if(this.body[0]+1===this.body[1]){
                                let x=this.body[1];
                                this.body[0]=x+10;
                                this.body[1]=x;
                                this.body[2]=x-10;
                                this.body[3]=x-20;
                        } else{
                                let x=this.body[0];
                                this.body[0]=x;
                                this.body[1]=x+1;
                                this.body[2]=x+2;
                                this.body[3]=x+3;
                        }
                        break;
                //Figure J
                case 1:
                        let firureView = -1;
                        if(this.body[0]+11===this.body[2]) firureView=0;
                        if (this.body[0]-9===this.body[2]) firureView = 1;
                        if (this.body[0]+2===this.body[2]) firureView = 2;
                        if (this.body[0]+10===this.body[2]) firureView = 3;
                        let x;
                        switch(firureView){
                                case 0:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x-9;
                                        this.body[3]=x-19;
                                        break;
                                case 1:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+2;
                                        this.body[3]=x+12;
                                        break;
                                case 2:                                
                                        x =this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+10;
                                        this.body[3]=x+20;
                                        break;
                                case 3:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+10;
                                        this.body[2]=x+11;
                                        this.body[3]=x+12;
                                        break;
                        }  
                        break;
                //Figure L
                case 2:
                        firureView = -1;
                        if(this.body[0]+20===this.body[2]) firureView=0;
                        if (this.body[0]+2===this.body[2]) firureView = 1;
                        if (this.body[0]+11===this.body[2]) firureView = 2;
                        if (this.body[0]-9===this.body[2]) firureView = 3;                
                        switch(firureView){
                                case 0:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+2;
                                        this.body[3]=x-8;
                                        break;
                                case 1:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+11;
                                        this.body[3]=x+21;
                                        break;
                                case 2:                                
                                        x =this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x-10;
                                        this.body[2]=x-9;
                                        this.body[3]=x-8;
                                        break;
                                case 3:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+10;
                                        this.body[2]=x+20;
                                        this.body[3]=x+21;
                                        break;
                        }  
                        break;
                //Figure O
                case 3:                        
                        break;
                //Figure S
                case 4:
                        firureView = -1;
                        if(this.body[0]+11===this.body[2]) firureView=0;
                        if (this.body[0]-9===this.body[2]) firureView = 1;
                        switch(firureView){
                                case 0:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x-9;
                                        this.body[3]=x-8;
                                        break;
                                case 1:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+10;
                                        this.body[2]=x+11;
                                        this.body[3]=x+21;
                                        break;                                
                        } 
                        break;
                //Figure T
                case 5:
                        firureView = -1;
                        if(this.body[0]+2===this.body[2]) firureView=0;
                        if (this.body[0]-20===this.body[2]) firureView = 1;
                        if (this.body[0]-9===this.body[2]) firureView = 2;
                        if (this.body[0]+11===this.body[2]&&this.body[0]-9===this.body[3]) firureView = 3;
                        
                        switch(firureView){
                                case 0:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x-10;
                                        this.body[2]=x-20;
                                        this.body[3]=x-9;
                                        break;
                                case 1:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x-9;
                                        this.body[3]=x+2;
                                        break;
                                case 2:                                
                                        x =this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+11;
                                        this.body[3]=x-9;
                                        break;
                                case 3:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+2;
                                        this.body[3]=x+11;
                                        break;
                        }  
                        break;
                //Figure Z
                case 6:
                        firureView = -1;
                        if(this.body[0]+11===this.body[2]) firureView=0;
                        if (this.body[0]-9===this.body[2]) firureView = 1;
                        switch(firureView){
                                case 0:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x-10;
                                        this.body[2]=x-9;
                                        this.body[3]=x-19;
                                        break;
                                case 1:
                                        x=this.body[0];
                                        this.body[0]=x;
                                        this.body[1]=x+1;
                                        this.body[2]=x+11;
                                        this.body[3]=x+12;
                                        break;                                
                        } 
                        break;
            }

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
                    body = [x,x+10,x+11,x+21];
                    break;
            //Figure T
            case 5:
                    body = [x,x+1,x+2,x+11];
                    break;
            //Figure Z
            case 6:
                    body = [x,x+1,x+11,x+12];
                    break;
        }
        return body;

    }
}