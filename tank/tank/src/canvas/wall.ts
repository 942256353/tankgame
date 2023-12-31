import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/wall";

export default new class extends canvasAbstract implements ICanvas {
    num(): number {
        return config.straw.num;
    }
    model(): ModelContructor {
        return model;
    }
    render(): void {
        super.createModels();
        this.createBossWall();
        super.renderModels();
    }
    createBossWall() {
        const cw = config.canvas.width;
        const ch = config.canvas.height;
        const mw = config.model.width;
        const mh = config.model.height;
        const pos = [{
            x: cw / 2 - mw * 2,
            y: ch - mh
        },
        {
            x: cw / 2 - mw * 2,
            y: ch - mh*2
        },
        {
            x: cw / 2 - mw * 2,
            y: ch - mh*3
        },
        {
            x: cw / 2 - mw,
            y: ch - mh*3
        },
        {
            x: cw / 2,
            y: ch - mh*3
        },
        {
            x: cw / 2+mw,
            y: ch - mh*3
        },
        {
            x: cw / 2+mw*2,
            y: ch - mh*3
        },
        {
            x: cw / 2+mw*2,
            y: ch - mh*2
        },
        {
            x: cw / 2+mw*2,
            y: ch - mh
        }
    ]
        pos.forEach(({ x, y }) => {
            const model = this.model() as ModelContructor;
            const instance = new model(x, y)
            this.models.push(instance)
        })
    }
}('wall')

