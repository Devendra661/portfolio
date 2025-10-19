import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import EffectWrapper from '../components/EffectWrapper';
const Contact = () => {
  return (
    <EffectWrapper>
      <motion.section
        id="contact"
        className=" py-12 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <p className="uppercase tracking-widest  text-pink-500 text-sm font-semibold mb-2">
            Contact
          </p>
          {/* Heading */}
          <motion.h1
            className="relative group text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-white font-bold mb-12 sm:mb-16 text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Reach Me
            <span
              className="absolute left-0 -bottom-2 h-1 bg-red-500 transition-transform duration-300 origin-left transform scale-x-0 group-hover:scale-x-100
               shadow-[0_0_8px_rgba(255,0,0,0.8),0_0_15px_rgba(255,0,0,0.6)]"
            ></span>
          </motion.h1>

          <ContactForm />
        </div>
      </motion.section>
    </EffectWrapper>
  );
};

export default Contact;
