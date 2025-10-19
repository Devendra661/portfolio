import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CertificateCard from "../components/CertificateCard";
import certificates from "../certificates.json";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const education = [
    {
      id: 1,
      title: "Bachelor of Technology in CS-AIML",
      subtitle: "Dr. A.P.J. Abdul Kalam Technical University (2024-Present)",
      desc: "Currently pursuing a Bachelor of Technology in Computer Science with a specialization in Artificial Intelligence & Machine Learning, focusing on advanced algorithms, data structures, machine learning models, neural networks, and real-world applications of AI-driven solutions across various domains."
    },

    {
  id: 2,
  title: "Diploma in Computer Science & Engineering",
  subtitle: "Board of Technical Education, Uttar Pradesh (2021-2024)",
  desc: "Completed a Diploma in Computer Science & Engineering with a strong foundation in programming languages, algorithms, database management, operating systems, and software design patterns. Gained practical experience through academic projects, problem-solving exercises, and exposure to industry-relevant technologies that prepared me for advanced studies and real-world software development."
},
{
  id: 3,
  title: "Intermediate",
  subtitle: "Board of High School and Intermediate Education, Uttar Pradesh (2019-2021)",
  desc: "Completed Intermediate education with a focus on Mathematics and Science, strengthening analytical and problem-solving skills. Actively participated in technology-related extracurricular activities, led the robotics club, organized and competed in coding competitions, and developed a passion for programming and innovation that inspired me to pursue a career in software engineering."
}

  ];

  const experience = [
    {
  id: 1,
  title: "Customer Care Executive",
subtitle: "Digitech, Noida (October 2025 – Present)",
desc:"Delivering exceptional customer service by efficiently handling inbound and outbound communications to ensure high client satisfaction. Manage daily customer queries, complaints, and escalations with a resolution accuracy rate of 95%. Utilize CRM tools to log interactions, track issues, and ensure timely follow-ups, reducing response time by 30%. Collaborate with cross-functional teams to streamline service workflows and improve customer retention. Provide actionable feedback to the operations team to enhance service quality and customer experience across all touchpoints."
},
{
  id: 2,
  title: "Surveillance Officer",
  subtitle: "AnG India Ltd, Noida (April/2025 – September/2025)",
  desc: "Responsible for ensuring operational integrity through data-driven surveillance processes. Conduct weekly audits of surveillance data to identify and proactively resolve irregularities, achieving a 95% issue-resolution rate. Designed and automated Excel-based reporting tools for compliance checks, reducing manual workload by 30%. Collaborate with security teams to develop real-time incident tracking systems and enhance data retrieval using optimized pivot dashboards and advanced formulas. Present actionable insights and improvement recommendations to senior management to strengthen overall security operations."
},{
  id: 3,
  title: "Apprenticeship Training",
  subtitle: "BTPS, Kanpur (2024–2025)",
  desc: "Completed hands-on apprenticeship training focused on Java programming and application development. Gained practical experience in core Java concepts, object-oriented programming, database integration, and debugging techniques. Worked on real-world problem-solving tasks and collaborative projects, strengthening both technical proficiency and industry readiness."
}

  ];

  const designSkills = [
    { skill: "C", percent: 70 },
    { skill: "Python", percent: 85 },
    { skill: "React Js", percent: 60 },
    { skill: "Mysql", percent: 70 },
    { skill: "Excel", percent: 80 },
  ];

  const devSkills = [
    { skill: "HTML", percent: 85 },
    { skill: "CSS", percent: 80 },
    { skill: "JavaScript", percent: 75 },
    { skill: "Java", percent: 75 },
    { skill: "UI Degining", percent: 70 },
  ];

  return (
    <motion.section
      id="resume"
      className="min-h-screen py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.p
          className="uppercase tracking-widest text-pink-500 text-sm font-semibold mb-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          Resume
        </motion.p>

        <motion.h2
          className="relative group inline-block text-5xl md:text-5xl text-white font-bold mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
        >
          My Journey
          {/* Neon-red underline under text only */}
          <span
            className="absolute left-0 bottom-0 h-1 bg-red-500
               transform scale-x-0 group-hover:scale-x-100
               transition-transform duration-300 origin-left
               w-full inline-block
               shadow-[0_0_8px_rgba(255,0,0,0.8),0_0_15px_rgba(255,0,0,0.6)]"
          ></span>
        </motion.h2>



        {/* Tabs */}
        <div className="flex flex-wrap justify-center w-full mb-12 bg-black p-2 md:p-3 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.5)]">
          {["education", "skills", "experience", "certificates"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 md:w-1/4 py-3 md:py-4 text-sm md:text-lg font-semibold rounded-lg mx-1 my-1 md:mx-2 transition-all duration-300
                bg-gradient-to-b from-gray-900 to-black
                ${activeTab === tab
                  ? "text-red-500 shadow-[0_0_10px_rgba(255,255,255,0.25),0_0_20px_rgba(255,255,255,0.15)]"
                  : "text-gray-400 hover:text-gray-300 hover:shadow-[0_0_10px_rgba(0,0,0,0.4),0_0_20px_rgba(0,0,0,0.25)]"
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <h2 className="relative group text-2xl sm:text-3xl font-bold mb-10 text-center text-red-400 inline-block">
                Education Quality
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </h2>

              <div className="relative">
                {/* Vertical timeline line only on md+ */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700 hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-0 md:pl-10">
                  {education.map((item) => (
                    <motion.div
                      key={item.id}
                      className="relative bg-gray-900 min-h-[220px] p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-gray-800 cursor-pointer hover:shadow-[0_8px_40px_rgb(255,0,0,0.6)] transition duration-300 hover:-translate-y-2 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Horizontal connector (hidden on small screens) */}
                      <span className="absolute -left-6 top-8 w-6 h-1 bg-gray-600 hidden md:block"></span>

                      {/* Circle connector */}
                      <span className="absolute -left-7 top-7 w-3 h-3 bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-red-500 hidden md:block"></span>

                      <h3 className="text-lg sm:text-xl font-bold text-white border-b border-gray-700 pb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">{item.subtitle}</p>
                      <p className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills */}
        {activeTab === "skills" && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              {/** Design Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-400">Design Skills</h3>
                {designSkills.map((item) => (
                  <div key={item.skill} className="mb-5">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.skill}</span>
                      <span className="text-red-400">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/** Development Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-red-400">Development Skills</h3>
                {devSkills.map((item) => (
                  <div key={item.skill} className="mb-5">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.skill}</span>
                      <span className="text-red-400">{item.percent}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Experience */}
        {activeTab === "experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h2 className="relative group text-2xl sm:text-3xl font-bold mb-10 text-center text-red-400 inline-block">
                Experiance
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
              </h2>
                            <div className="relative">
                {/* Vertical timeline line only on md+ */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gray-700 hidden md:block"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-0 md:pl-10">
                  {experience.map((item) => (
                    <motion.div
                      key={item.id}
                      className="relative bg-gray-900 min-h-[220px] p-6 sm:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.6)] border border-gray-800 cursor-pointer hover:shadow-[0_8px_40px_rgb(255,0,0,0.6)] transition duration-300 hover:-translate-y-2 group"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Horizontal connector (hidden on small screens) */}
                      <span className="absolute -left-6 top-8 w-6 h-1 bg-gray-600 hidden md:block"></span>

                      {/* Circle connector */}
                      <span className="absolute -left-7 top-7 w-3 h-3 bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-red-500 hidden md:block"></span>

                      <h3 className="text-lg sm:text-xl font-bold text-white border-b border-gray-700 pb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-400">{item.subtitle}</p>
                      <p className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
          </motion.div>
        )}

        {/* Certificates */}
        {/* Certificates */}
        {activeTab === "certificates" && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h2 className="relative group text-2xl sm:text-3xl font-bold mb-10 text-center text-red-400 inline-block">
              Certificates
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </h2>

            <ul className="relative">
              {/* Vertical timeline line */}
              <span className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gray-700"></span>

              {certificates.map((certificate, index) => (
                <li key={certificate.id} className="relative md:flex md:items-start mb-12 last:mb-0">
                  {/* Timeline Icon */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-red-500 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Certificate Card */}
                  <div className={`mt-10 md:mt-0 md:w-1/2 
            ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12 md:text-left md:mr-auto'}
          `}>
                    <CertificateCard certificate={certificate} index={index} />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}



      </div>
    </motion.section>
  );
};

export default Resume;
