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
import { useState } from "react";

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
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-12 text-black text-center w-full">What to expect</h2>
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
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
              <p className="text-sm text-gray-500">Backed by TUM.ai and supported by leading VCs.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <div className="w-full max-w-5xl border-t border-gray-200 flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 mx-auto">
          <div className="flex-1 flex flex-col items-center py-8">
            <span className="text-5xl font-bold text-purple-600 mb-2">38</span>
            <span className="text-center text-black text-lg">AI E-Lab Ventures<br/>since 2022</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-8">
            <span className="text-5xl font-bold text-purple-600 mb-2">€5M+</span>
            <span className="text-center text-black text-lg">raised by AI E-Lab ventures</span>
          </div>
          <div className="flex-1 flex flex-col items-center py-8">
            <span className="text-5xl font-bold text-purple-600 mb-2">3</span>
            <span className="text-center text-black text-lg">AI E-Lab<br/>Iterations</span>
          </div>
        </div>
      </Section>
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-12 text-black text-center">Our Alumni are part of</h2>
        <div className="flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-16 h-16">
            <Image
              src="/assets/e-lab/partners/YC.png"
              alt="Y Combinator"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-16">
            <Image
              src="/assets/e-lab/partners/ewor.png"
              alt="EWOR"
              width={80}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16">
            <Image
              src="/assets/e-lab/partners/Stanford.png"
              alt="Stanford"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-16">
            <Image
              src="/assets/e-lab/partners/CDTM.png"
              alt="CDTM"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>
      </Section>
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-12 text-black text-center">Hear more from the community</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src="/assets/e-lab/testimonials/benedikt_wieser.png"
                alt="Benedikt Wieser"
                width={64}
                height={64}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-800 mb-1 text-lg">"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed."</p>
              <p className="text-sm text-gray-600"><strong>Benedikt Wieser</strong>, CDTM, Winner AI E-lab 2.0</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src="/assets/e-lab/testimonials/leon_hergert.png"
                alt="Leon Hergert"
                width={64}
                height={64}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-800 mb-1 text-lg">"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed."</p>
              <p className="text-sm text-gray-600"><strong>Leon Hergert</strong>, Co-Founder @ Spherecast (YC S24), AI E-Lab 1.0</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src="/assets/e-lab/testimonials/leonardo_benini.png"
                alt="Leonardo Benini"
                width={64}
                height={64}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-800 mb-1 text-lg">"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed."</p>
              <p className="text-sm text-gray-600"><strong>Leonardo Benini</strong>, Founder Stealth, EWOR, AI E-Lab 3.0</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src="/assets/e-lab/testimonials/oliver_schoppe.png"
                alt="Oliver Schoppe"
                width={64}
                height={64}
                className="w-16 h-16 object-cover"
              />
            </div>
            <div>
              <p className="text-gray-800 mb-1 text-lg">"The AI E-Lab is the best program for creating top-end entrepreneurs that has ever existed."</p>
              <p className="text-sm text-gray-600"><strong>Oliver Schoppe</strong>, Principal, UVC Partners</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-12 text-black text-center">Program</h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-black"></div>
          
          {/* Timeline items */}
          <div className="relative space-y-12">
            {/* Start - Right side */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-normal text-lg">Start</h3>
                <p className="text-sm text-gray-600">October</p>
              </div>
            </div>
            
            {/* Onboarding Weekend - Left side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-normal text-lg">Onboarding Weekend</h3>
                <p className="text-sm text-gray-600">3 days intensive</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2"></div>
            </div>
            
            {/* Execution Sessions - Right side */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-normal text-lg">Execution Sessions</h3>
                <p className="text-sm text-gray-600">Weekly sessions</p>
              </div>
            </div>
            
            {/* Build & Iterate - Left side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-normal text-lg">Build & Iterate</h3>
                <p className="text-sm text-gray-600">4 weeks</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2"></div>
            </div>
            
            {/* Litmus Test - Right side */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-normal text-lg">Litmus Test</h3>
                <p className="text-sm text-gray-600">Pitch event</p>
              </div>
            </div>
            
            {/* Build Sprint 2 - Left side */}
            <div className="flex items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="font-normal text-lg">Build Sprint 2</h3>
                <p className="text-sm text-gray-600">Stress Test</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2"></div>
            </div>
            
            {/* Demo Day - Right side */}
            <div className="flex items-center">
              <div className="w-1/2"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full z-10"></div>
              <div className="w-1/2 pl-8">
                <h3 className="font-normal text-lg">Demo Day</h3>
                <p className="text-sm text-gray-600">Final presentation</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-12 text-black text-center">Community is created by working together</h2>
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
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-8 text-black text-center">
          Applications for <span className="underline">AI E-Lab 4.0</span> are open!
        </h2>
        <div className="flex justify-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded font-normal hover:bg-purple-700 transition-colors text-lg">
            Apply Now
          </button>
        </div>
      </Section>
      
      <Section className="flex flex-col items-center justify-center py-20 bg-white w-full">
        <h2 className="text-4xl font-normal mb-12 text-black text-center">Frequently Asked Questions</h2>
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
