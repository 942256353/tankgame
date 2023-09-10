/// <reference types="vite/client" />
interface ModelContructor{
    new (x:number,y:number):IModel
}

interface BulletModelContructor{
    new (tank:IModel):IModel
}

interface IModel{
    name:string,
    render():void,
    tank?:IModel,
    x:number,
    y:number,
    image():HTMLImageElement,
    height:number,
    width:number,
    direction:string,
    destory():void,
}

interface ICanvas{
    model():ModelContructor|BulletModelContructor,
    num():number,
    ctx:CanvasRenderingContext2D,
    removeModel(model:IModel):void,
    renderModels():void,
}