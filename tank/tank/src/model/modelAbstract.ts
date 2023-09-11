import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import audio from "../service/audio";
export default abstract class modelAbstract {
    abstract name: string
    abstract render(): void
    abstract image(): HTMLImageElement
    public abstract canvas: ICanvas
    public direction: directionEnum = directionEnum.top
    public width = config.model.width
    public height = config.model.height
    constructor(public x: number, public y: number) {
        this.randomDirection()
    }

    //随机产生方向
    protected randomDirection() {
        this.direction = Object.keys(directionEnum)[Math.floor(Math.random() * 4)] as directionEnum
    }
    protected draw() {
        this.canvas.ctx.drawImage(this.image(), this.x, this.y, config.model.width, config.model.height);
    }
    public destory() {
        this.canvas.removeModel(this)
        this.canvas.renderModels()
    }
    //爆炸效果
    protected blast(model: IModel) {
        audio.blast()
        Array(...Array(8).keys()).reduce((promise, index) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const img = new Image()
                    img.src = `/src/static/images/blasts/blast${index}.gif`;
                    img.onload = () => {
                        this.canvas.ctx.drawImage(img, model.x, model.y, config.model.width, config.model.height);
                        resolve(promise)
                    }
                }, 100)
            })
        }, Promise.resolve())
    }
}