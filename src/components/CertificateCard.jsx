import { motion } from "framer-motion";

const CertificateCard = ({ certificate, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative bg-gray-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-gray-800 cursor-pointer hover:shadow-[0_8px_40px_rgb(0,0,0,0.9)] transition duration-300 hover:-translate-y-2 flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={certificate.imageUrl}
        alt={certificate.title}
        className="w-full md:w-1/2 h-48 md:h-auto object-cover rounded-t-xl md:rounded-l-xl md:rounded-t-none"
      />
      <div className="p-6 w-full md:w-1/2 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
        <p className="text-sm text-gray-400">
          {certificate.organization} | {certificate.duration}
        </p>
        <p className="mt-3 text-gray-300 text-sm">{certificate.description}</p>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
