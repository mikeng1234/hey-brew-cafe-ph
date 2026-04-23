"use client";

import { motion } from "framer-motion";

export default function UrgencyBanner() {
  return (
    <motion.div
      className="relative z-20 border-y border-[#d9c1bf]/20 shadow-xl"
      style={{ background: "#501818" }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left — icon + text */}
        <div className="flex items-center gap-4">
          <span
            className="material-symbols-outlined text-3xl"
            style={{ color: "#fea277" }}
            aria-hidden="true"
          >
            local_fire_department
          </span>
          <div>
            <h3 className="font-headline font-bold text-lg text-white">
              Limited Offer Available
            </h3>
            <p className="font-body text-sm text-[#ebe8e3] opacity-90">
              First 5 slots to avail will be given the{" "}
              <strong className="text-[#fea277]">₱200,000 franchise promo package!</strong>
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#inquiry"
          className="shrink-0 bg-[#924b27] text-white px-6 py-2 rounded label text-sm font-semibold hover:bg-[#7a3e20] transition-colors border border-[#d9c1bf]/20 active:scale-[0.95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fea277]"
        >
          Claim Promo
        </a>
      </div>
    </motion.div>
  );
}
