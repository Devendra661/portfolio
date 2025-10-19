import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const MenuItems = ({ toggleMenu, direction = "row" }) => {
  const menu = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Feature", to: "feature" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Resume", to: "resume" },
    { name: "Contact", to: "contact" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <motion.ul
      className={`flex ${direction === "row" ? "flex-row gap-8" : "flex-col gap-6"} items-center`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {menu.map((item, index) => (
        <motion.li key={index} variants={itemVariants}>
          <Link
            to={item.to}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="relative group cursor-pointer text-gray-400 md:text-base uppercase tracking-wide transition-colors duration-300"
          >
            <span className="group-hover:text-white transition-colors duration-300">
              {item.name}
            </span>
            <motion.span
              className="absolute left-0 bottom-0 w-full h-[2px] bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"
            ></motion.span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MenuItems;
