interface Dimension {
  height: number,
  width: number
}

interface DrawStuff {
  ctx: CanvasRenderingContext2D,
  docX: number,
  docY: number,
  dim: Dimension,
  time: number,
}

export default function draw({ ctx, docX, docY, dim, time}: DrawStuff) {

  console.log(dim)

  // clearRect some space
  ctx.clearRect(0, 290, dim.width, 50);

  // green square
  ctx.beginPath()
  ctx.fillStyle = 'green'
  ctx.fillRect(10 + 0, 10 + 200, 150 + 0 , 200 + 100)

  // opacity square
  ctx.beginPath()
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
  ctx.fillRect(10 + 50, 10 + 250, 150 + 50, 200 + 150)

  // line in circle animation
  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = 'red'
  ctx.moveTo(150, 245);
  ctx.lineTo(
    Math.cos(Math.PI * 2 * time) * 50 + 150,
    Math.sin(Math.PI * 2 * time) * 50 + 245,
  );
  ctx.stroke()
  ctx.restore()

  // triangle animation
  ctx.beginPath()
  ctx.fillStyle = 'black'
  ctx.beginPath();
  ctx.moveTo(75 * time, 300 + 50);
  ctx.lineTo(100 * time, 300 + 75);
  ctx.lineTo(100 * time, 300 + 25);
  ctx.fill()


  // cursor
  ctx.arc(docX, docY, 10, 0, 2 * Math.PI)
  ctx.stroke()
}
