"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const GRID = [
  {
    src: "/images/portfolio/sample8.jpg",
    alt: "Nellie with a newlywed couple at their wedding reception",
    label: "Wedding Reception",
    col: "md:col-span-4",
    height: "h-[420px]",
  },
  {
    src: "/images/portfolio/sample7.png",
    alt: "Nellie hosting the AFC Employee Annual Awards Night",
    label: "Corporate Awards Night",
    col: "md:col-span-5 md:mt-24",
    height: "h-[600px]",
  },
  {
    src: "/images/portfolio/sample13.jpg",
    alt: "Nellie standing in a stunning floral venue setup",
    label: "Floral Gala",
    col: "md:col-span-3",
    height: "h-[340px]",
  },
  {
    src: "/images/portfolio/sample15.jpg",
    alt: "Nellie hosting a pink themed debut",
    label: "Debut",
    col: "md:col-span-3 md:mt-12",
    height: "h-[380px]",
  },
  {
    src: "/images/portfolio/sample16.jpg",
    alt: "Nellie hosting a Fibercom corporate presentation",
    label: "Corporate Event",
    col: "md:col-span-5",
    height: "h-[480px]",
  },
  {
    src: "/images/portfolio/sample1.jpg",
    alt: "Nellie hosting a birthday celebration",
    label: "Birthday Celebration",
    col: "md:col-span-4 md:mt-16",
    height: "h-[420px]",
  },
];

export default function Portfolio() {
  return (
    <section id="gallery" className="py-24 md:py-40 px-8 md:px-12" style={{ background: "#fbf9f9" }}>
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="label text-xs mb-4"
            style={{ color: "#75786f" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Archive
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-normal"
            style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Portfolio of Moments
          </motion.h2>
          <motion.div
            className="h-px w-12 mx-auto mt-6"
            style={{ background: "#b1c1a2" }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {GRID.map((item, i) => (
            <motion.div
              key={item.src}
              className={`group overflow-hidden ${item.col}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              <div className={`relative overflow-hidden ${item.height}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  quality={80}
                />
                <div
                  className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(27,28,28,0.42)" }}
                >
                  <p className="label text-xs" style={{ color: "#ffffff" }}>
                    {item.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial block */}
        <motion.div
          className="mt-24 md:mt-32 px-8 md:px-24 py-20 md:py-32 text-center"
          style={{ background: "#d8e8c7" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="block text-8xl font-normal leading-none mb-2 select-none"
            style={{ fontFamily: "var(--font-noto-serif)", color: "rgba(84,99,73,0.2)" }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote
            className="text-2xl md:text-3xl italic font-normal leading-relaxed max-w-2xl mx-auto mb-8"
            style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
          >
            Nellie&rsquo;s presence is transformative. She has this rare ability to command a room while making every individual feel like a guest of honor.
          </blockquote>
          <cite className="not-italic label text-xs" style={{ color: "#546349" }}>
            — Corporate Client, Manila
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
