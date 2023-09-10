import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/wall";

export default new class wall extends canvasAbstract implements ICanvas{
    num(): number {
        return config.straw.num;
    }
    model(): ModelContructor {
        return model;
    }
    render(): void {
        super.createModels();
        super.renderModels();
    }
   
}('wall')

