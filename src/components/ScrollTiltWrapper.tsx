import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ScrollTiltWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const ScrollTiltWrapper: React.FC<ScrollTiltWrapperProps> = ({ children, id, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // 3D vertical page flip effect (rotateX: flips into view from 60deg to 0deg to -60deg)
  const rawRotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [65, 0, 0, -65]);
  const rawScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.85, 1, 1, 0.85]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.2, 1, 1, 0.2]);
  const rawY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [80, 0, 0, -80]);

  // Spring animation physics for snappy, smooth page flip
  const springConfig = { stiffness: 180, damping: 22, mass: 0.5 };

  const rotateX = useSpring(rawRotateX, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const y = useSpring(rawY, springConfig);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative overflow-visible py-2 ${className}`}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: 'preserve-3d',
          transformOrigin: '50% 0%',
          backfaceVisibility: 'hidden',
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};


