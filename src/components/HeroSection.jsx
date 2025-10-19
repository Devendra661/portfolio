import heroImage from "../assets/black_img.png";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter, FaLaptopCode } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.5 } },
  };

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  const socialLinks = [
    { icon: FaInstagram, color: "#E1306C", link: "https://www.instagram.com/i_dev_666/" },
    { icon: FaLinkedinIn, color: "#0A66C2", link: "https://www.linkedin.com/in/devendra666/" },
    { icon: FaGithub, color: "#ffffff", link: "https://github.com/Devendra661" },
    { icon: FaTwitter, color: "#1DA1F2", link: "#" },
  ];

  return (
    <section className="w-full flex items-center relative z-10 pt-20 sm:pt-24 lg:pt-0">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center flex-col-reverse sm:flex-col-reverse lg:flex-row">
        
        {/* Right Image Section */}
        <motion.div
          className="flex justify-center lg:justify-end h-full order-first sm:order-first lg:order-last relative z-20 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className="relative overflow-hidden">
            {/* Optional splash background */}
            <div className="absolute inset-0 bg-[url('/splash.png')] bg-contain bg-no-repeat bg-center z-0" />

            {/* ✅ Image: full width & visible on mobile, cropped on large */}
            <motion.img
              src={heroImage}
              alt="Hero"
              className="
                relative z-20 
                mt-10 sm:mt-16 md:mt-24 lg:mt-20
                w-full sm:w-[220px] md:w-[280px] lg:w-[320px]
                h-auto sm:h-[30vh] md:h-[40vh] lg:h-[50vh]
                object-contain sm:object-cover
                rounded-none sm:rounded-2xl
                border-none sm:border-4 sm:border-white/20
                shadow-none sm:shadow-lg
              "
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          </motion.div>

          {/* Floating Icon */}
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30">
            <FaLaptopCode className="text-green-500 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 drop-shadow-lg" />
          </span>
        </motion.div>

        {/* Left Text Section */}
        <motion.div
          className="flex flex-col pt-16 sm:pt-20 md:pt-28 lg:pt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="uppercase tracking-widest text-gray-400 mb-2 text-sm sm:text-base" variants={fadeInUp}>
            Welcome to my world
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
            variants={fadeInUp}
          >
            Hi, I’m{" "}
            <span className="text-pink-500">
              <Typewriter
                words={["Devendra"]}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                loop={1}
                cursor={false}
              />
            </span>
            <br />
            a{" "}
            <span className="text-gray-200">
              <Typewriter
                words={["Software Engineer", "Full Stack Developer", "Problem Solver"]}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
                loop={0}
                cursor
                cursorStyle="│"
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-4 sm:mt-6 leading-relaxed max-w-lg text-sm sm:text-base"
            variants={fadeInUp}
          >
            "First, solve the problem. Then, write the code." - John Johnson
          </motion.p>

          <motion.h3
            className="text-base sm:text-lg font-semibold text-gray-300 mt-6 sm:mt-8"
            variants={fadeInUp}
          >
            Find <span className="text-pink-500">me</span> on
          </motion.h3>

          <div className="flex gap-4 justify-center lg:justify-start mt-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.link}
                  className="bg-gray-800 p-2 sm:p-3 rounded-lg shadow-lg transition transform"
                  whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${social.color}` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} color={social.color} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
