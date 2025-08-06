"use client";

import Benefits from "@components/Benefit";
import FAQ from "@components/FAQ";
import Logos from "@components/Logos";
import Stat from "@components/Stat";
import Testimonials from "@components/Testimonials";
import Timeline from "@components/Timeline";
import Section from "@components/ui/Section";
import { Network, Handshake, BookOpen, CircleDollarSign } from "lucide-react";
import { faq, testimonials } from "data/e-lab";
import Link from "next/link";
import { Hero } from "./hero";
import { Organization, WithContext } from "schema-dts";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { archivoSemiExpandedBold } from "../../styles/fonts";

export default function Page() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Venture Department",
    alternateName: [
      "AI Entrepreneurship Lab",
      "AI E-Lab",
      "AI E-Lab by TUM.ai",
      "AI Entrepreneurship Lab by TUM.ai",
    ],
    description:
      "The Venture Department is the entrepreneurial arm of TUM.ai and organizes the AI Entrepreneurship Lab, a 14-week equity-free AI startup incubator.",
    url: "https://www.tum-ai.com/e-lab",
    email: "venture@tum-ai.com",
    sameAs: [
      "https://www.startbase.de/organization/ai-e-lab/",
      "https://www.startup-insider.com/investor/ai-e-lab-by-tum-ai",
      "https://www.munich-startup.de/startups/tum-ai-entrepreneurship-lab/",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "TUM.ai",
      legalName: "TUM.ai e.V.",
      alternateName: "TUM.ai Student Initiative",
      url: "https://www.tum-ai.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/TUM.ai_Logo_Blue_%26_Violet.svg",
      email: "contact@tum-ai.com",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "venture@tum-ai.com",
      contactType: "Venture Department",
    },
    employee: {
      "@type": "EmployeeRole",
      roleName: "Head of Venture Department",
      employee: {
        "@type": "Person",
        name: "Laurenz Sommerlad",
        identifier: "laurenz-sommerlad",
        email: "laurenz.sommerlad@tum-ai.com",
        url: "https://www.tum-ai.com/e-lab/laurenz-sommerlad",
        sameAs: [
          "https://laurenzsommerlad.com",
          "https://www.linkedin.com/in/laurenzsommerlad/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "laurenz.sommerlad@tum-ai.com",
          contactType: "Head of Venture Department",
        },
      },
    },
  };

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "Can I apply as a solo founder?",
      answer: "Yes, you can absolutely apply as a solo founder! We welcome individual applicants who are passionate about building AI startups. During the program, you'll have opportunities to find co-founders through our team-building activities and networking events."
    },
    {
      question: "Do I need an idea to apply?",
      answer: "No, you don't need a fully formed idea to apply. The AI E-Lab is designed to help you develop and validate ideas during the program. We provide ideation workshops and guidance to help you discover the right opportunity to pursue."
    },
    {
      question: "Does the AI E Lab require me to work from Munich?",
      answer: "Yes, the AI E-Lab is an in-person program based in Munich. You'll be working from our headquarters at TUM.ai, collaborating with other founders and having access to our physical workspace, mentors, and the local startup ecosystem."
    },
    {
      question: "What is the time commitment for the program?",
      answer: "The AI E-Lab is a 12-week intensive program that requires significant time commitment. We expect participants to dedicate substantial time each week to building their startups, attending workshops, and participating in program activities."
    },
    {
      question: "Do you take equity in my startup?",
      answer: "No, the AI E-Lab is completely equity-free! We don't take any equity stake in your venture. Our mission is to make AI entrepreneurship accessible to everyone, which is why we provide all support and resources without any financial investment or equity requirements."
    }
  ];

  // Animated Statistics Component
  const AnimatedStatsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [venturesCount, setVenturesCount] = useState(0);
    const [fundingCount, setFundingCount] = useState(0);
    const [iterationsCount, setIterationsCount] = useState(0);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            // Animate ventures count (0 to 38)
            const venturesAnimation = setInterval(() => {
              setVenturesCount(prev => {
                if (prev >= 38) {
                  clearInterval(venturesAnimation);
                  return 38;
                }
                return prev + 1;
              });
            }, 50);

            // Animate funding count (0 to 5,000,000)
            const fundingAnimation = setInterval(() => {
              setFundingCount(prev => {
                if (prev >= 5000000) {
                  clearInterval(fundingAnimation);
                  return 5000000;
                }
                return prev + 125000; // Increments of 125k to reach 5M in ~40 steps
              });
            }, 50);

            // Animate iterations count (0 to 3)
            const iterationsAnimation = setInterval(() => {
              setIterationsCount(prev => {
                if (prev >= 3) {
                  clearInterval(iterationsAnimation);
                  return 3;
                }
                return prev + 1;
              });
            }, 200);
          }
        },
        { threshold: 0.5 }
      );

      if (statsRef.current) {
        observer.observe(statsRef.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    return (
      <Section className="flex flex-col items-center justify-center pt-0 pb-20 bg-white w-full">
        <div ref={statsRef} className="w-full max-w-5xl border-t border-gray-200 flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 mx-auto">
          <div className="flex-1 flex flex-col items-center py-8">
            <span className={`text-5xl font-bold text-purple-600 mb-2 transition-all duration-300 ${archivoSemiExpandedBold.className}`}>
              {Math.floor(venturesCount)}
            </span>
            <span className="text-center text-black text-lg">AI E-Lab Ventures<br/>since 2022</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-8">
            <span className={`text-5xl font-bold text-purple-600 mb-2 transition-all duration-300 ${archivoSemiExpandedBold.className}`}>
              €{(Math.floor(fundingCount) / 1000000).toFixed(1)}M+
            </span>
            <span className="text-center text-black text-lg">raised by AI E-Lab ventures</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-8">
            <span className={`text-5xl font-bold text-purple-600 mb-2 transition-all duration-300 ${archivoSemiExpandedBold.className}`}>
              {Math.floor(iterationsCount)}
            </span>
            <span className="text-center text-black text-lg">AI E-Lab<br/>Iterations</span>
          </div>
        </div>
      </Section>
    );
  };

  // Interactive Timeline Component
  const InteractiveTimeline = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        if (timelineRef.current) {
          const rect = timelineRef.current.getBoundingClientRect();
          const timelineTop = rect.top;
          const timelineHeight = rect.height;
          const windowHeight = window.innerHeight;

          // Calculate progress based on how much of the timeline is visible
          const visibleTop = Math.max(0, windowHeight - timelineTop);
          const visibleHeight = Math.min(visibleTop, timelineHeight);
          const progress = Math.min(1, Math.max(0, visibleHeight / timelineHeight));

          setScrollProgress(progress);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial calculation

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const timelineItems = [
      { title: "Start", description: "October", side: "right" },
      { title: "Onboarding Weekend", description: "3 days intensive", side: "left" },
      { title: "Education Sessions", description: "Weekly sessions", side: "right" },
      { title: "Build & Iterate I", description: "4 weeks", side: "left" },
      { title: "Litmus Test", description: "Pitch event", side: "right" },
      { title: "Build & Iterate II", description: "5 weeks", side: "left" },
      { title: "Pre-Demo Day Pitch", description: "Selection Day", side: "right" },
      { title: "Demo Day", description: "Final Presentation", side: "left" }
    ];

    return (
      <Section className="flex flex-col items-center justify-center py-32 bg-white w-full">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Program</h2>
        <div ref={timelineRef} className="relative max-w-4xl mx-auto w-full">
          {/* Vertical line with gradient animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-600 to-purple-400 rounded-full transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: scrollProgress > 0 ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none'
              }}
            />
          </div>

          {/* Timeline items */}
          <div className="relative space-y-20">
            {timelineItems.map((item, index) => {
              const itemProgress = Math.max(0, Math.min(1, (scrollProgress * timelineItems.length) - index));
              const isActive = itemProgress > 0;

              return (
                <div key={index} className="flex items-center relative">
                  {item.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <div className={`transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-60'}`}>
                          <h3 className={`font-semibold text-2xl mb-2 transition-colors duration-300 ${isActive ? 'text-purple-700' : 'text-gray-800'}`}>
                            {item.title}
                          </h3>
                          <p className={`text-base transition-colors duration-300 ${isActive ? 'text-purple-600' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div
                          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                            isActive
                              ? 'bg-purple-600 border-purple-300 shadow-lg shadow-purple-300/50 scale-110'
                              : 'bg-white border-gray-400 scale-100'
                          }`}
                        >
                          {isActive && (
                            <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-30" />
                          )}
                        </div>
                      </div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div
                          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${
                            isActive
                              ? 'bg-purple-600 border-purple-300 shadow-lg shadow-purple-300/50 scale-110'
                              : 'bg-white border-gray-400 scale-100'
                          }`}
                        >
                          {isActive && (
                            <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-30" />
                          )}
                        </div>
                      </div>
                      <div className="w-1/2 pl-12">
                        <div className={`transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-60'}`}>
                          <h3 className={`font-semibold text-2xl mb-2 transition-colors duration-300 ${isActive ? 'text-purple-700' : 'text-gray-800'}`}>
                            {item.title}
                          </h3>
                          <p className={`text-base transition-colors duration-300 ${isActive ? 'text-purple-600' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

          </div>

        </div>
        {/* Subtitle */}
        <div className="text-center mt-20">
                <p className="text-lg text-gray-700 font-medium">Your journey continues...</p>
              </div>
      </Section>
    );
  };

  return (
    <>
      <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <Hero />
      <Section className="flex flex-col items-center justify-center pt-20 pb-0 bg-white w-full">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>What to expect</h2>
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
            <div className="flex items-center justify-center">
              {/* AI text already cut out with Munich image */}
              <Image
                src="/Mask group.png"
                alt="AI Munich"
                width={350}
                height={280}
                priority
                className="block"
              />
            </div>
            <div className="max-w-xl text-black text-lg space-y-4 flex-1">
              <p>The AI E Lab is built by founders, for founders — with speed, agility, and real impact at its core.</p>
              <p>In 12 weeks, we give you what actually matters: your own workspace, direct access to top VCs, weekly sessions with operators, and a team of peers who move as fast as you do.</p>
              <p>Whether you have an idea, a prototype, or just motivation — you'll build it here. No equity. No theory. Just traction.</p>
              <p>Backed by TUM.ai and supported by leading VCs.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Animated Statistics Section */}
      <AnimatedStatsSection />

      {/* Alumni Testimonials Carousel */}
      <Section className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Our Alumni Community</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">Hear from founders building the next generation of AI companies</p>

        {/* Animated Cards Container */}
        <div className="relative w-full">
          <div className="flex animate-scroll-left space-x-6">
            {/* Card 1 - Leon Hergert */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leon_hergert.png"
                    alt="Leon Hergert"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Leon Hergert</h3>
                  <p className="text-sm text-gray-600">Co-Founder @ Spherecast</p>
                  <p className="text-xs text-purple-600 font-medium">AI E-Lab 1.0</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"The AI E-Lab gave us the foundation to build Spherecast from idea to YC. The community and mentorship were game-changing."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/YC.png" alt="Y Combinator" width={32} height={24} className="object-contain" />
                </div>
                <span className="text-xs text-gray-500">Y Combinator S24</span>
              </div>
            </div>

            {/* Card 2 - Benedikt Wieser */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/benedikt_wieser.png"
                    alt="Benedikt Wieser"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Benedikt Wieser</h3>
                  <p className="text-sm text-gray-600">Winner AI E-Lab 2.0</p>
                  <p className="text-xs text-purple-600 font-medium">AI E-Lab 2.0</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed. The network is incredible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/CDTM.png" alt="CDTM" width={32} height={24} className="object-contain" />
                </div>
                <span className="text-xs text-gray-500">CDTM Alumni</span>
              </div>
            </div>

            {/* Card 3 - Leonardo Benini */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leonardo_benini.png"
                    alt="Leonardo Benini"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Leonardo Benini</h3>
                  <p className="text-sm text-gray-600">Founder @ Stealth Startup</p>
                  <p className="text-xs text-purple-600 font-medium">AI E-Lab 3.0</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"From zero to funded startup - the AI E-Lab accelerated our journey beyond what we thought possible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/ewor.png" alt="EWOR" width={32} height={24} className="object-contain" />
                </div>
                <span className="text-xs text-gray-500">EWOR Fellow</span>
              </div>
            </div>

            {/* Card 4 - Oliver Schoppe */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/oliver_schoppe.png"
                    alt="Oliver Schoppe"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Oliver Schoppe</h3>
                  <p className="text-sm text-gray-600">Principal @ UVC Partners</p>
                  <p className="text-xs text-purple-600 font-medium">Mentor & Investor</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"The quality of founders coming out of AI E-Lab is exceptional. We're proud to support this community."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/uvc_b.png" alt="UVC Partners" width={32} height={24} className="object-contain" />
                </div>
                <span className="text-xs text-gray-500">UVC Partners</span>
              </div>
            </div>

            {/* Duplicate cards for seamless loop */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leon_hergert.png"
                    alt="Leon Hergert"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Leon Hergert</h3>
                  <p className="text-sm text-gray-600">Co-Founder @ Spherecast</p>
                  <p className="text-xs text-purple-600 font-medium">AI E-Lab 1.0</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"The AI E-Lab gave us the foundation to build Spherecast from idea to YC. The community and mentorship were game-changing."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/YC.png" alt="Y Combinator" width={32} height={24} className="object-contain" />
                </div>
                <span className="text-xs text-gray-500">Y Combinator S24</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/benedikt_wieser.png"
                    alt="Benedikt Wieser"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Benedikt Wieser</h3>
                  <p className="text-sm text-gray-600">Winner AI E-Lab 2.0</p>
                  <p className="text-xs text-purple-600 font-medium">AI E-Lab 2.0</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed. The network is incredible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/CDTM.png" alt="CDTM" width={32} height={24} className="object-contain" />
                </div>
                <span className="text-xs text-gray-500">CDTM Alumni</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <InteractiveTimeline />

      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Community is created by working together</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/office_space.png"
              alt="TUM.ai Office Space"
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-gray-800 text-lg">Work from the TUM.ai headquarters, the home base of Europe's leading student AI initiatives.</p>
            <p className="text-gray-800 text-lg">You'll share the space with founders, builders, and AI talents from the TUM.ai network.</p>
            <p className="text-gray-800 text-lg">Get your designated Desks, monitors, whiteboards — and a community that's building every day.</p>
          </div>
        </div>
      </Section>

      <Section className="relative overflow-hidden py-20 bg-white w-full">

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center">
              {/* Main card */}
              <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-white/80 to-white/40 shadow-xl backdrop-blur-sm">
                {/* Inner glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"></div>

                {/* Top highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>

                {/* Left highlight */}
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent"></div>

                <div className="relative px-8 py-14 md:px-14">
                  <div className="text-center">
                    <h2 className={`mb-6 text-4xl font-bold text-black ${archivoSemiExpandedBold.className}`}>
                      Applications for <span className="underline">AI E-Lab 4.0</span> are open!
                    </h2>

                    <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600">
                      Be among the first to be informed about upcoming events, job opportunities, and workshops in our vibrant AI community.
                    </p>

                    <div className="flex justify-center">
                      <a
                        href="https://forms.tum-ai.com/ai-e-lab-3.0-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden backdrop-blur-2xl border border-purple-400/30 hover:border-purple-300/40 transition-all duration-300 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white"
                        style={{
                          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(126, 34, 206, 0.2) 100%)',
                          boxShadow: '0 8px 32px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                        }}
                      >
                        <span className="flex items-center gap-2">
                          <span>Apply Now</span>
                          <svg
                            className="h-5 w-5 transition-transform duration-300 hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Frequently Asked Questions</h2>
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-normal text-gray-800">{item.question}</h3>
                <span className={`text-2xl text-gray-400 transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              {openFAQ === index && (
                <div className="mt-4 text-gray-600 text-lg animate-in slide-in-from-top-2 duration-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
