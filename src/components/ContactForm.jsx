// ContactForm.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import contactImage from '../assets/white_img.png';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: check if offline
    if (!navigator.onLine) {
      toast.error("You are offline. Please check your internet connection.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: "bd55f953-828a-4e0e-8aff-1a8939121807",
        }),
      });

      const json = await response.json();

      if (json.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        toast.error(json.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const fadeInLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
  const fadeInRight = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

  const socialLinks = [
    { icon: FaInstagram, color: "#E1306C", link: "https://www.instagram.com/i_dev_666/" },
    { icon: FaLinkedinIn, color: "#0A66C2", link: "https://www.linkedin.com/in/devendra666/" },
    { icon: FaGithub, color: "#ffffff", link: "https://github.com/Devendra661" },
    { icon: FaTwitter, color: "#1DA1F2", link: "#" },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-center w-full"
    >
      <Toaster />
      <div className="container mx-auto px-6 lg:px-20 w-full">
        <div className="flex flex-col lg:flex-row gap-12 w-full">
          {/* Contact Form */}
          <motion.div variants={fadeInLeft} className="lg:w-2/3   rounded-lg shadow-lg">
            <h2 className="relative group text-2xl font-semibold mb-6 inline-block">
              Send a Message
              <span className="absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
            </h2>

            <form className="space-y-6 w-full max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { id: "name", type: "text", label: "Name", placeholder: "Your Name", value: formData.name },
                  { id: "email", type: "email", label: "Email", placeholder: "Your Email", value: formData.email },
                  { id: "mobile", type: "tel", label: "Mobile", placeholder: "Your Mobile Number", value: formData.mobile },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col">
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-300 mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      placeholder={field.placeholder}
                      value={field.value}
                      onChange={handleChange}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) handleSubmit(e);
                      }}
                      className="input w-full bg-gray-900 text-gray-100 border-none shadow-[0_0_10px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-0"
                      required
                    />
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) handleSubmit(e);
                  }}
                  className="textarea w-full bg-gray-900 text-gray-100 border-none shadow-[0_0_10px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-0"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer w-full sm:w-auto px-6 py-3 bg-gray-900 text-gray-200 font-semibold rounded-xl shadow-[0_0_8px_rgba(0,0,0,0.7)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInRight} className="lg:w-1/3 flex flex-col">
            <img
              src={contactImage}
              alt="Contact Person"
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-pink-500 mr-auto ml-0"
            />
            <h2 className="relative group text-2xl font-semibold mb-4 text-left">
              Contact Information
              <span className="absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
            </h2>
            <div className="text-gray-300 mb-6 text-left">
              <p className="mb-2">Noida, Uttar Pradesh, India</p>
              <p className="mb-2">+91 (813) 015-8279</p>
              <p>kumardevendra05808@gmail.com</p>
            </div>
            <h3 className="relative group text-lg font-semibold text-gray-300 mb-4 text-left">
              Find Me On
              <span className="absolute left-0 -bottom-1 h-[2px] bg-red-500 transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
            </h3>
            <div className="flex gap-4 justify-start mt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-3 rounded-lg shadow-lg transition transform"
                    whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${social.color}` }}
                  >
                    <Icon size={24} color={social.color} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
