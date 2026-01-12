import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, Twitter } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
          
          <span className="text-gold font-display text-sm uppercase tracking-[0.2em] relative">
            Let's Connect
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-6 leading-tight relative">
            Let's Build Something<br />
            <span className="text-gradient-gold">That Lasts.</span>
          </h2>
          
          <p className="text-ivory-muted text-lg md:text-xl mt-6 max-w-2xl mx-auto relative">
            Ready to take your Web3 project to the next level? Let's talk about how we can work together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-10 relative"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="https://twitter.com/TheLordVibez" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                DM on X
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" className="group" asChild>
              <a href="mailto:hello@thelordvibez.com">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
