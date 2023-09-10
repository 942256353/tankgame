import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/straw";

export default new class straw extends canvasAbstract implements ICanvas{
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
   
}('sraw')

