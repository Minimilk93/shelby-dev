import React, { createRef, useEffect } from 'react';
import { ParticlesHero } from './util/ParticlesHero';
import Image from 'next/image';

export const Hero = () => {
  useEffect(() => {
    const canvas = document.getElementById('demo-canvas');
    const header = document.getElementById('large-header');
    if (canvas && header) {
      const Hero = new ParticlesHero(window, canvas, header);
      Hero.init();
    }
  }, []);

  return (
    <section className="bg-primary relative mb-6">
      <div className="absolute left-3 top-3">
        <Image src="/logo.svg" alt="me" width="50" height="50" />
      </div>
      <div id="large-header" className="mx-auto relative">
        <canvas id="demo-canvas"></canvas>
        <div className=" absolute inset-0 m-auto flex items-center justify-center flex-wrap">
          <div>
            <h1 className="text-center text-7xl text-white font-bold block w-full mb-6 drop-shadow-sm">
              Hey! I&lsquo;m Shelby.
            </h1>
            <p className="text-center font-semibold text-large drop-shadow-sm text-white">
              I&lsquo;m a{' '}
              <span className="text-sorange">full stack software engineer</span>{' '}
              (with a soft spot for front end technologies).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
