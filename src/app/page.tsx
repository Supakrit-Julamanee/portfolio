'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypeAnimetion from './components/TypeAnimetion';
import NextJsIcon from './components/icons/NextJsIcon';
import TailwindCssIcon from './components/icons/TailwindCssIcon';
import TypeScriptIcon from './components/icons/TypeScript';
import GithubIcon from './components/icons/GithubIcon';
import GmailIcon from './components/icons/GmailIcon';

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center flex flex-col items-center md:items-end justify-center p-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <div data-aos="fade-up">
          <TypeAnimetion />
        </div>

        <div className="max-w-2xl mt-4 w-full" data-aos="fade-left">
          <p className="text-lg font-semibold text-white mb-2">Hello and welcome!</p>
          <p className="text-md font-semibold text-white mb-2">
            Hi, I am Bike, a highly motivated Computer Science student at KMUTNB. My portfolio showcases my full-stack web development skills using React.js, Node.js, and C#/.NET. I am passionate about building innovative projects and dedicated to continuous learning. Thanks for visiting!
          </p>
        </div>

        {/* Technology Stack */}
        <div
          className="mt-6 flex items-center gap-4 text-white text-sm font-semibold"
          data-aos="zoom-in"
        >
          <span>Developed by:</span>
          <NextJsIcon />
          <TypeScriptIcon />
          <TailwindCssIcon />
        </div>

        {/* GitHub and Gmail Link */}
        <div
          className="mt-6 flex flex-col md:flex-row items-center gap-4 text-white text-sm font-semibold"
          data-aos="zoom-in"
        >
          <span>Contacts:</span>

          {/* GitHub Icon and Link */}
          <a
            href="https://github.com/Supakrit-Julamanee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline border-2 px-2 py-1 border-white rounded-lg"
          >
            <GithubIcon />
            GitHub
          </a>

          {/* Gmail Icon and Email */}
          <a
            href="mailto:supakritjulamanee@gmail.com"
            className="flex items-center gap-2 hover:underline border-2 px-2 py-1 border-white rounded-lg"
          >
            <GmailIcon />
            supakritjulamanee@gmail.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default Page;
