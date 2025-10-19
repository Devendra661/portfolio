import { motion } from "framer-motion";

const ProjectCard = ({ title, description, imageUrl, category, likes }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.05, boxShadow: "0 10px 30px rgba(105, 99, 100, 0.3)" },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer transform w-full"
    >
      {/* Image */}
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-52 sm:h-64 md:h-56 lg:h-60 object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* Content */}
      <div className="p-5">
        <motion.h3
          className="text-xl sm:text-2xl font-bold text-pink-400 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-sm sm:text-base line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="flex justify-between items-center mt-4 text-sm sm:text-base text-gray-400 flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="badge badge-primary uppercase">{category}</span>
          <span>❤️ {likes}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
