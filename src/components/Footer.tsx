const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <span className="font-display text-xl font-bold tracking-wider text-foreground">
              PARK FIELD
            </span>
            <p className="font-body text-[10px] tracking-[0.3em] text-primary uppercase mt-1">
              Real Estate
            </p>
            <p className="font-body text-xs text-muted-foreground mt-4 leading-relaxed">
              Dubai's premier luxury real estate advisory, curating exceptional properties for discerning buyers.
            </p>
          </div>

          {[
            {
              title: "Explore",
              links: ["Curated Listings", "Area Guides", "New Developments", "Investment"],
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
              <h4 className="font-display text-sm font-semibold text-foreground mb-4 tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[10px] text-muted-foreground tracking-wider">
            © 2026 Park Field Real Estate. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-body text-[10px] text-muted-foreground tracking-wider">
              RERA LICENSE: XXXXXXX
            </span>
            <span className="text-muted-foreground/30">|</span>
            <span className="font-body text-[10px] text-muted-foreground tracking-wider">
              DED LICENSE: XXXXXXX
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
