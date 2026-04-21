"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-40 px-8 md:px-12" style={{ background: "#f5f3f3" }}>
      <div className="max-w-[1440px] mx-auto">

        <div
          className="p-10 md:p-20 lg:p-24 flex flex-col lg:flex-row gap-16 lg:gap-24"
          style={{ background: "#fbf9f9", border: "1px solid #e9e8e7" }}
        >
          {/* Info side */}
          <motion.div
            className="lg:w-1/3 shrink-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2
              className="text-4xl md:text-5xl font-normal leading-tight mb-8"
              style={{ fontFamily: "var(--font-noto-serif)", color: "#1b1c1c" }}
            >
              Secure the<br />Date
            </h2>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: "#75786f" }}>
              Nellie accepts a limited number of bookings per season to ensure the highest level of dedication to each event. Reach out early to secure your date.
            </p>

            <div className="space-y-5">
              {[
                { icon: "mail", href: "mailto:Hostnellieandevents@gmail.com", text: "Hostnellieandevents@gmail.com" },
                { icon: "phone", href: "tel:+639926186313", text: "+63 992 618 6313" },
                { icon: "photo_camera", href: "https://www.instagram.com/hostnellie", text: "@hostnellie", external: true },
                { icon: "location_on", href: null, text: "Metro Manila, Philippines" },
              ].map((item) => (
                <div key={item.icon} className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-xl" style={{ color: "#b1c1a2" }} aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-sm tracking-wide transition-colors duration-300"
                      style={{ color: "#444840" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#546349"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#444840"; }}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm tracking-wide" style={{ color: "#444840" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            action="#"
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="label text-xs block" style={{ color: "#75786f" }}>Your Full Name</label>
              <input id="name" name="name" type="text" placeholder="Full Name" className="input-underline" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="label text-xs block" style={{ color: "#75786f" }}>Email Address</label>
              <input id="email" name="email" type="email" placeholder="email@address.com" className="input-underline" />
            </div>
            <div className="space-y-2">
              <label htmlFor="event-type" className="label text-xs block" style={{ color: "#75786f" }}>Event Type</label>
              <select id="event-type" name="event-type" className="input-underline appearance-none cursor-pointer">
                <option value="">Select an event type</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday / Milestone</option>
                <option>Private Gathering</option>
                <option>Religious Ceremony</option>
                <option>Custom Event</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="label text-xs block" style={{ color: "#75786f" }}>Estimated Date</label>
              <input id="date" name="date" type="text" placeholder="e.g. June 2025" className="input-underline" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="message" className="label text-xs block" style={{ color: "#75786f" }}>Tell us about your event</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share your vision, the mood, and the scale..."
                className="input-underline resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button
                type="submit"
                className="label text-xs px-12 py-4 transition-all duration-300 w-full md:w-auto"
                style={{ background: "#546349", color: "#ffffff" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#3d4b33"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#546349"; }}
              >
                Send Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
