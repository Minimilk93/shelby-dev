export interface ITriangle{
  coords: Array<any>
  pos: any
  init(): void
  draw(): void
}

export class Triangle implements ITriangle {
  coords: any[]
  pos: any
  canvasWidth: number
  canvasHeight: number
  colorsArray: Array<string>
  scale: number
  color: string
  alpha: number
  ctx: any

  constructor(canvasWidth: number, canvasHeight: number, colorsArray: Array<string>, ctx: any) {
    this.coords = [{}, {}, {}]
    this.pos = {}
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.colorsArray = colorsArray
    this.ctx = ctx
    this.scale = 0.1 + Math.random() * 0.3
    this.alpha = 0
    this.color = this.colorsArray[Math.floor(Math.random() * this.colorsArray.length)];
  }

  init(): void {
    this.pos.x = this.canvasWidth * 0.5;
    this.pos.y = this.canvasHeight * 0.5;
    this.coords[0].x = -10 + Math.random() * 30;
    this.coords[0].y = -10 + Math.random() * 30;
    this.coords[1].x = -10 + Math.random() * 30;
    this.coords[1].y = -10 + Math.random() * 30;
    this.coords[2].x = -10 + Math.random() * 30;
    this.coords[2].y = -10 + Math.random() * 30;

    setTimeout(() => {
      this.alpha = 0.8;
    }, 10);
  }

  draw(): void {
    if (this.alpha >= 0.005) this.alpha -= 0.005;
    else this.alpha = 0;
    this.ctx.beginPath();
    this.ctx.moveTo(
      this.coords[0].x + this.pos.x,
      this.coords[0].y + this.pos.y
    );
    this.ctx.lineTo(
      this.coords[1].x + this.pos.x,
      this.coords[1].y + this.pos.y
    );
    this.ctx.lineTo(
      this.coords[2].x + this.pos.x,
      this.coords[2].y + this.pos.y
    );
    this.ctx.closePath();
    this.ctx.fillStyle = 'rgba(' + this.color + ',' + this.alpha + ')';
    this.ctx.fill();
  }
}