import config from "../config";
type positionType = {x:number,y:number}
class positon{
    collection:positionType[] = []
    //批量获取唯一坐标
    public getCollection(num:number){
        const collection = [] as {x:number,y:number}[]
        for (let index = 0; index < num; index++) {
          while(true){
            const position = this.randomPosition()
            const exists =  this.collection.some(c=>c.x===position.x&&c.y===position.y)
            if(!exists){
                collection.push(position)
                this.collection.push(position)
                break
            }
            
          }
        }
        return collection
    }
    //随机位置
    public randomPosition(){
        return {
            x: Math.floor(Math.random()*(config.canvas.width/config.model.width))*config.model.width,
            y: Math.floor(Math.random()*((config.canvas.height/config.model.height-5)))*config.model.height+config.model.height*2
        }
    }
}

export default new positon();