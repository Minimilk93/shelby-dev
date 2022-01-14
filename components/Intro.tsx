import React from 'react';

const Intro = () => {
  return (
    <section className="container mx-auto mb-6">
      <div className="w-1/2 mx-auto px-3 my-16">
        <p className="text-lg mb-6">
          I&lsquo;m currently working as a{' '}
          <span className="text-sorange">
            software engineer at Sky Betting &amp; Gaming
          </span>
          . My passions lie in creating accessible experiences, writing clean
          code and learning new technologies which I can utilise to provide
          better systems.
        </p>
        <p className="mb-6">
          My interest in coding started when I was around 13 years old
          attempting to make a row of Pikachu in hula skirts dance on a web
          banner. Who would have thought that would ignite a hunger to learn
          more!{' '}
        </p>
        <p className="mb-6">
          I have been fortunate enough to experience different enviroments, from
          small remote businesses to large multinational corporations with
          millions of end users.
        </p>
        <p className="mb-6">
          In my spare time, you will usually find me playing video games,
          reading, lifting in the gym or walking the dog.
        </p>
        <p>
          Sometimes, I tweet stuff on{' '}
          <a href="https://twitter.com/cocoboot_" className="text-sorange">
            Twitter
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Intro;
