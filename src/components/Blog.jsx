import React from "react";
import { styles } from "../styles";

const Blog = () => {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 px-4" id="blog">
      <h2 className={styles.sectionHeadText}>Blog & Updates</h2>
      <p className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]">
        Coming soon: I’ll be sharing my latest projects, learning experiences, and tech insights here. Stay tuned!
      </p>
    </section>
  );
};

export default Blog;
