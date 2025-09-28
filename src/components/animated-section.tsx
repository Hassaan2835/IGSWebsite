"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation: 'slideInFromLeft' | 'slideInFromRight' | 'fadeIn';
}

export function AnimatedSection({ children, animation, className, ...props }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const animationClasses = {
    slideInFromLeft: 'slide-in-from-left',
    slideInFromRight: 'slide-in-from-right',
    fadeIn: 'fade-in',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-500 ease-out',
        animationClasses[animation],
        { 'visible': isVisible },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
