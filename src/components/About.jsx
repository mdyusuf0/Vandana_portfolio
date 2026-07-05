import React from 'react';
import stackImage from '../assets/vandana/about/card-image.png';
import { aboutContent } from '../data/portfolioData';

// Custom high-quality inline SVG icons for crisp loading
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">React</span>
  </div>
);

const NodeIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#1E293B" />
      <path d="M64 25L94.5 42V77L64 94L33.5 77V42L64 25Z" fill="#339933" />
      <path d="M64 94L94.5 77V42L64 25" fill="#287828" />
      <path d="M64 25V94" fill="#1A4D1A" fillOpacity="0.5" />
      <text x="64" y="68" fill="#FFFFFF" fontSize="13" fontFamily="sans-serif" fontWeight="900" textAnchor="middle">Node</text>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Node.js</span>
  </div>
);

const TypeScriptIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128" fill="none">
      <rect width="128" height="128" rx="24" fill="#1E293B" />
      <rect x="34" y="34" width="60" height="60" fill="#3178C6" />
      <path d="M52 64H44V56H68V64H60V82H52V64ZM72 82V76C75 78.5 78 80 82 80C85 80 86.5 79 86.5 77C86.5 75 84 74 80 73C74 71 70 68 70 63C70 58 74 54 81 54C86 54 90 56.5 92 59L88 64C85 62 82 60 80 60C78 60 76.5 61 76.5 63C76.5 65 79 66 83 67C89 69 93 72 93 77C93 83 88 88 81 88C76 88 72.5 86.5 72 82Z" fill="#FFFFFF"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">TypeScript</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#FF8EAF] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-[#0A0306] transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-[#14080D] w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-[#14080D] rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-[#FFC4D4]/30">
                <img 
                  src={stackImage} 
                  alt="Vandana Tripathi" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A0306] mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-pink-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <NodeIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TypeScriptIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0A0306]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-[#0A0306] opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-[#0A0306] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
