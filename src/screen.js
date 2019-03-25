export class Screen{
    constructor(width=640,height=640){
        //Первоначальная настройка экрана
        this.width=width;
        this.height=height;
        this.body = document.body;
        this.body.style.width = this.width+'px';
        this.body.style.height = this.height+'px';               
    }
    //Создать элемент на экране
    buildElemment(elem,elemClass='',parent=this.body){
        let element = document.createElement(elem);
        element.setAttribute('class',elemClass);
        parent.appendChild(element);
        return element;
    }
    //Удалить елемент с экрана
    removeElement(element){
        return element.remove();
    }
    
}