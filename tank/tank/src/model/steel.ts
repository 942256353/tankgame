
import { image } from "../service/image";
import modelAbstract from "./modelAbstract";
import steel from "../canvas/steel";

export default class extends modelAbstract implements IModel{
    public canvas: ICanvas = steel;
    // public canvas: ICanvas = steel;
    name: string = 'steel';
    image(): HTMLImageElement {
        return image.get('steel')!
    }
    render(): void {
        super.draw()
    }
   
   
}