import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/steel";

export default new class steel extends canvasAbstract implements ICanvas{
    num(): number {
        return config.steel.num;
    }
    model(): ModelContructor {
       return model;
    }
    render(): void {
        super.createModels();
        super.renderModels();
    }
   
}('steel')

 