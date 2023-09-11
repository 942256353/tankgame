import config from "../config";
import { image } from "../service/image";
import { directionEnum } from "../enum/directionEnum";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import tank from "../canvas/tank";
import utils from "../utils";

export default class extends modelAbstract implements IModel{
    public canvas: ICanvas = tank;
    name: string = 'tank';
   
    render(): void {
        // this.randomDirection()
        // super.draw()
        // setInterval(()=>{
        //     this.move()
        // },50)
        super.draw()
        this.move()
        if(_.random(20)==1) this.direction = directionEnum.bottom;
    }
    protected move(){
        while(true){
            let x = this.x
            let y = this.y
            switch (this.direction) {
                case directionEnum.top:
                    y--
                    break;
                case directionEnum.bottom:
                    y++
                    break;
                case directionEnum.left:
                    x--
                    break;
                case directionEnum.right:
                    x++
                    break;
            }
            if(utils.isModelTouch(x,y)||utils.isCanvasTouch(x,y)){
                this.randomDirection()
            }else{
                this.x = x
                this.y = y
                break
            }
        }
        super.draw()
    }
    image(){
        let direction = this.name+_.upperFirst(this.direction)
        return image.get(direction as keyof typeof config.images)!
    }
}