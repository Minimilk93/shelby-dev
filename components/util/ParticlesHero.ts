import {gsap} from 'gsap';
import { Triangle, ITriangle } from './Triangle';

export class ParticlesHero {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: any;
  triangles: Array<ITriangle>;
  largeHeader: HTMLElement;
  animateHeader: boolean = true
  window: Window
  colors = [
    '213,107,54',
    '26,54,133',
    '230,231,94',
    '25,148,190',
    '230,230,234',
  ];

  constructor(window: Window, canvasRef: any, headerRef: HTMLElement) {
    this.window = window
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas = canvasRef;
    this.ctx = this.canvas.getContext('2d');
    this.triangles = []
    this.largeHeader = headerRef;
  }

  init() {
    this.initHeader();
    this.addListeners();
    this.animate();
  }

  initHeader(): void {
    this.largeHeader.style.height = this.height + 'px';

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    for (var x = 0; x < 480; x++) {
      this.addTriangle(x * 20);
    }
  }

  addTriangle(delay: number): void {
    setTimeout(() => {
      const t = new Triangle(this.width, this.height, this.colors, this.ctx);
      this.triangles.push(t);
      this.tweenTriangle(t);
    }, delay);
  }

  tweenTriangle(tri: ITriangle): void {
    const t = Math.random() * (2 * Math.PI);
    let x = (200 + Math.random() * 100) * Math.cos(t) + this.width * 0.5;
    let y = (200 + Math.random() * 100) * Math.sin(t) + this.height * 0.5 - 20;
    const time = 4 + 3 * Math.random();

    tri.init();

    tri.pos &&
      gsap.to(tri.pos, {
        duration: time,
        x: x,
        y: y,
        onComplete: () => {
          this.tweenTriangle(tri);
        },
      })
  }

  addListeners() {
    window.addEventListener('scroll', this.scrollCheck.bind(this));
    window.addEventListener('resize', this.resize.bind(this));
  }

  scrollCheck() {
    if (document.body.scrollTop > this.height) {
      this.animateHeader = false
    } else {
      this.animateHeader = true;
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.largeHeader.style.height = this.height + 'px';
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.triangles = []
    this.initHeader();
  }

  animate() {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (var i in this.triangles) {
        this.triangles[i].draw();
      }
    }
    requestAnimationFrame(this.animate.bind(this));
  }
}