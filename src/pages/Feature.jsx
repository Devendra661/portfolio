import { FaCode, FaLaptopCode, FaGlobe, FaDatabase, FaMobileAlt, FaPaintBrush, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Feature = () => {
  const cards = [
    {
      icon: FaCode,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications and APIs using modern frameworks and technologies.",
    },
    {
      icon: FaLaptopCode,
      title: "Frontend Development",
      description: "Creating responsive and intuitive user interfaces with a focus on performance and user experience.",
    },
    {
      icon: FaGlobe,
      title: "Full Stack Solutions",
      description: "Developing end-to-end solutions, from database design to deployment, ensuring seamless integration and functionality.",
    },
    {
      icon: FaDatabase,
      title: "Database Design",
      description: "Designing efficient and secure databases, optimizing queries, and ensuring data integrity.",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "Building high-performance, cross-platform mobile applications with smooth user experiences.",
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Creating visually appealing and intuitive designs that enhance usability and engagement.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
    hover: { y: -5, scale: 1.03 },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -5 },
    hover: { opacity: 1, x: 5, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <section id="feature" className="py-12 sm:py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Label */}
        <motion.p
          className="uppercase tracking-widest text-pink-500 text-sm font-semibold mb-2 text-center md:text-left"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.p>

        {/* Section Title */}
        <motion.h1
          className="relative group text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-16 text-center md:text-left inline-block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          What I Do
          <span
            className="absolute left-1/2 md:left-0 bottom-0 h-1 bg-red-500 
            transform -translate-x-1/2 md:translate-x-0
            scale-x-0 group-hover:scale-x-100
            transition-transform duration-300 origin-left md:origin-left
            w-full shadow-[0_0_8px_rgba(255,0,0,0.8),0_0_15px_rgba(255,0,0,0.6)]"
          ></span>
        </motion.h1>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                className="group bg-[#111827] p-8 sm:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] 
                hover:shadow-[0_8px_40px_rgb(0,0,0,0.9)] transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <Icon size={36} className="text-pink-500 mb-6" />
                <h2 className="text-xl font-semibold text-white mb-4">{card.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>

                {/* Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6"
                  variants={arrowVariants}
                  initial="hidden"
                  whileHover="hover"
                >
                  <FaArrowRight size={20} className="text-pink-500" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;
