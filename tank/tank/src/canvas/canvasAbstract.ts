import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract {
    public models: IModel[] = [];
    abstract num(): number;
    abstract model(): ModelContructor|BulletModelContructor;
    abstract render(): void;
    constructor(
        protected name:string,
        protected app = document.querySelector('#app') as HTMLDivElement,
        protected el = document.createElement('canvas'),
        public ctx = el.getContext('2d')!) {
        this.createCanvas();
    }
    //创建画布
    protected createCanvas() {
        this.el.width = config.canvas.width;
        this.el.height = config.canvas.height;
        this.el.setAttribute('name',this.name)
        // //定义填充颜色
        // this.canvas.fillStyle = '#16a085'
        // //绘制矩形
        // this.canvas.fillRect(0, 0, this.el.width, this.el.height)
        this.app.appendChild(this.el)
        // this.app.insertAdjacentElement('afterbegin', this.el)
    }
    //生成模型实例
    protected createModels() {
        position.getCollection(this.num()).forEach(({ x, y }) => {
            const model = this.model();
            const instance = new model(x, y)
            this.models.push(instance)
        })
    }

    //渲染模型
    protected renderModels() {
        this.models.forEach((model) => model.render())
    }

}