"use client";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { client } from "@/lib/client";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  const [projects, setProjects] = useState([]);

useEffect(() => {
  const query = '*[_type == "project"]';

  client.fetch(query)
    .then((data) => {
      console.log('Fetched projects:', data);
      console.log('Count:', data.length);
      setProjects(data);
    })
    .catch((error) => {
      console.error('Sanity fetch error:', error);
    });
}, []);

  console.log(projects);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projects.map((project: object, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
