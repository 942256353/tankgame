/// <reference types="vite/client" />
interface ModelContructor{
    new (x:number,y:number):IModel
}

interface BulletModelContructor{
    new (tank:IModel):IModel
}

interface IModel{
    render():void,
    tank?:IModel,
    x:number,
    y:number,
    image():HTMLImageElement,
    height:number,
    width:number,
    direction:string
}

interface ICanvas{
    model():ModelContructor|BulletModelContructor,
    num():number,
    ctx:CanvasRenderingContext2D,
}