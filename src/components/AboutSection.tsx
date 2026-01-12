import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold font-display text-sm uppercase tracking-[0.2em]">
              About
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              The Operator Behind<br />
              <span className="text-gradient-gold">The Vision</span>
            </h2>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-ivory leading-relaxed">
              I'm <span className="text-gold font-semibold">Lord VibeZ </span>, a Web3-native operator building at the intersection of community, culture, and digital identity.
            </p>
            
            <p className="text-ivory-muted leading-relaxed">
              For years, I've worked behind the scenes with projects, DAOs, and founders to architect communities that don't just grow — they sustain. From Discord ecosystems to Twitter presence, from brand strategy to launch support, I operate where execution meets vision.
            </p>
            
            <p className="text-ivory-muted leading-relaxed">
              My philosophy is simple: <span className="text-ivory">community is infrastructure</span>. The protocols we build are only as strong as the people behind them. I specialize in making that foundation unshakable.
            </p>

            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-border">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-gold">50+</span>
                <p className="text-sm text-muted-foreground mt-1">Projects Supported</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-gold">3+</span>
                <p className="text-sm text-muted-foreground mt-1">Years in Web3</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <span className="font-display text-3xl md:text-4xl font-bold text-gold">100K+</span>
                <p className="text-sm text-muted-foreground mt-1">Community Members</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
