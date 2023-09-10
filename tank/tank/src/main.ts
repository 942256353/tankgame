import './style.scss'
import straw from './canvas/straw';
import './service/image'
import config from './config'
import { promises } from './service/image';
import wall from './canvas/wall';
import water from './canvas/water';
import steel from './canvas/steel';
import tank from './canvas/tank';
import bullet from './canvas/bullet';
import boss from './canvas/boss';
import play from './canvas/play';
const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

async function bootstrap(){
  await  Promise.all(promises)
  straw.render()
  wall.render()
  water.render()
  steel.render()
  tank.render()
  bullet.render()
  boss.render()
  play.render()
}
void bootstrap();