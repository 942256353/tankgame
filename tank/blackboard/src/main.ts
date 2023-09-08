import './style.css'

class Blackboard {

  constructor(
    public el = document.querySelector<HTMLCanvasElement>('#canvas')!,
    private app = el.getContext('2d')!,
    public height: number = el.height,
    public width: number = el.width,
    private btns:HTMLDivElement = document.createElement('div'),
    private bgColor:string = '#95a5a6',
    private lineColor:string = '#fff',
    ) {
    this.initCanvas()
    this.bindEvent()
    this.draw()
  }
  private bindEvent() {
    const callback = this.drawLine.bind(this)
    this.el.addEventListener('mousedown', () => {
      this.app.beginPath()
      this.app.strokeStyle = this.lineColor
      this.el.addEventListener('mousemove', callback)
    })
    document.addEventListener('mouseup', () => {
      this.el.removeEventListener('mousemove', callback)
    })
  }
  //画线
  private drawLine(event: MouseEvent) {
    // 鼠标移动时，画线
    this.app.lineTo(event.offsetX, event.offsetY)
    this.app.stroke()
  }
  //初始化画布
  private initCanvas() {
    this.app.fillStyle = this.bgColor
    this.app.fillRect(0, 0, this.width, this.height)
    this.btns.classList.add('btns')
    // this.btns.style.cssText = `margin-top:10px`
    this.el.insertAdjacentElement('afterend',this.btns)
  }
  //清除画布
  public clear() {
    const el = document.createElement('button')
    el.innerText = '清屏'
    this.btns.insertAdjacentElement('afterbegin',el)
    el.addEventListener('click', () => {
      this.app.fillStyle = this.bgColor
      this.app.fillRect(0, 0, this.width, this.height)
    })
    return this
  }
  //设置画布颜色
  public setBgColor(color:string) {
    this.bgColor = color
    this.app.fillStyle = color
    this.app.fillRect(0, 0, this.width, this.height)
  }
  //设置线条颜色
  public setLineColor() {
    const colors = ['#1abc9c','#e67e22','#c0392b','#16a085']
    const container = document.createElement('div')
    container.classList.add('color-container')
    colors.forEach(item => {
      const el = document.createElement('button')
      el.style.cssText = `width:50px;height:50px;background:${item}`
      el.addEventListener('click', () => {
        this.lineColor = item
      })
      container.insertAdjacentElement('afterbegin',el)
    })
    this.btns.insertAdjacentElement('beforeend',container)
  }
  // //设置线条粗细
  // public setLineWidth(width:number) {
  //   this.lineWidth = width
  //   this.app.lineWidth = width
  // }
  // //设置线条样式
  // public setLineStyle(style:string) {
  //   this.lineStyle = style
  //   this.app.lineCap = style
  // }

  //橡皮擦
  public eraser() {
    const el = document.createElement('button')
    el.innerText = '橡皮擦'
    this.btns.insertAdjacentElement('afterbegin',el)
    el.addEventListener('click', () => {
      this.lineColor = this.bgColor
      this.app.lineWidth = 10
    })
    return this
  }

  //写字
  public draw() {
    const el = document.createElement('button')
    el.innerText = '写字'
    this.btns.insertAdjacentElement('afterbegin',el)
    el.addEventListener('click', () => {
      this.lineColor = 'white'
      this.app.lineWidth = 1
    })
    return this
  }

  //截图
  public short(){
    const el = document.createElement('button')
    el.innerText = '截图'
    this.btns.insertAdjacentElement('afterbegin',el)
    const img = document.createElement('img')
    el.addEventListener('click', () => {
      img.src = this.el.toDataURL('image/jpeg')
      img.classList.add('img-short')
    })
    this.btns.insertAdjacentElement('afterend',img)
    return this
  }
}

const blackboard = new Blackboard()
blackboard.clear()
// blackboard.setBgColor('#95a5a6')
blackboard.setLineColor()
blackboard.eraser()
blackboard.short()