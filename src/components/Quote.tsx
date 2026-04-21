"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const STATS = [
  { value: "200+", label: "Events Hosted" },
  { value: "5★",   label: "Client Rating" },
  { value: "8+",   label: "Years Experience" },
];

export default function Quote() {
  return (
    <section id="about" className="py-24 md:py-40" style={{ background: "#fbf9f9" }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-12">

        {/* Pull quote */}
        <div className="max-w-3xl mx-auto text-center mb-24 md:mb-40">
          <motion.span
            className="material-symbols-outlined text-5xl mb-10 block"
            style={{ color: "#b1c1a2" }}
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            format_quote
          </motion.span>

          <motion.blockquote
            className="text-2xl md:text-4xl italic font-normal leading-relaxed mb-10"
            style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            &ldquo;Nellie made our wedding feel like it was being held together by magic. Every transition was seamless, every guest was smiling. We didn&rsquo;t have to worry about a single thing.&rdquo;
          </motion.blockquote>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-px w-12 mb-5" style={{ background: "#c5c8bd" }} />
            <cite className="not-italic label text-xs" style={{ color: "#75786f" }}>
              Maria &amp; Jose — Wedding, Batangas 2024
            </cite>
          </motion.div>
        </div>

        {/* About — photo + text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/nellie-portrait.png"
                alt="Host Nellie smiling at an event"
                fill
                className="object-cover object-top transition-all duration-1000"
                style={{ filter: "grayscale(15%)" }}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.filter = "grayscale(15%)"; }}
              />
            </div>
            {/* Decorative block — sage */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 -z-10"
              style={{ background: "#d8e8c7" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            <p className="label text-xs mb-5" style={{ color: "#546349" }}>
              The Philosophy
            </p>
            <h2
              className="text-4xl md:text-5xl font-normal leading-tight mb-6"
              style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
            >
              Two Decades of<br />Hosting with Heart.
            </h2>
            <div className="h-px w-12 mb-8" style={{ background: "#c5c8bd" }} />
            <div className="space-y-4 mb-10">
              <p className="text-base font-light leading-relaxed" style={{ color: "#444840" }}>
                Nellie is a full-time professional event host with years of experience bringing warmth, energy, and grace to every occasion. From intimate garden weddings to grand corporate galas, she knows how to read the room and make every guest feel at home.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "#444840" }}>
                Her hosting style blends natural charisma with meticulous preparation — so you can relax, knowing the program is in expert hands.
              </p>
            </div>

            <a
              href="#services"
              className="label text-xs pb-1 inline-block transition-all duration-300"
              style={{ color: "#546349", borderBottom: "1px solid #546349" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#3d4b33";
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#3d4b33";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#546349";
                (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = "#546349";
              }}
            >
              Discover the Services
            </a>

            {/* Stats */}
            <div className="flex gap-10 pt-8 mt-8" style={{ borderTop: "1px solid #e9e8e7" }}>
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-3xl font-normal mb-1"
                    style={{ fontFamily: "var(--font-noto-serif)", color: "#546349" }}
                  >
                    {stat.value}
                  </p>
                  <p className="label text-xs" style={{ color: "#75786f" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
