import { Screen } from "./screen";
import {scenes} from './scenes/scenes';


export class Game{
    constructor(){
        this.screen = new Screen();
        this.scenes = scenes;
        this.currentScene = 0;        
    }
    init(){
        this.scenes[this.currentScene].init(this.screen);        
        
    }
    changeScene(){
        this.changeScene = this.currentScene === this.scenes.length ? 0 : this.currentScene + 1;
    }
}