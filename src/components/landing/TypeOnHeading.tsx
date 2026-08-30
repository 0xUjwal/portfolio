'use client';

import React, { useEffect, useState } from 'react';

interface TypeOnHeadingProps {
  text: string;
  className?: string;
}

export default function TypeOnHeading({ text, className }: TypeOnHeadingProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const isComplete = visibleCount >= text.length;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setVisibleCount(text.length);
      return;
    }

    setVisibleCount(0);
    let current = 0;

    const intervalId = window.setInterval(() => {
      current += 1;
      setVisibleCount(current);

      if (current >= text.length) {
        window.clearInterval(intervalId);
      }
    }, 70);

    return () => window.clearInterval(intervalId);
  }, [text]);

  return (
    <h1 className={`relative ${className ?? ''}`}>
      <span className="sr-only">{text}</span>
      <span className="invisible whitespace-nowrap" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0 whitespace-nowrap" aria-hidden="true">
        {text.slice(0, visibleCount)}
        {!isComplete && <span className="type-caret" />}
      </span>
    </h1>
  );
}
