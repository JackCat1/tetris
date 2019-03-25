import { Screen } from "./screen";
import {scenes} from './scenes/scenes';


export class Game{
    constructor(){
        this.screen = new Screen();
        this.scenes = scenes;
        this.currentScene = 1;        
    }
    init(){
        this.scenes[this.currentScene].init(this.screen)
                                        .then(()=>{                                            
                                            console.log(this.currentScene);
                                            this.changeScene();
                                            console.log(this.currentScene);                                            
                                            this.init();                                            
                                        });        
        
    }
    changeScene(){        
        if(this.currentScene === this.scenes.length - 1) this.currentScene=0;            
        else this.currentScene++;        
    }
}