import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Target, Fingerprint, Shield, Rocket } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Community Building & Growth",
    description: "Architecting engaged communities that scale with purpose and retain through value.",
  },
  {
    icon: Target,
    title: "Web3 Brand Strategy",
    description: "Positioning projects for credibility, recognition, and lasting market presence.",
  },
  {
    icon: Fingerprint,
    title: "Digital Presence & Identity",
    description: "Crafting authentic digital identities that resonate with Web3-native audiences.",
  },
  {
    icon: Shield,
    title: "Project Support & Moderation",
    description: "Maintaining healthy ecosystems through strategic moderation and governance.",
  },
  {
    icon: Rocket,
    title: "Web3 Operations & Launch",
    description: "End-to-end operational support from pre-launch to sustained growth phases.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section ref={ref} className="py-32 relative bg-gradient-to-b from-background via-card/30 to-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display text-sm uppercase tracking-[0.2em]">
            What I Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Core <span className="text-gradient-gold">Strengths</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl bg-card border border-border transition-all duration-300 hover:border-gold/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/5 ${
                index === services.length - 1 ? "lg:col-span-1 md:col-span-2 lg:col-start-2" : ""
              }`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 transition-colors group-hover:bg-gold/10">
                <service.icon className="w-6 h-6 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-ivory">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
