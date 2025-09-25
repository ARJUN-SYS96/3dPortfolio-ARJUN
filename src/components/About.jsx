import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { div } from "framer-motion/client";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient shadow-card rounded-[20px] p-[1px]"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={`${icon}${icon.includes("?") ? "&" : "?"}tr=f-auto`}
            alt={title}
            loading="lazy"
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      {/* Profile photo placeholder */}
      <div className="w-28 h-28 rounded-full bg-gray-300 flex items-center justify-center mb-4 border-4 border-[#915eff] mx-auto mt-6" aria-label="Profile photo placeholder">
        <span className="text-gray-500">Your Photo</span>
      </div>
      {/* Resume download button placeholder */}
      <div className="flex justify-center mb-4">
        <button className="px-6 py-2 bg-[#915eff] text-white rounded-lg font-semibold opacity-60 cursor-not-allowed" disabled>
          Download Resume (Coming Soon)
        </button>
      </div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I’m Arjun Krishna, a passionate developer from Thrissur, Kerala. Currently, I’m a second-year BSc Computer Science student, focusing on both front-end and back-end development. I love building digital experiences that make a difference, and I’m always eager to learn new technologies. My main project, Elévé, is a fitness and nutrition tracker built with Django.<br /><br />
        When I’m not coding, I enjoy exploring new tech trends and collaborating on creative projects. Feel free to reach out at <a href="mailto:thathastulife@gmail.com" className="underline">thathastulife@gmail.com</a> or connect with me on <a href="https://www.instagram.com/arjun__1007" target="_blank" rel="noreferrer" className="underline">Instagram</a>.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
