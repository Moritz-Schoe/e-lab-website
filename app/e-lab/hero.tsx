"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full opacity-15 blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        <div className="max-w-6xl mx-auto text-center space-y-8 p-8">

          {/* Sphere and Title */}
          <div className="flex flex-col items-center space-y-6">
            {/* <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-1 shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                  <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-24 h-24 object-contain"
                  >
                    <source src="/assets/e-lab/sphere-e-lab.mp4" />
                  </video>
                </div>
              </div>
              {/* Pulsing ring
              <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-30"></div>
            </div> */}

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                AI E-Lab
              </h1>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-xl text-gray-300">by</span>
                <Image
                  src="/assets/logo_new_white_standard.png"
                  alt="TUM.ai Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Build the next generation of <span className="text-purple-400 font-semibold">AI startups</span> in 12 weeks
            </p>
            <p className="text-lg text-gray-400">
              Equity-free • Munich-based • Founder-focused
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="https://forms.tum-ai.com/ai-e-lab-3.0-application"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/25 transition-all duration-300 group-hover:shadow-purple-500/40 group-hover:scale-105"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative flex items-center space-x-2">
                <span>AI E-Lab 4.0 - Apply Now</span>
                <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Sponsor section */}
          <div className="pt-8 border-t border-gray-700/50">
            <p className="text-sm text-gray-400 mb-6">Sponsored by</p>
            <div className="flex items-center justify-center space-x-8 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/e-lab/partners/uvc_w.svg"
                  alt="UVC Partners"
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/e-lab/partners/cherry_w.png"
                  alt="UVC Partners"
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/e-lab/partners/hv_w.png"
                  alt="UVC Partners"
                  width={80}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
          title="Scroll down"
        >

          <FontAwesomeIcon
            icon={faChevronDown}
            className="animate-bounce text-lg group-hover:text-purple-400 transition-colors"
          />
        </button>
      </div>
    </section>
  );
};
