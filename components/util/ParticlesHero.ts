import { gsap, Power1, Linear } from 'gsap';
import { Triangle, ITriangle } from './Triangle';

export class ParticlesHero {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  ctx: any;
  triangles: Array<ITriangle>;
  largeHeader: HTMLElement;
  animateHeader: boolean = true;
  window: Window;
  colors = [
    '213,107,54',
    '26,54,133',
    '230,231,94',
    '25,148,190',
    '230,230,234',
  ];

  constructor(window: Window, canvasRef: any, headerRef: HTMLElement) {
    this.window = window;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas = canvasRef;
    this.ctx = this.canvas.getContext('2d');
    this.largeHeader = headerRef;
    this.triangles = [];
  }

  init() {
    this.triangles = [];

    this.initHeader();
    this.addListeners();
    this.animate();
  }

  initHeader(): void {
    this.largeHeader.style.height = `${this.height}px`;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    for (let x = 0; x < 300; x++) {
      this.addTriangle(x * 20);
    }
  }

  addTriangle(delay: number): void {
    setTimeout(() => {
      const t = new Triangle(this.width, this.height, this.colors, this.ctx);
      this.triangles.push(t);

      t.init();

      this.tweenTriangle(t);
    }, delay);
  }

  range(map, prop) {
    var min = map[prop + 'Min'],
      max = map[prop + 'Max'];
    return min + (max - min) * Math.random();
  }

  tweenTriangle(tri: ITriangle): void {
    const t = Math.random() * (2 * Math.PI);
    let x = (200 + Math.random() * 100) * Math.cos(t) + this.width * 0.5;
    let y = (200 + Math.random() * 100) * Math.sin(t) + this.height * 0.5 - 20;
    const time = 2 + 3 * Math.random();
    const start = {
      yMin: this.canvas.height + 50,
      yMax: this.window.innerHeight + 50,
      xMin: 1000,
      xMax: 2000,
      scaleMin: 0.1,
      scaleMax: 0.25,
      opacityMin: 0.2,
      opacityMax: 0.4,
    };
    let mid = {
      yMin: this.canvas.height * 0.3,
      yMax: this.window.innerHeight * 0.5,
      xMin: 75,
      xMax: 400,
      scaleMin: 0.2,
      scaleMax: 3,
      opacityMin: 0.4,
      opacityMax: 1,
    };
    let end = {
      yMin: -180,
      yMax: -180,
      xMin: 1000,
      xMax: 1500,
      scaleMin: 0.1,
      scaleMax: 1,
      opacityMin: 0.2,
      opacityMax: 0.7,
    };
    let wholeDuration = (10 / 6) * (0.7 + Math.random() * 0.4);
    let delay = wholeDuration * Math.random();
    let partialDuration = (wholeDuration + 1) * (0.3 + Math.random() * 0.4);

    //set the starting values
    gsap.set(tri.pos, {
      y: this.range(start, 'y'),
      x: this.range(start, 'x'),
      scale: this.range(start, 'scale'),
      opacity: this.range(start, 'opacity'),
      visibility: 'hidden',
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
    });

    //the y tween should be continuous and smooth the whole duration
    gsap.to(tri.pos, wholeDuration, {
      delay: delay,
      y: this.range(end, 'y'),
      ease: Power1.easeOut,
    });

    //now tween the x independently so that it looks more randomized (rather than linking it with scale/opacity changes too)
    gsap.to(tri.pos, partialDuration, {
      delay: delay,
      x: this.range(mid, 'x'),
      ease: Power1.easeOut,
    });
    gsap.to(tri.pos, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      x: this.range(end, 'x'),
      ease: Power1.easeIn,
    });

    //now create some random scale and opacity changes
    partialDuration = wholeDuration * (0.5 + Math.random() * 0.3);
    gsap.to(tri.pos, partialDuration, {
      delay: delay,
      scale: this.range(mid, 'scale'),
      autoAlpha: this.range(mid, 'opacity'),
      ease: Linear.easeNone,
    });
    gsap.to(tri.pos, wholeDuration - partialDuration, {
      delay: partialDuration + delay,
      scale: this.range(end, 'scale'),
      autoAlpha: this.range(end, 'opacity'),
      ease: Linear.easeNone,
      onComplete: this.addTriangle,
      onCompleteParams: [tri.pos],
    });
  }

  addListeners() {
    window.addEventListener('scroll', this.scrollCheck.bind(this));
    window.addEventListener('resize', () => this.resize());
  }

  scrollCheck() {
    if (document.body.scrollTop > this.height) {
      this.animateHeader = false;
    } else {
      this.animateHeader = true;
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.largeHeader.style.height = `${this.height}px`;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.triangles.length = 0;

    this.initHeader();
  }

  animate() {
    if (this.animateHeader) {
      this.ctx.clearRect(0, 0, this.width, this.height);
      for (let i in this.triangles) {
        this.triangles[i].draw();
      }
    }
    requestAnimationFrame(this.animate.bind(this));
  }
}
