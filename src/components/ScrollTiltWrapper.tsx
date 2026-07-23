import React from 'react';
import { motion } from 'motion/react';

interface ScrollTiltWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const ScrollTiltWrapper: React.FC<ScrollTiltWrapperProps> = ({ children, id, className = '' }) => {
  return (
    <div id={id} className={`relative py-4 ${className}`}>
      <motion.div
        initial={{ opacity: 0.9, y: 24, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};


