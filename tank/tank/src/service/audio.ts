export default{
    getEl(id:string){
        return document.querySelector<HTMLAudioElement>(id)!
    },
    start(){
       this.getEl("#aStart").play()
    },
    fire(){
        this.getEl("#aFire").play()
    },
    blast(){
        this.getEl("#aBlast").play()
    }
}