import bullet from "../canvas/bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import { image } from "../service/image";
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
        super.draw()
    }
   
   
}