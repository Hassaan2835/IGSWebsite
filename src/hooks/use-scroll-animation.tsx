"use client";

import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        const handleScroll = () => {
          if (!ref.current) return;
          const { top, height } = ref.current.getBoundingClientRect();
          const screenHeight = window.innerHeight;
          // Calculate progress from when the top of the element hits the bottom of the screen
          // until the top of the element is halfway up the screen.
          const start = screenHeight;
          const end = screenHeight / 2;
          const currentProgress = (start - top) / (start - end);
          setProgress(Math.max(0, Math.min(1, currentProgress)));
        };

        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
          handleScroll(); // Initial check
        } else {
          window.removeEventListener('scroll', handleScroll);
          setProgress(0); // Reset when not visible
        }

        return () => window.removeEventListener('scroll', handleScroll);
      },
      {
        ...options,
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Trigger for every 1% of visibility change
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, isVisible, progress };
};
