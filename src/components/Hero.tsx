"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative min-h-[820px] flex items-center overflow-hidden">
      {/* Real hero background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hb-hero.png"
          alt="Hey Brew Cafe PH — artisanal coffee"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Black → clear → black top to bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 50%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <div className="max-w-2xl">
          <motion.span
            className="label block text-sm mb-4 font-semibold"
            style={{ color: "#fea277", letterSpacing: "0.12em" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Join The Heritage
          </motion.span>

          <motion.h1
            className="font-headline text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ color: "#ffffff" }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3 }}
          >
            HEY BREW CAFE PH
            <br />
            <span
              className="font-medium italic"
              style={{ color: "#f6f3ee", fontSize: "0.75em" }}
            >
              is now open for FRANCHISE!
            </span>
          </motion.h1>

          <motion.p
            className="text-lg lg:text-xl font-body mb-10 max-w-xl leading-relaxed"
            style={{ color: "#ebe8e3" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            A modern heritage brew combining artisanal coffee and premium milktea.
            Experience a proven business model designed for the Philippine market.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#501818] text-white px-8 py-4 rounded font-headline font-bold text-lg shadow-lg hover:bg-[#340406] hover:shadow-xl transition-all duration-200 group"
            >
              Start Your Journey
              <span
                className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
                style={{ fontSize: "1.25rem" }}
              >
                arrow_forward
              </span>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white/90 px-8 py-4 rounded font-headline font-bold text-lg hover:border-[#fea277] hover:text-[#fea277] transition-all duration-200"
            >
              View Packages
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span
          className="material-symbols-outlined text-4xl animate-bounce"
          style={{ color: "rgba(254,162,119,0.5)" }}
          aria-hidden="true"
        >
          expand_more
        </span>
      </motion.div>
    </header>
  );
}
