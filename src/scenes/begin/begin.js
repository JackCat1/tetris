import {BeginView} from './beginView';
export class Begin{
    constructor(){
        console.log('I am Begin scene');
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