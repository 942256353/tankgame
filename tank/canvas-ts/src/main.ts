const el = document.querySelector<HTMLCanvasElement>('#canvas')!
const app = el.getContext('2d')!
//填充
// app.fillStyle = '#000'
// app.fillRect(0, 0, 300, 300)

// app.fillStyle = 'green'
// app.fillRect(el.width/2-50, el.height/2-50, 100, 100)

//线条 画矩形
// app.strokeStyle='#1abc9c'
// app.lineWidth=10
// app.lineJoin="round"
// app.strokeRect(el.width/2-50, el.height/2-50, 100, 100)

//画圆
// app.fillStyle = '#1abc9c'
// app.strokeStyle = '#1abc9c'
// app.lineWidth = 10
// app.arc(100,100,50,0,Math.PI*2);
// app.stroke();

//三角形
// app.beginPath()
// app.strokeStyle = '#1abc9c'
// app.fillStyle = 'red'
// app.lineWidth = 10
// app.moveTo(el.width/2,10)
// app.lineTo(el.width-10,150)
// app.lineTo(10,150)
// app.closePath()
// app.stroke()
// app.fill()

//渐变色
// const gradient = app.createLinearGradient(0, 0, 300, 300)
// gradient.addColorStop(0, '#2ecc71')
// gradient.addColorStop(0.5, '#3498db')
// gradient.addColorStop(1, '#e67e22')  
// app.strokeStyle = gradient
// app.lineWidth = 30
// app.lineJoin = 'round'
// app.strokeRect(50, 50, 200, 200)
// app.fillRect(0, 0, 300, 300)

//文字
// app.fillStyle='#34495e'
// el.width = 1000
// app.fillRect(0, 0, el.width, el.height)

// app.font = '60px Arial'
// app.fillStyle = gradient
// app.strokeStyle = gradient
// app.lineWidth = 2
// app.textBaseline = "top"
// app.fillText('小谢',50,50)
// app.strokeText('小谢',50,50)

// const img = document.createElement('img')
// img.src = './images/ha.png'
// img.onload = () => {
//   //创建贴图
//    const pattern =  app.createPattern(img, 'repeat')!
//    //填充
//    app.fillStyle = pattern
//    app.fillRect(0, 0, el.width, el.height)
// }

//创建图片
// app.fillStyle = '#34495e'
// app.fillRect(0, 0, el.width, el.height)
// const img = document.createElement('img')
// img.src = './images/ha.png'
// img.onload = () => {
//   el.width = img.naturalWidth*scale(img,el)
//   el.height = img.naturalHeight*scale(img,el)
//   app.drawImage(img,0,0,el.width,el.height)
// }

// //实现缩略图效果
// function scale(img:HTMLImageElement,el:HTMLCanvasElement){
//   return Math.min(el.width/img.naturalWidth,el.height/img.naturalHeight)
// }

//小点
// app.fillStyle = '#34495e'
// app.fillRect(0, 0, 300, 300)
// for(let i=0;i<2000;i++){
//   app.fillStyle = '#fff'
//   app.fillRect(Math.random()*el.width, Math.random()*el.height, 2, 2)
// }

// for(let i=0;i<20;i++){
//   app.beginPath()
//   app.fillStyle = ['#1abc9c','#9b59b6','#e67e22','#bdc3c7','#f39c12','#8e44ad'].sort(()=>Math.floor(Math.random()*3)?1:-1)[0]
//   app.arc(Math.random()*(el.width/2), Math.random()*(el.height/2),1+Math.random()*50, 0, 2*Math.PI)
//   app.fill()
// }