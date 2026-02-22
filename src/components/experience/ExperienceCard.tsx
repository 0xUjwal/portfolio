'use client';

import { type Experience } from '@/config/Experience';
import Image from 'next/image';
import React, { useState } from 'react';

import Skill from '../common/Skill';

interface ExperienceCardProps {
  experience: Experience;
  defaultExpanded?: boolean;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({
  experience,
  defaultExpanded = false,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="flex flex-col gap-4">
      {/* Company Header */}
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Image
              src={experience.image}
              alt={experience.company}
              width={100}
              height={100}
              className="size-12 rounded-md transition-opacity hover:opacity-80"
            />
          </a>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">{experience.company}</h3>
              {experience.isCurrent && (
                <div className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                  <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
                  Working
                </div>
              )}
            </div>
            <p>{experience.position}</p>
          </div>
        </div>
        {/* Right Side */}
        <div className="text-secondary flex flex-col md:text-right">
          <p>
            {experience.startDate} -{' '}
            {experience.isCurrent ? 'Present' : experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-md mt-4 mb-2 font-semibold">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((technology, techIndex: number) => (
            <Skill
              key={techIndex}
              name={technology.name}
              href={technology.href}
            >
              {technology.icon}
            </Skill>
          ))}
        </div>
      </div>

      {/* View More / Description */}
      {experience.description.length > 0 && (
        <div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-secondary hover:text-primary cursor-pointer text-sm font-medium transition-colors"
          >
            {expanded ? '▾ View Less' : '▸ View More'}
          </button>
          {expanded && (
            <div className="text-secondary mt-2 flex flex-col gap-1">
              {experience.description.map(
                (description: string, descIndex: number) => (
                  <p
                    key={descIndex}
                    dangerouslySetInnerHTML={{
                      __html: `• ${parseDescription(description)}`,
                    }}
                  />
                ),
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
