"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/site-data";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/atoms/section-heading";

const fadeInVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView({
    section: "skills",
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="sectionEndMargin max-w-[53rem] scroll-mt-32 text-center"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-stone-800">
        {skills.map((skill, index) => (
          <motion.li
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index}
            className="rounded-xl border border-black/[0.3] bg-white px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}