"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SAMPLES = [
  { src: "/images/samples/sample1.jpg",  alt: "Hey Brew Cafe booth at an event" },
  { src: "/images/samples/sample2.jpg",  alt: "Hey Brew Cafe drinks display" },
  { src: "/images/samples/sample3.jpg",  alt: "Hey Brew Cafe cart setup" },
  { src: "/images/samples/sample4.jpg",  alt: "Hey Brew Cafe milktea selection" },
  { src: "/images/samples/sample5.jpg",  alt: "Hey Brew Cafe outdoor setup" },
  { src: "/images/samples/sample6.jpg",  alt: "Hey Brew Cafe at a venue" },
  { src: "/images/samples/sample7.jpg",  alt: "Hey Brew Cafe coffee cart" },
  { src: "/images/samples/sample8.jpg",  alt: "Hey Brew Cafe drinks lineup" },
  { src: "/images/samples/sample9.jpg",  alt: "Hey Brew Cafe branded cups" },
  { src: "/images/samples/sample10.jpg", alt: "Hey Brew Cafe event booth" },
  { src: "/images/samples/sample11.jpg", alt: "Hey Brew Cafe setup detail" },
  { src: "/images/samples/sample12.jpg", alt: "Hey Brew Cafe menu display" },
];

export default function Samples() {
  return (
    <section id="gallery" className="py-24" style={{ background: "#f6f3ee" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            className="label text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#924b27" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.p>
          <motion.h2
            className="font-headline text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1c1c19" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            We&rsquo;ve Been Everywhere
          </motion.h2>
          <motion.p
            className="font-body text-lg max-w-xl mx-auto"
            style={{ color: "#534342" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            From intimate celebrations to grand corporate events — Hey Brew shows up
            with style, every time.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {SAMPLES.map((img, i) => (
            <motion.div
              key={img.src}
              className="break-inside-avoid overflow-hidden rounded-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  quality={80}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(80,24,24,0.18)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
