import React from "react";
import { styles } from "../styles";

const Testimonials = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4" id="testimonials">
      <h2 className={styles.sectionHeadText}>Testimonials</h2>
      <p className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]">
        Testimonials from colleagues, mentors, or clients will appear here. If you’d like to share your experience working with me, please get in touch!
      </p>
    </section>
  );
};

export default Testimonials;
