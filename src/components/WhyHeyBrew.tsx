"use client";

import { motion } from "framer-motion";

const CARDS = [
  {
    icon: "coffee_maker",
    bgIcon: "coffee",
    title: "Artisanal Coffee",
    description:
      "Locally sourced, expertly roasted beans. From robust espressos to smooth lattes, crafted for the modern aficionado.",
  },
  {
    icon: "local_drink",
    bgIcon: "local_cafe",
    title: "Premium Milktea",
    description:
      "Authentic tea bases paired with rich milk and creative sinkers. Capturing the dynamic youth and afternoon rush.",
  },
  {
    icon: "storefront",
    bgIcon: "trending_up",
    title: "Proven ROI Model",
    description:
      "Streamlined operations, comprehensive training, and aggressive marketing support ensure a swift return on investment.",
  },
];

export default function WhyHeyBrew() {
  return (
    <section id="why" className="py-24 bg-[#fcf9f4]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            className="font-headline text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#924b27" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Synergy
          </motion.h2>
          <motion.h3
            className="font-headline text-4xl lg:text-5xl font-extrabold mb-6"
            style={{ color: "#1c1c19" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Coffee &amp; Milktea Mastery
          </motion.h3>
          <motion.p
            className="font-body text-lg"
            style={{ color: "#534342" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Why choose one when you can offer the best of both? Our dual-concept menu
            maximizes foot traffic and caters to diverse taste profiles throughout the day.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-xl p-8 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              style={{ background: "#f6f3ee" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              {/* Ghost bg icon */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "4rem", color: "#340406" }}
                  aria-hidden="true"
                >
                  {card.bgIcon}
                </span>
              </div>

              {/* Foreground icon badge */}
              <span
                className="material-symbols-outlined text-4xl mb-6 inline-block bg-white p-3 rounded-lg shadow-sm border border-[#d9c1bf]/15"
                style={{ color: "#924b27" }}
                aria-hidden="true"
              >
                {card.icon}
              </span>

              <h4
                className="font-headline text-xl font-bold mb-3"
                style={{ color: "#1c1c19" }}
              >
                {card.title}
              </h4>
              <p className="font-body leading-relaxed" style={{ color: "#534342" }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
