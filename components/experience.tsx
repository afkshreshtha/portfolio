"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { client, urlFor } from "@/lib/client";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => setExperiences(data));
  }, []);
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiences.map((item:any, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.5)",
                textAlign: "left",
                padding: "1.3rem 4rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={<Image alt="" width={100} height={100} src={`${urlFor(item.icon.asset._ref)}`} />}
              iconStyle={{
                background: "white",
                fontSize: "1rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
