"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useRef } from "react";
import { client } from "@/lib/client";
import React, { useEffect, useState } from "react";
const About = () => {
  const { ref } = useSectionInView("About");
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';

    client.fetch(query).then((data) => setAbout(data));
  }, []);
  const refrence = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.div
        ref={refrence}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <p>
          {`
          Hello there! I'm Shreshtha Agarwal, a passionate and
          results-driven full-stack developer based in INDIA|Agra. With a
          solid foundation in Next.js and React.js, I thrive on turning
          innovative ideas into seamless, user-centric web experiences. 🚀
          Technical Journey: My journey in the tech realm spans over 2 years,
          during which I've honed my skills in both frontend and backend
          development. From designing captivating user interfaces with React.js
          to architecting robust server-side solutions, I enjoy the intricate
          dance between creativity and functionality. 🛠️ Tech Stack: I
          specialize in leveraging the power of Next.js for building
          high-performance web applications. On the backend, I've dabbled in
          Nodejs, Express, and MongoDb, ensuring a harmonious
          integration of all components. 🏆.These experiences have not only sharpened my technical
          acumen but also instilled a deep appreciation for collaborative
          problem-solving. 🌐 Continuous Learner: I'm passionate about staying
          ahead in the ever-evolving tech landscape. Whether it's adopting
          emerging technologies or fine-tuning my current skill set, I believe
          in the importance of continuous learning to deliver cutting-edge
          solutions. 🎨 Beyond Code: While I find immense joy in coding, I also
          have a creative side that is drawn to design aesthetics and user
          experience. Balancing the technical with the artistic allows me to
          create applications that not only function flawlessly but also
          captivate the user. 🌟 Let's Connect: I'm always open to new
          opportunities, collaborations, and connecting with fellow tech
          enthusiasts. Whether you want to discuss the latest tech trends,
          explore potential collaborations, or just have a friendly chat, feel
          free to reach out! 📬 Contact Information: Email: shreshthaagarwal1234@gmail.com
           Looking forward to connecting with
          like-minded individuals and contributing to the exciting world of web
          development!`}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
