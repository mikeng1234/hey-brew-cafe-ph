"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 min-h-[820px] flex items-center overflow-hidden">
      {/* Background — warm coffee gradient placeholder (swap for real photo later) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #1a0805 0%, #340406 35%, #501818 65%, #6b2b1a 100%)",
        }}
      >
        {/* Texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 60%, rgba(254,162,119,0.25) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(146,75,39,0.3) 0%, transparent 55%)",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(52,4,6,0.92) 0%, rgba(52,4,6,0.65) 55%, rgba(52,4,6,0.3) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
            HEY BREW CAFE PH{" "}
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 bg-[#501818] text-white px-8 py-4 rounded font-headline font-bold text-lg shadow-lg hover:bg-[#340406] hover:shadow-xl transition-all duration-200 group"
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
          style={{ color: "rgba(254,162,119,0.45)" }}
          aria-hidden="true"
        >
          expand_more
        </span>
      </motion.div>
    </header>
  );
}
