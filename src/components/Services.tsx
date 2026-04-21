"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Weddings",
    description:
      "From ceremony to reception, Nellie guides your wedding program with elegance and heart — keeping every moment on time while letting the emotion breathe.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Corporate Events",
    description:
      "Product launches, annual galas, award nights, and conferences. Professional, polished, and adaptable to any brand voice.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Birthdays & Milestones",
    description:
      "Debuts, sweet sixteens, anniversaries, and retirement parties. Celebrating life's big moments with the energy they deserve.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
        <circle cx="12" cy="9" r="6" />
        <path d="M15.477 13.89L17 22l-5-3-5 3 1.523-8.11" />
      </svg>
    ),
  },
  {
    title: "Private Gatherings",
    description:
      "Intimate dinners, reunions, and social events where a great host sets the tone and keeps conversation flowing all evening.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Religious Ceremonies",
    description:
      "Baptisms, confirmations, and community celebrations handled with reverence and warmth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
        <path d="M12 22V12" />
        <path d="M12 8V2" />
        <path d="M7 12h10" />
        <circle cx="12" cy="5" r="1" />
      </svg>
    ),
  },
  {
    title: "Custom Events",
    description:
      "Have something unique in mind? Nellie works with your vision to craft a hosting experience that fits your event perfectly.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"
        strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
        <path d="M9 18h6M10 22h4" />
        <path d="M12 2a7 7 0 0 1 7 7c0 4.17-3.33 6.17-3.33 9H8.33C8.33 15.17 5 13.17 5 9a7 7 0 0 1 7-7z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 px-8 md:px-12" style={{ background: "#f5f3f3" }}>
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            className="label text-xs mb-4"
            style={{ color: "#546349" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl font-normal mb-6"
            style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Events I Host
          </motion.h2>
          <motion.div
            className="h-px w-12 mx-auto mb-6"
            style={{ background: "#b1c1a2" }}
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          <motion.p
            className="text-base font-light max-w-lg mx-auto"
            style={{ color: "#75786f" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Every event is different. Every client deserves a host who prepares like it&apos;s the only one that matters.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-8 group"
              style={{ background: "#fbf9f9", border: "1px solid #e9e8e7" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(84,99,73,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#b1c1a2";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "#e9e8e7";
              }}
            >
              <span className="block mb-5" style={{ color: "#546349" }}>{service.icon}</span>
              <h3
                className="text-xl font-normal mb-3"
                style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
              >
                {service.title}
              </h3>
              <div className="h-px w-8 mb-4" style={{ background: "#b1c1a2" }} />
              <p className="text-sm font-light leading-relaxed" style={{ color: "#75786f" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="label text-xs inline-block px-10 py-4 transition-all duration-300"
            style={{ background: "#1b1c1c", color: "#fbf9f9" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#546349"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#1b1c1c"; }}
          >
            Book Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
}
