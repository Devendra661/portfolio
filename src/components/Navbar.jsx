import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeInOut", staggerChildren: 0.08 },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.35, ease: "easeInOut" },
    },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-base-200/50 backdrop-blur-md" : "bg-base-200"} text-base-content`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/white_img.png"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-neutral"
          />
          <span className="text-lg font-bold tracking-wide">Devendra</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <MenuItems toggleMenu={() => {}} direction="row" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={toggleMenu}
            className="text-base-content focus:outline-none p-2"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed top-0 left-0 w-screen h-screen bg-base-200/95 backdrop-blur-md flex flex-col items-center justify-center gap-6 py-6 overflow-auto"
          >
            {/* Mobile Menu Logo */}
            <div className="absolute top-5 left-5 flex items-center gap-3">
              <img
                src="/src/assets/white_img.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-neutral"
              />
              <span className="text-lg font-bold tracking-wide">Devendra</span>
            </div>

            {/* Neon Glowing Close Button */}
            <button
              aria-label="Close menu"
              onClick={toggleMenu}
              className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full bg-black text-red-500 shadow-[0_0_15px_red] hover:shadow-[0_0_25px_red] transition-all duration-300"
            >
              <motion.span
                whileHover={{ rotate: 180, scale: 1.3 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 180 }}
              >
                <FaTimes size={24} />
              </motion.span>
            </button>

            {/* Mobile Menu Items */}
            <MenuItems toggleMenu={toggleMenu} direction="col" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
