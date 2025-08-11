"use client";

import Section from "@components/ui/Section";
import { Hero } from "./hero";
import { WhatToExpectRevamp } from "@components/WhatToExpectRevamp";
import { Organization, WithContext } from "schema-dts";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { 
  archivoRegular, 
  archivoMedium, 
  archivoSemiBold, 
  archivoBold, 
  archivoSemiExpandedBold 
} from "../../styles/fonts";

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
  };

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedStartup, setSelectedStartup] = useState('spherecast');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const startupData = {
    spherecast: {
      name: 'Spherecast',
      description: 'Spherecast is pioneering the future of AI-powered content creation and distribution. Our platform enables creators to produce, optimize, and distribute content across multiple channels using intelligent automation and data-driven insights.',
      website: 'https://www.spherecast.ai/',
      icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
      tagline: 'AI Content Creation Platform',
      image: '/assets/home_img4.jpg'
    },
    'get-ikigai': {
      name: 'Get-Ikigai',
      description: 'Get-Ikigai is helping individuals discover their purpose and achieve personal fulfillment through AI-driven coaching and guidance. Our platform combines psychological insights with machine learning to provide personalized life coaching and career guidance.',
      website: 'https://www.get-ikigai.com/',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      tagline: 'AI-Powered Life Coaching',
      image: '/assets/home_img5.jpeg'
    },
    'tau-robotics': {
      name: 'Tau Robotics',
      description: 'Tau Robotics is advancing the future of autonomous robotics through cutting-edge AI and machine learning. Our robots are designed to work alongside humans in manufacturing, healthcare, and service industries, combining precision, safety, and intelligence.',
      website: 'https://www.tau-robotics.com/',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2 2v10a2 2 0 002 2z',
      tagline: 'Autonomous Robotics Solutions',
      image: '/assets/office_space.png'
    },
    tenmin: {
      name: 'Tenmin',
      description: 'Tenmin is transforming how teams collaborate and communicate through intelligent AI assistants. Our platform streamlines workflows, automates routine tasks, and enhances productivity by providing contextual insights and smart recommendations.',
      website: 'https://tenmin.ai/',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      tagline: 'AI-Powered Team Collaboration',
      image: '/assets/home_img3.png'
    },
    helmit: {
      name: 'Helmit',
      description: 'Helmit is building the future of AI-powered cybersecurity. Our platform uses advanced machine learning to detect and prevent cyber threats in real-time, protecting businesses from evolving security risks. We combine cutting-edge AI with deep security expertise to keep organizations safe.',
      website: 'https://www.helmit.org/de/',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      tagline: 'AI-Powered Cybersecurity',
      image: '/assets/home_img2.png'
    },
    explaino: {
      name: 'Explaino',
      description: 'Explaino is revolutionizing how businesses understand and communicate complex AI decisions. Our platform provides transparent, interpretable explanations for AI models, helping companies build trust with customers and comply with regulatory requirements.',
      website: 'https://explaino.ai/',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      tagline: 'AI Explainability Platform',
      image: '/assets/home_img1.jpg'
    }
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
                          <h3 className={`font-semibold text-2xl mb-2 transition-colors duration-300 ${isActive ? 'text-purple-700' : 'text-gray-800'} ${archivoSemiBold.className}`}>
                            {item.title}
                          </h3>
                          <p className={`text-base transition-colors duration-300 ${isActive ? 'text-purple-600' : 'text-gray-600'} ${archivoRegular.className}`}>
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
                <p className={`text-lg text-gray-700 font-medium ${archivoMedium.className}`}>Your journey continues...</p>
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
      
      <WhatToExpectRevamp />

      {/* Alumni Testimonials Carousel */}
      <Section className="flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Our Community</h2>
        <p className={`text-lg text-gray-600 mb-12 text-center`}>Hear from founders building the next generation of AI companies</p>

        {/* Animated Cards Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll-left space-x-6 whitespace-nowrap">
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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Leon Hergert</h3>
                  <p className={`text-sm text-gray-600`}>Co-Founder @ Spherecast</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 1.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"The AI E-Lab gave us the foundation to build Spherecast from idea to YC. The community and mentorship were game-changing."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/YC.png" alt="Y Combinator" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>Y Combinator S24</span>
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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Benedikt Wieser</h3>
                  <p className={`text-sm text-gray-600`}>Winner AI E-Lab 2.0</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 2.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed. The network is incredible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/CDTM.png" alt="CDTM" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>CDTM Alumni</span>
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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Leonardo Benini</h3>
                  <p className={`text-sm text-gray-600`}>Founder @ Stealth Startup</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 3.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"From zero to funded startup - the AI E-Lab accelerated our journey beyond what we thought possible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/ewor.png" alt="EWOR" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>EWOR Fellow</span>
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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Oliver Schoppe</h3>
                  <p className={`text-sm text-gray-600`}>Principal @ UVC Partners</p>
                  <p className={`text-xs text-purple-600 font-medium`}>Mentor & Investor</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"The quality of founders coming out of AI E-Lab is exceptional. We're proud to support this community."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/uvc_b.png" alt="UVC Partners" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>UVC Partners</span>
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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Leon Hergert</h3>
                  <p className={`text-sm text-gray-600`}>Co-Founder @ Spherecast</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 1.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"The AI E-Lab gave us the foundation to build Spherecast from idea to YC. The community and mentorship were game-changing."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/YC.png" alt="Y Combinator" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>Y Combinator S24</span>
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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Benedikt Wieser</h3>
                  <p className={`text-sm text-gray-600`}>Winner AI E-Lab 2.0</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 2.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed. The network is incredible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/CDTM.png" alt="CDTM" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>CDTM Alumni</span>
              </div>
            </div>

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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Leonardo Benini</h3>
                  <p className={`text-sm text-gray-600`}>Founder @ Stealth Startup</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 3.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"From zero to funded startup - the AI E-Lab accelerated our journey beyond what we thought possible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/ewor.png" alt="EWOR" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>EWOR Fellow</span>
              </div>
            </div>

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
                  <h3 className={`font-semibold text-lg text-gray-900`}>Oliver Schoppe</h3>
                  <p className={`text-sm text-gray-600`}>Principal @ UVC Partners</p>
                  <p className={`text-xs text-purple-600 font-medium`}>Mentor & Investor</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1`}>"The quality of founders coming out of AI E-Lab is exceptional. We're proud to support this community."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/uvc_b.png" alt="UVC Partners" width={32} height={24} className="object-contain" />
                </div>
                  <span className={`text-xs text-gray-500`}>UVC Partners</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <InteractiveTimeline />

      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className={`text-4xl font-normal mb-12 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Notable Startups</h2>
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Navigation */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-3">
                {Object.entries(startupData).map(([id, startup]) => (
                  <div key={id} className="space-y-3 lg:space-y-0">
                    <button
                      onClick={() => setSelectedStartup(id)}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-300 flex items-center justify-between ${
                        selectedStartup === id
                          ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <span className="font-medium">{startup.name}</span>
                      <svg className={`w-4 h-4 transition-transform ${selectedStartup === id ? 'rotate-90 lg:rotate-0' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    {/* Mobile Expanded Content - only show on mobile */}
                    {selectedStartup === id && (
                      <div className="lg:hidden bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl p-6 text-white shadow-xl shadow-purple-500/25 animate-in slide-in-from-top-2 duration-300">
                        <div className="flex flex-col gap-6">
                          {/* Image */}
                          <div className="w-full h-64">
                            <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                              <Image
                                src={startupData[selectedStartup as keyof typeof startupData].image}
                                alt={startupData[selectedStartup as keyof typeof startupData].name}
                                width={400}
                                height={320}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                          
                          {/* Text Content */}
                          <div className="space-y-4">
                            <p className="text-base leading-relaxed">
                              {startupData[selectedStartup as keyof typeof startupData].description}
                            </p>
                            <a 
                              href={startupData[selectedStartup as keyof typeof startupData].website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full"
                            >
                              <span>FIND OUT MORE</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content Panel - Desktop Only */}
            <div className="hidden lg:block lg:w-2/3">
              <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl p-8 text-white shadow-xl shadow-purple-500/25 h-[480px]">
                <div className="flex flex-col lg:flex-row gap-8 items-start h-full">
                  {/* Text Content */}
                  <div className="lg:w-1/2 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-3xl font-bold mb-4">
                        {startupData[selectedStartup as keyof typeof startupData].name}
                      </h3>
                      <p className="text-lg leading-relaxed mb-6">
                        {startupData[selectedStartup as keyof typeof startupData].description}
                      </p>
                    </div>
                    <a 
                      href={startupData[selectedStartup as keyof typeof startupData].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors w-full"
                    >
                      <span>FIND OUT MORE</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* Image */}
                  <div className="lg:w-1/2 h-full">
                    <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                      <Image
                        src={startupData[selectedStartup as keyof typeof startupData].image}
                        alt={startupData[selectedStartup as keyof typeof startupData].name}
                        width={400}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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
            <div className={`w-full md:w-1/2 space-y-4`}>
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
                    <h2 className={`mb-6 text-4xl font-bold text-black ${archivoBold.className}`}>
                      Applications for AI E-Lab 4.0 are open!
                    </h2>

                    <p className={`mx-auto mb-10 max-w-xl text-lg leading-relaxed text-slate-600 ${archivoRegular.className}`}>
                      Be among the first to be informed about upcoming events, job opportunities, and workshops in our vibrant AI community.
                    </p>

                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Radiating glow effect - always visible */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-50 blur-xl"></div>
                        
                        {/* Sparkling effects - always visible */}
                        <div className="absolute -inset-4 opacity-100">
                          {/* Sparkle 1 */}
                          <div className="absolute top-0 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                          {/* Sparkle 2 */}
                          <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                          {/* Sparkle 3 */}
                          <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                          {/* Sparkle 4 */}
                          <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                          {/* Sparkle 5 */}
                          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                        </div>

                        <a
                          href="https://forms.tum-ai.com/ai-e-lab-3.0-application"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`relative overflow-hidden backdrop-blur-2xl border border-purple-400/30 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white ${archivoMedium.className}`}
                          style={{
                            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(126, 34, 206, 0.2) 100%)',
                            boxShadow: '0 8px 32px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <span className="flex items-center gap-2">
                            <span>Apply Now</span>
                            <svg
                              className="h-5 w-5"
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
        </div>
      </Section>

      {/* Notable Startups Section */}
      <Section className="py-12 md:py-16 bg-gray-50 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className={`text-sm text-gray-500 mb-8 uppercase tracking-wider`}>
            Notable AI E-Lab Startups
          </p>
          
          {/* Rotating startup logos */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 md:space-x-12 items-center whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex space-x-8 md:space-x-12 items-center shrink-0">
                <div className="h-10 md:h-12 w-20 md:w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/Tenmin.svg"
                    alt="Tenmin"
                    width={120}
                    height={48}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/LogoExplaino.svg"
                    alt="Explaino"
                    width={160}
                    height={48}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/Spherecast.webp"
                    alt="Spherecast"
                    width={140}
                    height={48}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/get-ilkigai.svg"
                    alt="Get Ikigai"
                    width={135}
                    height={25}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/TauRobotics.svg"
                    alt="Tau Robotics"
                    width={40}
                    height={40}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 md:space-x-12 items-center shrink-0">
                <div className="h-10 md:h-12 w-20 md:w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/Tenmin.svg"
                    alt="Tenmin"
                    width={120}
                    height={48}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/LogoExplaino.svg"
                    alt="Explaino"
                    width={160}
                    height={48}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/Spherecast.webp"
                    alt="Spherecast"
                    width={140}
                    height={48}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/get-ilkigai.svg"
                    alt="Get Ikigai"
                    width={135}
                    height={25}
                    className="h-6 md:h-8 w-auto object-contain"
                  />
                </div>
                <div className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/startups/TauRobotics.svg"
                    alt="Tau Robotics"
                    width={40}
                    height={40}
                    className="h-8 md:h-10 w-auto object-contain"
                  />
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
                <h3 className={`text-lg font-normal text-gray-800`}>{item.question}</h3>
                <span className={`text-2xl text-gray-400 transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              {openFAQ === index && (
                <div className={`mt-4 text-gray-600 text-lg animate-in slide-in-from-top-2 duration-200 ${archivoRegular.className}`}>
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
