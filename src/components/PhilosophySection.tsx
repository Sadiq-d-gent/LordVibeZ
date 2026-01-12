import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const philosophies = [
  "Community is infrastructure.",
  "Consistency beats hype.",
  "Execution builds trust.",
];

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-gold font-display text-sm uppercase tracking-[0.2em]">
            Philosophy
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Core <span className="text-gradient-gold">Values</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          {philosophies.map((philosophy, index) => (
            <motion.div
              key={philosophy}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
              className="text-center"
            >
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-ivory leading-tight">
                <span className="text-gold/50">"</span>
                {philosophy}
                <span className="text-gold/50">"</span>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
