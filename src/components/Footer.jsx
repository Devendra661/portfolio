import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full mt-8 sm:mt-12 py-4 sm:py-6 md:py-8 bg-gray-900/50 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-center">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base text-center">
          &copy; {new Date().getFullYear()} <span className="font-semibold">Dev</span>. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
