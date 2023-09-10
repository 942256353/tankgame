import boss from "../canvas/boss";
import bullet from "../canvas/bullet";
import steel from "../canvas/steel";
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
        switch(this.direction){
            // 子弹的移动
            case directionEnum.top:
                y -=2;
                break;
            case directionEnum.bottom:
                y +=2;
                break;
            case directionEnum.left:
                x -=2;
                break;
            case directionEnum.right:  
                x +=2;
                break;
        }
        //碰撞检测
        const touchModel = utils.isModelTouch(x,y,2,2,[...wall.models,...steel.models,...boss.models])
        if(utils.isCanvasTouch(x,y,2,2)){
            this.destory();
        }else if(touchModel){
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
        this.canvas.ctx.drawImage(this.image(),this.x, this.y,2,2,);
    }
   
}