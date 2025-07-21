"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* <video muted autoPlay loop playsInline className="h-full w-full">
        <source src="/assets/e-lab/spheretumai.mp4" />
      </video> */}

      <div className="absolute top-0 flex h-full w-full items-center text-white z-10">
        <div className="max-w-8xl mx-auto space-y-6 p-8 md:p-16">
          <h1 className="flex items-center justify-center font-bold lg:justify-start">
            <span className="inline-block h-[10rem] w-[10rem] mr-6 align-middle">
              <video
                muted
                autoPlay
                loop
                playsInline
                className="h-full w-full object-contain"
                style={{ display: "block" }}
              >
                <source src="/assets/e-lab/sphere-e-lab.mp4" />
              </video>
            </span>
            <span className="text-8xl align-middle">AI E-Lab</span>
          </h1>
          <div className="flex flex-col items-center">
            <div className="mb-4 flex items-center justify-center">
              <p className="max-w-2xl text-center text-2xl font-bold mb-0">
                by
              </p>
              <img
                src="/assets/logo_new_white_standard.png"
                alt="Tum.ai Logo"
                className="ml-4 h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mountains cutout image at the bottom */}
      <div className="absolute -bottom-[12%] left-0 right-0 z-5">
        <Image
          src="/assets/e-lab/mountains-cutout.png"
          alt="Mountains"
          width={1920}
          height={400}
          className="w-full h-auto object-cover object-bottom"
          style={{
            filter: 'brightness(0.8) contrast(1.1)',
            mixBlendMode: 'multiply'
          }}
          priority
        />
      </div>

      {/* Partner logos overlay on mountains */}
      <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 z-15">
        <div className="flex items-center justify-center gap-8">
          {/* Left logo placeholder */}
          <div className="w-24 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30">
            <span className="text-white text-xs opacity-60">Logo</span>
          </div>

          {/* Middle logo - main partner */}
          <div className="w-32 h-20 bg-opacity-90 rounded-lg flex items-center justify-center p-3">
            <Image
              src="/assets/e-lab/partners/uvc_w.svg"
              alt="Partner Logo"
              width={120}
              height={80}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right logo placeholder */}
          <div className="w-24 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white border-opacity-30">
            <span className="text-white text-xs opacity-60">Logo</span>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%] z-20"
        onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
        title="Scroll down"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2xl"
          className="animate-bounce text-white drop-shadow-lg"
        />
      </button>
    </section>
  );
};
