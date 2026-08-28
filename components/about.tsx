
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useRef } from "react";

const About = () => {
  const { ref } = useSectionInView("About");
  const reference = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.8, 1.1]
  );

  const opacityProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0.6, 1]
  );

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>

      <motion.div
        ref={reference}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <p>
          Hi, I&apos;m Shreshtha Agarwal, a frontend developer based in Agra,
          India, focused on React and Next.js.
        </p>

        <p className="mt-4">
          I started learning programming and web development in 2020 and have
          since built and deployed web applications covering e-commerce,
          real-time communication, media streaming, authentication, API
          integration, and content management.
        </p>

        <p className="mt-4">
          My main tools include{" "}
          <strong>
            React, Next.js, TypeScript, JavaScript, Tailwind CSS, Redux
            Toolkit, Node.js, Supabase, Sanity CMS, and REST APIs
          </strong>
          . I enjoy building responsive interfaces, connecting frontend
          applications to APIs, and turning ideas into usable products.
        </p>


<p className="mt-4">
  Some of my projects include{" "}
  <strong>Tabrova</strong>, a full-stack web application;{" "}
  <strong>Radha Rani Handicrafts</strong>, an e-commerce website for a real
  business; <strong>MusicWave</strong>, a full-stack music platform; and a{" "}
  <strong>real-time Discord-style chat application</strong>. These projects
  have given me hands-on experience with frontend development, APIs,
  authentication, state management, responsive UI, and production deployment.
</p>



        <p className="mt-4">
          I&apos;m currently pursuing my{" "}
          <strong>Bachelor of Computer Applications (BCA)</strong> at Amity
          University Online and looking for my first professional opportunity
          in frontend development.
        </p>

        <p className="mt-4">
          I&apos;m particularly interested in React/Next.js roles where I can
          contribute to real products, work with experienced developers, and
          continue improving through practical engineering experience.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;

