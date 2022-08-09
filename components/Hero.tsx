import React from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie-player';
import lottieData from '../data/lottie-data.json';

export const Hero = () => {
  return (
    <section className="bg-primary relative mb-6 min-h-screen overflow-hidden">
      <div className="absolute left-3 top-3">
        <Image src="/logo.svg" alt="me" width="50" height="50" />
      </div>
      <div className="absolute inset-0">
        <Lottie
          loop
          animationData={lottieData}
          play
          style={{ width: '200%', height: '200%', marginLeft: '-50%' }}
        />
      </div>
      <div className="absolute inset-0 m-auto flex items-center justify-center flex-wrap z-10">
        <div className="container px-3">
          <h1 className="text-center text-7xl text-white font-bold block w-full mb-6 drop-shadow-sm">
            Hey! I&lsquo;m Shelby.
          </h1>
          <p className="text-center font-semibold text-large drop-shadow-sm text-white">
            I&lsquo;m a{' '}
            <span className="text-sorange">full stack software engineer</span>{' '}
            (with a soft spot for front end technologies)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
