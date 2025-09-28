"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation: 'slideInFromLeft' | 'slideInFromRight' | 'fadeIn';
}

export function AnimatedSection({ children, animation, className, ...props }: AnimatedSectionProps) {
  const { ref, progress } = useScrollAnimation();

  const getStyle = (): React.CSSProperties => {
    switch (animation) {
      case 'slideInFromLeft':
        return {
          transform: `translateX(${-100 + progress * 100}%)`,
          opacity: progress,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        };
      case 'slideInFromRight':
        return {
          transform: `translateX(${100 - progress * 100}%)`,
          opacity: progress,
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
        };
      case 'fadeIn':
        return {
          opacity: progress,
          transition: 'opacity 0.2s ease-in'
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={ref}
      style={getStyle()}
      className={cn(
        'transition-all duration-500 ease-out',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
