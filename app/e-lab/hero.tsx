"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-black">
      {/* <video muted autoPlay loop playsInline className="h-full w-full">
        <source src="/assets/e-lab/spheretumai.mp4" />
      </video> */}

      <div className="absolute top-0 flex h-full w-full items-center text-white">
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

      <button
        className="absolute bottom-16 left-[50%] -translate-x-[50%]"
        onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
        title="Scroll down"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="2xl"
          className="animate-bounce text-white"
        />
      </button>
    </section>
  );
};
