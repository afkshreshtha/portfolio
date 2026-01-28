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
          Hi, I’m Shreshtha Agarwal, a Next.js-focused Full Stack Developer based in Agra, India. I build fast, scalable, and SEO-optimized web applications that turn ideas into real, user-friendly products.

I have over 2+ years of experience working with Next.js, React, Tailwind CSS, Redux Toolkit, Node.js, Express, MongoDB, and Supabase. My work focuses on creating production-ready apps with clean UI, strong performance, and business-driven features like authentication, dashboards, payments, and content management.

I’ve built real products such as Radha Rani Handicrafts, an SEO-optimized business website, and TuneWave, a full-stack music SaaS platform with authentication, admin panels, and subscriptions. These projects reflect my approach: combining solid engineering with thoughtful user experience.

I enjoy solving real problems for startups and businesses—whether that’s improving performance, structuring scalable frontends, or building MVPs quickly and cleanly.

I’m always open to opportunities, collaborations, and remote work where I can help teams build and scale modern web products.

📧 Email: shreshthaagarwal1234@gmail.com
          
          `}
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;
