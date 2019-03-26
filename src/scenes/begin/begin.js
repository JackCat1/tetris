import {BeginView} from './beginView';
export class Begin{
    constructor(){        
        this.view = new BeginView();              
    }
    init(screen){
        this.screen = screen;
        return new Promise((resolve,reject)=>{
           let control = this.view.render(this.screen);
            control.button.addEventListener('click',()=>{
                this.screen.removeElement(control.div);
                resolve();            
            }); 
        });        
    }   
}