export class Screen{
    constructor(width=640,height=640){
        this.width=width;
        this.height=height;
        this.canvas = this.getCanvas();
        this.canvasContext = this.canvas.getContext('2d');
    }
    getCanvas(){
        let canvas = document.getElementsByTagName('canvas');
        if(canvas.length>0) return canvas[0];
        else {
            canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;           
            document.body.appendChild(canvas);
            return canvas;
        }
    }
    rect(x=0,y=0,width=10,height=10,color='black'){
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x,y,width,height);
    }
    img(img,x=0,y=0){
        this.canvasContext.drawImage(img,x,y);
    }
    setText(textBody,{fontSize,fontStyle,x,y,align='center',color='white'}){
        this.canvasContext.font = `${fontSize} ${fontStyle}`;
        this.canvasContext.textAlign = align;
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillText(textBody,x,y);
    }
}