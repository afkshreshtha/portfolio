"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
<<<<<<< HEAD
import { client } from "@/lib/client";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
  hover: {
    scale: 1.1,
    y: -8,
    rotateZ: Math.random() * 4 - 2,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const shimmerVariants = {
  initial: { x: "-100%" },
  animate: {
    x: "200%",
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear",
    },
  },
=======
import {  client } from "@/lib/client";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
>>>>>>> 89fbd38c943a7592ffb81ccd386ef57453fc24f7
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [skills, setSkills] = useState([]);
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const query = '*[_type == "skill"] | order(title asc)';

    client
      .fetch(query)
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching skills:", error))
      .finally(() => setLoading(false));
=======

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => setSkills(data));
>>>>>>> 89fbd38c943a7592ffb81ccd386ef57453fc24f7
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
<<<<<<< HEAD
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 perspective-1000"
    >
      <SectionHeading>My skills</SectionHeading>

      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-[200px] gap-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <div className="absolute top-0 left-0 animate-ping rounded-full h-16 w-16 border-4 border-blue-300 opacity-20"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 animate-pulse">
            Loading skills...
          </p>
        </div>
      ) : skills.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 rounded-2xl p-12"
        >
          <p className="text-lg">No skills added yet.</p>
        </motion.div>
      ) : (
        <motion.ul
          className="flex flex-wrap justify-center gap-3 text-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skill: any, index) => (
            <motion.li
              key={skill._id || index}
              variants={skillVariants}
              whileHover="hover"
              whileTap="tap"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              {/* Glow effect background */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, 
                    ${index % 5 === 0 ? "#3b82f6" : 
                      index % 5 === 1 ? "#8b5cf6" : 
                      index % 5 === 2 ? "#ec4899" : 
                      index % 5 === 3 ? "#10b981" : "#f59e0b"}20, 
                    transparent 70%)`,
                  filter: "blur(20px)",
                  transform: "scale(1.5)",
                }}
              />

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-white via-gray-50 to-white border border-black/[0.08] rounded-2xl px-6 py-4 shadow-lg overflow-hidden backdrop-blur-sm dark:from-white/10 dark:via-white/5 dark:to-white/10 dark:border-white/10">
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  initial="initial"
                  animate={hoveredIndex === index ? "animate" : "initial"}
                  variants={shimmerVariants}
                >
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                </motion.div>

                {/* Animated border gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(
                      ${index * 45}deg, 
                      ${index % 5 === 0 ? "#3b82f6" : 
                        index % 5 === 1 ? "#8b5cf6" : 
                        index % 5 === 2 ? "#ec4899" : 
                        index % 5 === 3 ? "#10b981" : "#f59e0b"}40,
                      transparent
                    )`,
                  }}
                />

                {/* Text content */}
                <span className="relative z-10 font-semibold text-gray-800 dark:text-white drop-shadow-sm">
                  {skill.title}
                </span>

                {/* Floating particles on hover */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 1,
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 100}%`,
                          y: `${50 + (Math.random() - 0.5) * 100}%`,
                          opacity: 0,
                          scale: [1, 1.5, 0],
                        }}
                        transition={{
                          duration: 1,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Bottom shadow */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/5 -z-10"
                animate={{
                  y: hoveredIndex === index ? 12 : 8,
                  opacity: hoveredIndex === index ? 0.3 : 0.1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </motion.ul>
      )}

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>
=======
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skills.map((skill:any, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
>>>>>>> 89fbd38c943a7592ffb81ccd386ef57453fc24f7
    </section>
  );
}
