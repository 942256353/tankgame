import boss from "../canvas/boss";
import bullet from "../canvas/bullet";
import play from "../canvas/play";
import steel from "../canvas/steel";
import tank from "../canvas/tank";
import wall from "../canvas/wall";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
import utils from "../utils";
import modelAbstract from "./modelAbstract";

export default class extends modelAbstract implements IModel{
    public canvas: ICanvas = bullet;
    name: string='bullet';
    constructor(public tank:IModel) {
        super(tank.x+config.model.width/2,tank.y+config.model.height/2);
        this.direction = tank.direction as unknown as directionEnum;
    }
    image(): HTMLImageElement {
        return image.get('bullet')!;
    }
    render(): void {
        let x = this.x;
        let y = this.y;
        let step = this.tank.name=='play'?10:5
        switch(this.direction){
            // 子弹的移动
            case directionEnum.top:
                y -=step;
                break;
            case directionEnum.bottom:
                y +=step;
                break;
            case directionEnum.left:
                x -=step;
                break;
            case directionEnum.right:  
                x +=step;
                break;
        }
        //碰撞检测
        const touchModel = utils.isModelTouch(x,y,4,4,[...wall.models,...steel.models,...boss.models,...tank.models,...play.models])
        if(utils.isCanvasTouch(x,y,2,2)){
            this.destory();
        }else if(touchModel&&touchModel.name !==this.tank.name){
            this.destory();
            if(touchModel.name !== 'steel')  touchModel.destory();
            this.blast(touchModel)
        }else{
            this.x = x;
            this.y = y;
            this.draw()
        }
    }
    protected draw(){
        this.canvas.ctx.drawImage(this.image(),this.x, this.y,4,4,);
    }
   
}