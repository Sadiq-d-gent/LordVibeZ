import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "DegenDAO",
    role: "Community Lead",
    contribution: "Built and scaled community from 0 to 15K members",
  },
  {
    name: "MetaVerse Labs",
    role: "Brand Strategist",
    contribution: "Defined brand positioning and launch strategy",
  },
  {
    name: "ChainLink Protocol",
    role: "Mod Team Lead",
    contribution: "Established moderation framework and guidelines",
  },
  {
    name: "NFT Collective",
    role: "Growth Operator",
    contribution: "Orchestrated Twitter presence and engagement",
  },
  {
    name: "Web3 Ventures",
    role: "Community Advisor",
    contribution: "Strategic advisory on community-led growth",
  },
  {
    name: "Crypto Guild",
    role: "Operations Lead",
    contribution: "Managed launch operations and team coordination",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display text-sm uppercase tracking-[0.2em]">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            Projects & <span className="text-gradient-gold">Collaborations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of Web3 projects I've contributed to and helped scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative p-6 rounded-xl bg-card/50 border border-border hover:border-gold/20 transition-all duration-300 hover:bg-card"
            >
              {/* Project logo placeholder */}
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 font-display font-bold text-gold text-lg">
                {project.name.charAt(0)}
              </div>

              <h3 className="font-display text-lg font-semibold text-ivory mb-1">
                {project.name}
              </h3>
              
              <span className="text-sm text-gold font-medium">
                {project.role}
              </span>
              
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {project.contribution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
