"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import { BsEye, BsGithub } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

export default function Project({ 
  title, 
  codeLink, 
  liveLink, 
  description, 
  tags, 
  features,
  image 
}: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [showFeatures, setShowFeatures] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 max-w-[42rem] border border-black/5 rounded-xl overflow-hidden sm:pr-8 relative hover:shadow-xl transition-all duration-300 sm:group-even:pl-8 dark:from-white/5 dark:to-white/10 dark:hover:from-white/10 dark:hover:to-white/15">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          {/* Title with gradient */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="mt-3 leading-relaxed text-gray-600 dark:text-gray-300 text-sm">
            {description}
          </p>

          {/* Features Toggle Button */}
          {features && features.length > 0 && (
            <button
              onClick={() => setShowFeatures(!showFeatures)}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group/btn"
            >
              <HiSparkles className="text-yellow-500 group-hover/btn:rotate-12 transition-transform" />
              {showFeatures ? "Hide" : "View"} Features
            </button>
          )}

          {/* Features List */}
          {showFeatures && features && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2 text-sm"
            >
              {features.map((feature: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                >
                  <span className="text-green-500 mt-1">✓</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {/* Action Buttons */}
          <div className="mt-4 mb-4 flex gap-3">
            {codeLink && (
              <a
                className="bg-white p-3 text-gray-700 hover:text-gray-950 hover:bg-gray-100 flex items-center gap-2 rounded-full border border-black/10 focus:scale-110 hover:scale-110 active:scale-105 transition-all shadow-sm dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View code on GitHub"
              >
                <BsGithub className="text-lg" />
              </a>
            )}
            {liveLink && (
              <a
                className="bg-gradient-to-r  from-blue-500 to-blue-600 p-3 text-white hover:from-blue-600 hover:to-blue-700 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all shadow-md"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
              >
                <BsEye className="text-lg" />
              </a>
            )}
          </div>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <ul className="flex flex-wrap mt-5 gap-2 sm:mt-auto">
              {tags.map((tag: string, index: number) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.65rem] uppercase tracking-wider text-white rounded-full dark:bg-white/10 dark:text-white/80 backdrop-blur-sm"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project Image */}
        {image && (
          <Image
            src={urlFor(image).url()}
            width={1000}
            height={1000}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-lg shadow-2xl border border-black/5
            transition-all duration-500
            group-hover:scale-[1.06]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:shadow-3xl
            
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            
            group-even:right-[initial] group-even:-left-40
            dark:border-white/10"
          />
        )}
      </section>
    </motion.div>
  );
}
