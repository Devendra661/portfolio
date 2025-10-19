import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projects.json";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../components/Loader";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likes, setLikes] = useState({});

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setLikes(
        projectsData.reduce((acc, project) => {
          acc[project.id] = project.likes || 0;
          return acc;
        }, {})
      );
      setLoading(false);
    }, 1500);
  }, []);

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const uniqueCategories = ["All", ...new Set(projectsData.map((project) => project.category))];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.05 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, type: "spring" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <section id="portfolio" className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.p
          className="uppercase tracking-widest text-pink-500 text-sm font-semibold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="relative group inline-block text-5xl text-white font-bold mb-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Recent Work
          <span
            className="absolute left-0 bottom-0 h-1 bg-red-500 
               transform scale-x-0 group-hover:scale-x-100 
               transition-transform duration-300 origin-left
               w-full inline-block
               shadow-[0_0_6px_rgba(255,0,0,0.6),0_0_12px_rgba(255,0,0,0.5)]
               animate-pulse"
          ></span>
        </motion.h1>



        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <motion.div
            className="w-full lg:w-1/4 bg-[#1a1a1a] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Categories</h2>
            <div className="flex flex-wrap lg:flex-col gap-4">
              {uniqueCategories.map((category) => (
                <motion.a
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer
                    bg-gradient-to-b from-gray-900 to-black
                    ${selectedCategory === category
                      ? "text-red-500 shadow-[0_0_10px_rgba(255,255,255,0.25),0_0_20px_rgba(255,255,255,0.15)]"
                      : "text-gray-400 hover:text-gray-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4),0_0_20px_rgba(0,0,0,0.25)]"
                    }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedProject(project)}
                className="w-full" // Fix: let the grid control the width
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  likes={likes[project.id]}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4 sm:px-6"
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a1a] rounded-3xl p-6 sm:p-8 max-w-3xl w-full sm:w-[90%] relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="absolute top-4 right-4 px-4 py-2 rounded-lg 
             bg-gradient-to-b from-gray-900 to-black 
             text-red-500 font-bold 
             shadow-[0_0_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2)] 
             hover:shadow-[0_0_15px_rgba(255,255,255,0.5),0_0_30px_rgba(255,255,255,0.4)]
             transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>


              {/* Modal Content */}
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full max-h-[60vh] object-cover rounded-2xl mb-6"
              />

              <h2 className="text-2xl md:text-3xl font-bold text-pink-500 mb-3 text-center sm:text-left">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed text-center sm:text-left">
                {selectedProject.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start text-gray-400 text-xs md:text-sm mb-6 gap-2">
                <span className="uppercase">{selectedProject.category}</span>
                <span>❤️ {likes[selectedProject.id]}</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.button
                  onClick={() => handleLike(selectedProject.id)}
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 px-5 py-2 rounded-xl transition"
                >
                  ❤️ Like
                </motion.button>

                <motion.a
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl transition"
                >
                  🔗 View Project
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
