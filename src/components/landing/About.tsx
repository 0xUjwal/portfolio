import { about, mySkills } from '@/config/About';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

export default function About() {
  return (
    <Container id="about" className="mt-20">
      <SectionHeading subHeading="About" heading="Me" />
      {/* About me */}
      <div className="mt-8 flex flex-col items-stretch gap-6 md:flex-row">
        <div className="flex shrink-0 flex-col">
          <Image
            src="/assets/img.png"
            alt="About"
            width={240}
            height={240}
            className="border-secondary size-60 rounded-md border-2 bg-blue-300 dark:bg-yellow-300"
          />
          <a
            href="/contact"
            className="border-secondary bg-secondary/10 mt-3 flex w-60 flex-1 items-center justify-center gap-2 rounded-md border-2 px-4 py-3 transition-opacity hover:opacity-80"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
            <span className="text-sm font-medium">Get in touch</span>
          </a>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold">{about.name}</h3>
          <p className="text-secondary mt-4">{about.description}</p>
          <p className="text-secondary mt-8 font-bold">Skills</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {mySkills.map((skill) => (
              <Tooltip key={skill.key}>
                <TooltipTrigger asChild>
                  <div className="size-6 hover:cursor-pointer">{skill}</div>
                </TooltipTrigger>
                <TooltipContent>{skill.key}</TooltipContent>
              </Tooltip>
            ))}
          </div>
          <p className="text-secondary mt-8 font-bold">Education</p>
          <div className="mt-2 flex items-center gap-3">
            <Image
              src="/assets/DSCE.png"
              alt="DSCE"
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-md"
            />
            <div>
              <p className="font-medium">
                Information Science &amp; Engineering
              </p>
              <p className="text-secondary text-sm">
                Dayananda Sagar College of Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
