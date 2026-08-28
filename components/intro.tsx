
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import programer from "../public/programer.png";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Profile Image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={programer}
              alt="Shreshtha Agarwal"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Hero Heading */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Shreshtha.</span>{" "}
        I&apos;m a{" "}
        <span className="font-bold">Frontend Developer</span>{" "}
        focused on{" "}
        <span className="font-bold">React & Next.js</span>. I&apos;ve been
        building web applications since{" "}
        <span className="font-bold">2020</span>, with a focus on{" "}
        <span className="italic">responsive UI, APIs, and real-world products</span>.
      </motion.h1>

      {/* Actions */}
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Contact */}
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        {/* Download CV */}
        <a
          className="group flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105"
          href="/CV.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        {/* LinkedIn */}
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
          href="https://www.linkedin.com/in/shreshtha-agarwal-211a65279/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>

        {/* GitHub */}
        <a
          className="flex cursor-pointer items-center gap-2 rounded-full borderBlack bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105"
          href="https://github.com/afkshreshtha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;

