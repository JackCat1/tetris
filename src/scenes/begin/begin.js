import {View} from './view';
export class Begin{
    constructor(screen = {}){
        console.log('I am Begin scene');
        // this.screen = screen;
        // this.view = new View(screen);        
    }
    init(screen){
        this.view = new View();
        this.view.init(screen);        
    }
}