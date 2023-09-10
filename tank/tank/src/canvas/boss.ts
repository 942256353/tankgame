import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/boss";

export default new (class  extends canvasAbstract implements ICanvas {
    num(): number {
        return 0;
    }
    model(): ModelContructor {
        return model;
    }
    render(): void {
        this.createModels();
        super.renderModels()
    }
    protected createModels() {
        const cw = config.canvas.width;
        const ch = config.canvas.height;
        const mh = config.model.height;
        [{x:cw/2,y:ch-mh}].forEach(({ x, y }) => {
            const model = this.model() as ModelContructor;
            const instance = new model(x, y)
            this.models.push(instance)
        })
    }
})('boss')

