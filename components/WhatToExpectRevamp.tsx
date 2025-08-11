"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import Section from "@components/ui/Section";
import { 
  archivoRegular, 
  archivoSemiBold, 
  archivoBold, 
  archivoSemiExpandedBold 
} from "../styles/fonts";

/**
 * Drop-in replacement for your current "What to expect" block + stats.
 *
 * ✨ Highlights
 * - Premium, glassy hero layout with asymmetric grid and floating badges
 * - Feature cards with subtle 3D hover and gradient borders
 * - Counter section with smooth spring animation + shimmering number glyphs
 * - Mobile-first, then scales up with clean spacing
 */

export function WhatToExpectRevamp() {
  return (
    <Section className="relative w-full bg-white py-20">

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Content only */}
        <div className="w-full">
          <h2 className={`text-center text-4xl md:text-5xl uppercase tracking-tight text-black ${archivoSemiExpandedBold.className}`}>
            What to expect
          </h2>
          <p className={`mt-6 text-center text-lg leading-relaxed text-gray-700 ${archivoRegular.className}`}>
            Built by founders, for founders — optimized for speed, learning, and real traction.
          </p>

          {/* Feature cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <FeatureCard
              title="Your own workspace"
              body="Desks, monitors, whiteboards; a home base inside TUM.ai."
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" />
                </svg>
              }
            />
            <FeatureCard
              title="Operator sessions"
              body="Weekly deep-dives with builders who've shipped. Zero fluff."
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              }
            />
            <FeatureCard
              title="VC access"
              body="Warm intros and real feedback from top European funds."
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l6-6 4 4 8-8" />
                </svg>
              }
            />
            <FeatureCard
              title="Build > talk"
              body="Tight sprints, ruthless focus, demo-driven accountability."
              icon={
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h7" />
                </svg>
              }
            />
          </div>

          <p className={`mt-6 text-center text-base text-gray-600 ${archivoRegular.className}`}>
            Have an idea, a prototype, or just relentless drive? Build it here. No equity. No theory. Just traction.
            Backed by TUM.ai and supported by leading VCs.
          </p>

          {/* Simple stats */}
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <Stat title={"AI E-Lab Startups since 2022"} from={0} to={38} suffix="" />
              <Stat title={"raised by AI E-lab lab ventures"} from={0} to={5} suffix="M+" isMoney />
              <Stat title={"AI E-Lab Iterations"} from={0} to={3} suffix="" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}



function FeatureCard({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-white/20 p-5 transition-all duration-300 hover:border-white/30 backdrop-blur-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(40px) saturate(180%)',
      }}
    >
      <div className="flex items-start gap-3">
        <div 
          className="rounded-xl p-2 text-purple-700 transition-all duration-300 group-hover:scale-105"
          style={{
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.4)',
          }}
        >
          {icon}
        </div>
        <div>
          <h3 className={`text-lg font-semibold text-gray-900 ${archivoSemiBold.className}`}>{title}</h3>
          <p className={`mt-1 text-sm leading-relaxed text-gray-700 ${archivoRegular.className}`}>{body}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ title, from = 0, to, suffix = "", isMoney = false }: { title: string; from?: number; to: number; suffix?: string; isMoney?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(from);
  const spring = useSpring(mv, { stiffness: 100, damping: 20 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      mv.set(to);
    }
  }, [inView, mv, to]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        style={{ fontVariantNumeric: "tabular-nums" }}
        className={`text-6xl font-bold text-purple-600 ${archivoBold.className}`}
      >
        {isMoney ? (
          <AnimatedText value={rounded} prefix="€" suffix={suffix} decimals={0} />
        ) : (
          <AnimatedText value={rounded} suffix={suffix} />
        )}
      </motion.div>
      <div className={`mt-2 text-sm text-gray-600 ${archivoRegular.className}`}>{title}</div>
    </div>
  );
}

function AnimatedText({ value, prefix = "", suffix = "", decimals = 0 }: { value: ReturnType<typeof useTransform>; prefix?: string; suffix?: string; decimals?: number }) {
  const [text, setText] = useState("0");
  useEffect(() => {
    const unsub = value.on("change", (v: number) => {
      const num = decimals > 0 ? (Math.round(v * 10) / 10).toFixed(decimals) : Math.round(v).toString();
      setText(`${prefix}${num}${suffix}`);
    });
    return () => unsub();
  }, [value, prefix, suffix, decimals]);
  return <span>{text}</span>;
} 