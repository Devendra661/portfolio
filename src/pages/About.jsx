import { FaDownload, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };
  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };

  return (
    <section id="about" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <motion.p
          className="uppercase tracking-widest text-pink-500 text-xs sm:text-sm font-semibold mb-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          About
        </motion.p>

        <motion.h1
          className="relative group inline-block text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-10 sm:mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Know About Me
          {/* Neon-red underline on hover */}
          <span
            className="absolute left-0 bottom-0 h-1 bg-red-500
               transform scale-x-0 group-hover:scale-x-100
               transition-transform duration-300 origin-left
               w-full inline-block
               shadow-[0_0_8px_rgba(255,0,0,0.8),0_0_15px_rgba(255,0,0,0.6)]"
          ></span>
        </motion.h1>

        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Left Side - Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={fadeInLeft}
          >
            <img
              src="/src/assets/about.jpg" // replace with your profile image
              alt="About Me"
              className="rounded-xl shadow-xl w-64 sm:w-80 md:w-full max-w-sm object-cover"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-4 text-center lg:text-left"
            variants={fadeInRight}
          >
            <h2 className="text-yellow-400 text-lg sm:text-xl font-semibold">
              – I'M Devendra
            </h2>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Software Engineer
            </h1>
<p className="text-left text-gray-300 leading-relaxed text-sm sm:text-base mb-6">
  I am a passionate and results-oriented Software Engineer with a strong drive to create clean, scalable, and user-friendly applications. I enjoy tackling complex problems, optimizing performance, and exploring new technologies that push the boundaries of innovation. My educational journey began with a Diploma in Computer Science and Engineering, where I built a solid foundation in core programming concepts, system design, and algorithms. Currently, I am pursuing a BTech in Computer Science with a specialization in Artificial Intelligence & Machine Learning, equipping me with modern tools and knowledge to build intelligent, data-driven solutions that align with emerging industry trends.
</p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              {/* Download CV */}
              <motion.a
                href="/Devendra_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl 
                bg-gray-800 border border-gray-700 shadow-lg transition-all duration-300 w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px 5px rgba(248, 113, 113, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload /> Download CV
              </motion.a>

              {/* Hire Me */}
              <motion.a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold rounded-xl 
                bg-gray-800 border border-gray-700 shadow-lg transition-all duration-300 w-full sm:w-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px 5px rgba(34,197,94,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaHandshake /> Hire Me
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
