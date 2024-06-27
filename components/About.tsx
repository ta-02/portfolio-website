"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
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
      <p className="mb-3">
        Back in high school, after completing my first computer science course,
        I fell in love with the field. Connecting the pieces together about how
        my favorite websites and games could be built transformed the once
        unknown world of creating applications into a visible and magical
        experience. I am eager to apply both my technical understanding of code
        and my business expertise to create apps that innovate, solve real
        problems, and hopefully give someone that "wow, I wonder how this is
        made" feeling that I first experienced.{" "}
      </p>
      <p className="mb-3">
        I am excited to learn new technologies that push that boundries of what
        is possible and how it is possible. My core stack includes{" "}
        <span className="font-medium">
          Next.js, React, Drizzle, and Postgres
        </span>
        .{" "}
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, you will probably
        catch me configuring Neovim or my dotfiles, rock climbing, listening to
        music, or hunting for the next steal on vintage clothes.
      </p>
    </motion.section>
  );
};

export default About;
