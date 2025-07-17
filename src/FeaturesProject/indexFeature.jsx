import { motion } from "framer-motion";
import { projects } from "../Array";

export default function FeaturesProject() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-blue-900 to-black text-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            Featured Projects
          </h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Koleksi proyek terbaik yang saya kembangkan
          </p>
        </div>

        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            Solusi Digital <span className="text-blue-300">Berkualitas</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            Setiap proyek dikembangkan dengan pendekatan terstruktur, mulai dari riset, desain, hingga implementasi. Saya fokus pada pembuatan solusi yang tidak hanya indah secara visual tetapi juga efektif menyelesaikan masalah.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            {[
              "UI/UX Design",
              "Responsive",
              "Optimized",
              "Secure",
              "Scalable",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 bg-blue-900/40 text-blue-100 rounded-full text-sm border border-blue-700/50 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300"
    >
      {/* Image Section */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <div className="flex-1">
          <p className="text-gray-200 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Icons */}
          <div className="flex items-center gap-3 mb-4">
            {project.techIcons?.map((icon, i) => (
              <div key={i} className="relative group/icon">
                <img
                  src={icon}
                  alt="Tech icon"
                  className="h-7 w-7 object-contain transition-transform group-hover/icon:scale-110"
                />
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity">
                  {project.tags[i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags & Button */}
        <div className="mt-auto flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 text-blue-100 rounded-full text-xs border border-white/10 backdrop-blur-sm group-hover:bg-white/10 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            View
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
