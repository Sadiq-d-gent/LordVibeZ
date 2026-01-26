import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const projects = [
  {
    name: "Timmytoastersol",
    role: "Community Manager",
    contribution:
      "Helped Timmy with a successful launch, same day of launch they did $286K Market cap",
    image: "stimmy.jpg",
    verified: true,
  },
  {
    name: "Spyfly",
    role: "Growth manager",
    contribution: "Referred over 500 memecoin traders to Spyfly app under 3 days",
    image: "spy.png",
    verified: true,
  },
  {
    name: "Crouton Jones",
    role: "Marketer",
    contribution: "Less than a week i got runaway joes over 1500 players on the App Store and play store",
    image: "crouton jones.jpg",
    verified: true,
  },
  {
    name: "Rich CTO",
    role: "Marketer",
    contribution: "Took rich from $250K to $800K market cap as a marketer",
    image: "rich-cto.jpg",
    verified: true,
  },
  {
    name: "POV",
    role: "Growth strategist",
    contribution: "",
    image: "pov.jpg",
    verified: true,
  },
  // {
  //   name: "Crypto Guild",
  //   role: "Operations Lead",
  //   contribution: "Managed launch operations and team coordination",
  //   image: "/projects/crypto-guild.png",
  //   verified: false,
  // },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container px-6">
        {/* Header */}
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
            Projects &{" "}
            <span className="text-gradient-gold">Collaborations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A selection of Web3 projects I've contributed to and helped scale.
          </p>
        </motion.div>

        {/* Grid */}
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
              className={`group relative p-6 rounded-xl bg-card/50 border border-border transition-all duration-300 hover:bg-card hover:border-gold/20 ${
                project.verified
                  ? "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.12)]"
                  : ""
              }`}
            >
              {/* Logo + Verified Badge */}
              <div className="relative w-12 h-12 mb-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain p-1 rounded-lg"
                  />
                </div>

                {project.verified && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold flex items-center justify-center shadow-md">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* Text */}
              <h3 className="font-display text-lg font-semibold text-ivory mb-1 flex items-center gap-2">
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
