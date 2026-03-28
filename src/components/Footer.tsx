const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-foreground text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <span className="font-display text-xl font-bold tracking-wider">
              Park Field
            </span>
            <p className="text-[10px] font-body tracking-[0.3em] uppercase mt-1 opacity-60">
              Real Estate
            </p>
            <p className="font-body text-xs opacity-50 mt-4 leading-relaxed">
              Dubai's trusted real estate partner, delivering clarity and exceptional outcomes for buyers, sellers, and investors.
            </p>
          </div>

          {[
            {
              title: "Services",
              links: ["Buy", "Sell", "Rent", "Off Plan", "Commercial"],
            },
            {
              title: "Company",
              links: ["About Us", "Our Team", "Careers", "Press"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "RERA Compliance", "Cookie Policy"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider mb-4 opacity-80">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs opacity-50 hover:opacity-100 transition-opacity"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[11px] opacity-40">
            © 2026 Park Field Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-body text-[11px] opacity-40">
              RERA Registered
            </span>
            <span className="opacity-20">|</span>
            <span className="font-body text-[11px] opacity-40">
              DED Licensed
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
