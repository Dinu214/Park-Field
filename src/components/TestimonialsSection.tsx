import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Park Field found us our dream villa on Palm Jumeirah in under three weeks. The team's knowledge of the market is genuinely unmatched — they never wasted a moment of our time.",
    author: "Rania Al-Mansouri",
    role: "Villa Buyer, Palm Jumeirah",
    rating: 5,
  },
  {
    quote: "As a first-time investor in Dubai, I was nervous. The Park Field team guided me through every step with professionalism and patience. I secured an off-plan apartment with a 12% ROI forecast.",
    author: "James Whitfield",
    role: "Property Investor, London",
    rating: 5,
  },
  {
    quote: "We've used Park Field for three separate transactions. Their discretion, market insight, and seamless execution are why we keep coming back. Truly world-class service.",
    author: "Majid Al-Rashid",
    role: "Portfolio Investor, Dubai",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-secondary/40">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Client Stories</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
          <div className="divider mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-white rounded-sm border border-border p-8 flex flex-col card-lift"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" className="text-primary" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={30} className="text-primary/15 mb-4" />

              <p className="font-body text-[14px] text-foreground/70 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              <div className="mt-7 pt-5 border-t border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm font-bold text-primary">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="font-body text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
