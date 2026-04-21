"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#d9c1bf]/20" style={{ background: "#f6f3ee" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-headline text-lg font-bold mb-4" style={{ color: "#501818" }}>
              Hey Brew Cafe PH
            </div>
            <p className="font-body text-sm mb-6" style={{ color: "#867371" }}>
              A Modern Heritage Brew.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-sm font-body gap-2" style={{ color: "#867371" }}>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">phone</span>
                0967 796 3243
              </p>
              <p className="flex items-center text-sm font-body gap-2" style={{ color: "#867371" }}>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
                heybrewcafeph@gmail.com
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h5 className="font-headline font-bold text-sm mb-4" style={{ color: "#501818" }}>Links</h5>
            <ul className="space-y-3 font-body text-sm">
              {["Privacy Policy", "Terms of Service", "Franchise Portal", "Contact Us"].map((label) => (
                <li key={label}>
                  <a
                    href="#inquiry"
                    className="transition-colors duration-200 underline opacity-80 hover:opacity-100"
                    style={{ color: "#867371" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#501818"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#867371"; }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-1">
            <h5 className="font-headline font-bold text-sm mb-4" style={{ color: "#501818" }}>Connect</h5>
            <a
              href="https://www.facebook.com/HeyBrewPH"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm transition-colors duration-200 opacity-80 hover:opacity-100"
              style={{ color: "#867371" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#501818"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#867371"; }}
            >
              <span className="material-symbols-outlined text-sm" aria-hidden="true">thumb_up</span>
              Facebook Page
            </a>
          </div>

          {/* Credit */}
          <div className="md:col-span-1 flex flex-col justify-end text-left md:text-right">
            <p className="font-body text-xs mt-8 md:mt-0" style={{ color: "#534342" }}>
              &copy; {new Date().getFullYear()} Hey Brew Cafe PH. A Modern Heritage Brew.
            </p>
            <p className="font-body text-xs mt-2" style={{ color: "#867371" }}>
              Website by{" "}
              <a
                href="https://www.facebook.com/GenXcript"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors duration-200"
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#501818"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#867371"; }}
              >
                GenXcript
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
