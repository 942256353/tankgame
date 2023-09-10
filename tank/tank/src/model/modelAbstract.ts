import config from "../config";
import { directionEnum } from "../enum/directionEnum";
export default abstract class modelAbstract {
    abstract name:string
    abstract render():void
    abstract image():HTMLImageElement
    public abstract canvas:ICanvas
    public direction:directionEnum = directionEnum.top
    public width = config.model.width
    public height = config.model.height
    constructor(public x:number, public y:number){
        this.randomDirection()
    }

    //随机产生方向
    protected  randomDirection(){
        this.direction =  Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    }
    protected draw(){
        this.canvas.ctx.drawImage(this.image(), this.x, this.y,config.model.width, config.model.height);
    }
}