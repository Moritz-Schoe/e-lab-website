"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { archivoSemiExpandedBold } from "../../styles/fonts";

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

      {/* Main content - centered vertically */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-white">
        <div className="max-w-3xl mx-auto text-center p-4">
          <div className="space-y-3">
            {/* Logo and Title */}
            <div className="flex flex-col items-center space-y-2">
              <div className="flex justify-center">
                {/* <Image
                  src="/assets/e-lab/ai e-lab - glowing.png"
                  alt="AI E-Lab"
                  width={300}
                  height={100}
                  priority
                  className="w-auto h-8 md:h-10 lg:h-12 object-contain max-w-full"
                /> */}
                <h1 className={`relative inline-block text-7xl font-round mb-6 text-white text-center uppercase ${archivoSemiExpandedBold.className}`}>
                  AI E-Lab
                  <span className="relative">
                    <span
                      className="absolute -top-3 -right-6 text-base font-bold"
                      style={{
                        fontSize: '1.15rem',
                        lineHeight: 1,
                        letterSpacing: 0,
                        fontFamily: archivoSemiExpandedBold.style.fontFamily,
                      }}
                    >
                      4.0
                    </span>
                  </span>
                </h1>

              </div>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm md:text-base text-gray-300">by</span>
                <Image
                  src="/assets/logo_new_white_standard.png"
                  alt="TUM.ai Logo"
                  width={80}
                  height={25}
                  className="h-3 md:h-4 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button - positioned between content and sponsors */}
      <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 z-15">
        <a
          href="https://forms.tum-ai.com/ai-e-lab-3.0-application"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 ease-out"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30 transition-all duration-300 group-hover:shadow-purple-500/50 group-hover:scale-105"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <span className="relative flex items-center space-x-2">
            <span>AI E-Lab 4.0 - Apply Now</span>
            <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </a>
      </div>

      {/* Sponsor section - moved to bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-15 w-full max-w-5xl px-8">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">Sponsored by</p>
          <div className="flex items-center justify-center space-x-6 opacity-80">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/20 transition-all duration-300">
              <Image
                src="/assets/e-lab/partners/uvc_w.svg"
                alt="Partner"
                width={70}
                height={35}
                className="h-6 w-auto object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/20 transition-all duration-300">
              <Image
                src="/assets/e-lab/partners/lovable_w.png"
                alt="Partner"
                width={70}
                height={35}
                className="h-6 w-auto object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:bg-white/20 transition-all duration-300">
              <Image
                src="/assets/e-lab/partners/cherry_w.png"
                alt="Cherry Ventures"
                width={70}
                height={35}
                className="h-6 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
          title="Scroll down"
        >
          <span className="text-xs">Scroll to explore</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="animate-bounce text-lg group-hover:text-purple-400 transition-colors"
          />
        </button>
      </div>
    </section>
  );
};
