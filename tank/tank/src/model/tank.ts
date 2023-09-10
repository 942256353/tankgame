import config from "../config";
import { image } from "../service/image";
import { directionEnum } from "../enum/directionEnum";
import modelAbstract from "./modelAbstract";
import _ from 'lodash'
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import tank from "../canvas/tank";

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
            if(this.isTouch(x,y)===true){
                this.randomDirection()
            }else{
                this.x = x
                this.y = y
                break
            }
        }
        super.draw()
    }
    //碰撞检测
    protected isTouch(x:number,y:number):boolean{
        if(x<0||x+this.width>config.canvas.width||y<0||y+this.height>config.canvas.height) return true;
        const models = [...water.models,...wall.models,...steel.models]
        return models.some(model=>{
           const state =
           x+this.width<=model.x||
           x>=model.x+model.width||
           y+this.height<=model.y||
           y>=model.y+model.height;
           return !state
        })
    }
    image(){
        let direction = this.name+_.upperFirst(this.direction)
        return image.get(direction as keyof typeof config.images)!
    }
}