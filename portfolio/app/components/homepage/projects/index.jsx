"use client";

import Image from "next/image";
import Blog from "@/public/image/Blog.png";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./card";
import Link from "next/link";

function ProjectSection() {
  return (
    <div id="projects">
      <CardContainer className="inter-var">
        <CardBody className="bg-[#0d1224] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-white dark:text-white"
          >
            Blog Website
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={Blog.src}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="mt-20">
            <CardItem
              translateZ={20}
              as={Link}
              href="https://munkherdene.vercel.app/"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Visit now →
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
export default ProjectSection;
