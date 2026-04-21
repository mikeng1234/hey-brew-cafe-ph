"use client";

import { motion } from "framer-motion";

export default function FranchiseInquiry() {
  return (
    <section
      id="inquiry"
      className="py-24 border-t border-[#d9c1bf]/15"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left — info */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="label text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#924b27" }}
          >
            Take The Next Step
          </span>
          <h2
            className="font-headline text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
            style={{ color: "#1c1c19" }}
          >
            Ready to brew success?
          </h2>
          <p
            className="font-body text-lg mb-10 leading-relaxed"
            style={{ color: "#534342" }}
          >
            Fill out the inquiry form and our franchise development team will get in touch
            with you shortly to discuss availability in your preferred location.
          </p>

          {/* Badge */}
          <div
            className="rounded-xl p-6 border border-[#d9c1bf]/20 flex items-start gap-4 mb-8"
            style={{ background: "#f0ede8" }}
          >
            <span
              className="material-symbols-outlined text-2xl mt-0.5"
              style={{ color: "#924b27" }}
              aria-hidden="true"
            >
              verified
            </span>
            <div>
              <h4 className="font-headline font-bold" style={{ color: "#1c1c19" }}>
                Open Nationwide
              </h4>
              <p className="font-body text-sm mt-1" style={{ color: "#534342" }}>
                We are actively expanding across all major regions in the Philippines.
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            {[
              { icon: "phone", text: "0967 796 3243", href: "tel:09677963243" },
              { icon: "mail", text: "heybrewcafeph@gmail.com", href: "mailto:heybrewcafeph@gmail.com" },
              { icon: "thumb_up", text: "Facebook Page", href: "https://www.facebook.com/HeyBrewPH/", external: true },
            ].map((item) => (
              <div key={item.icon} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-lg"
                  style={{ color: "#924b27" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="font-body text-sm transition-colors duration-200"
                  style={{ color: "#534342" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#924b27"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#534342"; }}
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#d9c1bf]/20 relative"
          style={{ background: "#fcf9f4" }}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Decorative blur */}
          <div
            className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl"
            style={{ background: "rgba(146,75,39,0.1)" }}
          />

          <form className="space-y-6 relative z-10" action="#" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block label text-sm font-semibold mb-2"
                  style={{ color: "#1c1c19" }}
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Juan"
                  className="input-bordered"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block label text-sm font-semibold mb-2"
                  style={{ color: "#1c1c19" }}
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Dela Cruz"
                  className="input-bordered"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block label text-sm font-semibold mb-2"
                style={{ color: "#1c1c19" }}
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="+63 900 000 0000"
                className="input-bordered"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block label text-sm font-semibold mb-2"
                style={{ color: "#1c1c19" }}
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="juan@example.com"
                className="input-bordered"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block label text-sm font-semibold mb-2"
                style={{ color: "#1c1c19" }}
              >
                Target Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                placeholder="City or Province"
                className="input-bordered"
              />
            </div>

            <div>
              <label
                htmlFor="capital"
                className="block label text-sm font-semibold mb-2"
                style={{ color: "#1c1c19" }}
              >
                Available Capital
              </label>
              <select id="capital" name="capital" className="input-bordered appearance-none cursor-pointer">
                <option value="">Select a range</option>
                <option>Below ₱500,000</option>
                <option>₱500,000 – ₱1,000,000</option>
                <option>₱1,000,000 – ₱2,000,000</option>
                <option>Above ₱2,000,000</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#501818] text-white py-4 rounded-xl font-headline font-bold text-lg hover:bg-[#340406] transition-colors duration-200 mt-4 shadow-md"
            >
              Submit Inquiry
            </button>

            <p className="text-xs text-center font-body mt-4" style={{ color: "#534342" }}>
              By submitting, you agree to our Terms of Service &amp; Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
