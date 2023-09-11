import canvasAbstract from "./canvasAbstract";
import model from "../model/bullet";
import tank from "./tank";
import bullet from "../model/bullet";
import play from "./play";
import audio from "../service/audio";

export default new (class extends canvasAbstract implements ICanvas {
    intervalId=0
    num(): number {
        return 0;
    }
    model(): BulletModelContructor {
        return model;
    }
    render(): void {
        // super.createModels();
        // super.renderModels();
        this.intervalId = setInterval(() => {
            this.createBullet();
            this.renderModels();
        }, 50)
    }
    stop(): void {
        clearInterval(this.intervalId)
    }
    createBullet() {
        tank.models.forEach(tank => {
            const isExists = this.models.some(m => m.tank == tank)
            if (!isExists) {
                this.models.push(new bullet(tank))
            }
        })
    }
    addPlayBullet(){
        this.models.push(new bullet(play.models[0]))
        audio.fire()
    }

})('bullet')
