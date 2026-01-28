"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { client, urlFor } from "@/lib/client";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiLocationMarker, HiCalendar } from "react-icons/hi";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "experience"] | order(date desc)';

    client
      .fetch(query)
      .then((data) => setExperiences(data))
      .catch((error) => console.error("Error fetching experiences:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>

      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-[300px] gap-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            <div className="absolute top-0 left-0 animate-ping rounded-full h-16 w-16 border-4 border-purple-300 opacity-20"></div>
          </div>
          <p className="text-gray-500 dark:text-gray-400 animate-pulse">
            Loading experiences...
          </p>
        </div>
      ) : experiences.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 rounded-2xl p-12 text-center"
        >
          <p className="text-lg">No experiences added yet.</p>
        </motion.div>
      ) : (
        <VerticalTimeline lineColor="#e5e7eb">
          {experiences.map((item: any, index) => (
            <React.Fragment key={item._id || index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                  border: "none",
                  textAlign: "left",
                  padding: "2rem 2rem",
                  borderRadius: "1rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.5rem solid #ffffff",
                }}
                date={item.date}
                dateClassName="mx-4 font-semibold text-gray-600 dark:text-gray-400"
                icon={
                  <div className="flex items-center justify-center w-full h-full overflow-hidden rounded-full p-2 bg-white">
                    <Image
                      alt={item.title}
                      width={100}
                      height={100}
                      src={urlFor(item.icon).url()}
                      className="object-contain w-full h-full"
                    />
                  </div>
                }
                iconStyle={{
                  background: "linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)",
                  fontSize: "1.5rem",
                  border: "4px solid #e5e7eb",
                  boxShadow: "0 0 0 4px #ffffff, 0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-3 text-gray-600 dark:text-gray-400">
                    <HiLocationMarker className="text-red-500 flex-shrink-0" />
                    <p className="font-medium text-sm">{item.location}</p>
                  </div>

                  <div className="sm:hidden flex items-center gap-2 mb-3 px-3 py-1 bg-blue-50 rounded-full w-fit">
                    <HiCalendar className="text-blue-500 text-sm" />
                    <p className="text-sm font-medium text-blue-700">
                      {item.date}
                    </p>
                  </div>

                  <p className="!mt-3 !font-normal text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      )}

      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
