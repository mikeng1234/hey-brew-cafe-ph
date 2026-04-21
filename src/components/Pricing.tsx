"use client";

import { motion } from "framer-motion";

const PACKAGES = [
  {
    name: "Package 1",
    price: "₱7,000",
    cups: "50 Cups",
    highlight: false,
    features: [
      "3 flavors of your choice",
      "Set-up included",
      "Coffee booth for 3 hours",
      "Manpower included",
    ],
  },
  {
    name: "Package 2",
    price: "₱14,000",
    cups: "100 Cups",
    highlight: true,
    features: [
      "3 flavors of your choice",
      "Set-up included",
      "Coffee booth for 3 hours",
      "Manpower included",
    ],
  },
  {
    name: "Package 3",
    price: "₱21,000",
    cups: "150 Cups",
    highlight: false,
    features: [
      "3 flavors of your choice",
      "Set-up included",
      "Coffee booth for 3 hours",
      "Manpower included",
    ],
  },
];

const REMINDERS = [
  "Minimum 3 flavors of your choice",
  "Minimum 3 hours per event — additional ₱500 for succeeding hours",
  "50% downpayment for reservation (non-refundable). Change of schedule must be done 5 days before the event.",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24" style={{ background: "#ffffff" }}>
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
            Coffee Cart Packages
          </motion.p>
          <motion.h2
            className="font-headline text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: "#1c1c19" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Pick Your Package
          </motion.h2>
          <motion.p
            className="font-body text-lg max-w-xl mx-auto"
            style={{ color: "#534342" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            Bring Hey Brew Cafe PH to your next event. All packages include
            set-up, booth, and full manpower — ready to serve.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`rounded-2xl p-8 flex flex-col relative overflow-hidden ${
                pkg.highlight
                  ? "text-white shadow-2xl shadow-[#501818]/20"
                  : "border border-[#d9c1bf]/30"
              }`}
              style={{
                background: pkg.highlight ? "#501818" : "#fcf9f4",
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              {pkg.highlight && (
                <div
                  className="absolute top-4 right-4 label text-xs px-3 py-1 rounded-full font-bold"
                  style={{ background: "#924b27", color: "#ffffff" }}
                >
                  Most Popular
                </div>
              )}

              {/* Package name */}
              <p
                className="label text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: pkg.highlight ? "#fea277" : "#924b27" }}
              >
                {pkg.name}
              </p>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="font-headline text-5xl font-extrabold"
                  style={{ color: pkg.highlight ? "#ffffff" : "#1c1c19" }}
                >
                  {pkg.price}
                </span>
              </div>

              {/* Cups badge */}
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-8 w-fit"
                style={{
                  background: pkg.highlight ? "rgba(254,162,119,0.2)" : "#f0ede8",
                  color: pkg.highlight ? "#fea277" : "#924b27",
                }}
              >
                <span className="material-symbols-outlined text-base" aria-hidden="true">
                  local_cafe
                </span>
                <span className="font-body text-sm font-semibold">{pkg.cups}</span>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full mb-6"
                style={{ background: pkg.highlight ? "rgba(255,255,255,0.15)" : "#e5e2dd" }}
              />

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-lg mt-0.5 shrink-0"
                      style={{ color: pkg.highlight ? "#fea277" : "#924b27" }}
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span
                      className="font-body text-sm leading-relaxed"
                      style={{ color: pkg.highlight ? "#f6f3ee" : "#534342" }}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#inquiry"
                className="block text-center py-3.5 rounded-xl font-headline font-bold transition-all duration-200"
                style={
                  pkg.highlight
                    ? { background: "#fea277", color: "#340406" }
                    : { background: "#501818", color: "#ffffff" }
                }
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = pkg.highlight ? "#ffb695" : "#340406";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = pkg.highlight ? "#fea277" : "#501818";
                }}
              >
                Book This Package
              </a>
            </motion.div>
          ))}
        </div>

        {/* Reminders */}
        <motion.div
          className="rounded-2xl p-8 border border-[#d9c1bf]/30"
          style={{ background: "#f6f3ee" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ color: "#924b27" }}
              aria-hidden="true"
            >
              info
            </span>
            <h3
              className="font-headline font-bold text-lg"
              style={{ color: "#1c1c19" }}
            >
              Reminders
            </h3>
          </div>
          <ul className="space-y-3">
            {REMINDERS.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-lg mt-0.5 shrink-0"
                  style={{ color: "#924b27" }}
                  aria-hidden="true"
                >
                  task_alt
                </span>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#534342" }}>
                  {r}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a
            href="#inquiry"
            className="inline-flex items-center gap-2 bg-[#501818] text-white px-10 py-4 rounded-xl font-headline font-bold text-lg shadow-lg hover:bg-[#340406] hover:shadow-xl transition-all duration-200 group"
          >
            Book Us Now!
            <span
              className="material-symbols-outlined transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
