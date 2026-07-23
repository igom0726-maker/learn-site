import React, { useState, useEffect, useRef } from 'react';

interface AnimatedValueProps {
  value: string | number;
  className?: string;
  duration?: number;
}

/**
 * Helper that parses strings like "3위", "4건", "20명+", "+34%", "16,616회", "85%"
 * into prefix, target numeric value, and suffix.
 */
function parseNumericValue(val: string | number): {
  prefix: string;
  targetNumber: number;
  suffix: string;
  hasComma: boolean;
  decimals: number;
} {
  if (typeof val === 'number') {
    return {
      prefix: '',
      targetNumber: val,
      suffix: '',
      hasComma: false,
      decimals: Number.isInteger(val) ? 0 : 1,
    };
  }

  const str = String(val).trim();
  // Match optional leading non-digits, mandatory number (with optional commas/decimals), and trailing non-digits
  const match = str.match(/^([^\d]*?)([\d,]+(?:\.\d+)?)(.*)$/);

  if (!match) {
    return {
      prefix: '',
      targetNumber: 0,
      suffix: str,
      hasComma: false,
      decimals: 0,
    };
  }

  const prefix = match[1] || '';
  const numStr = match[2];
  const suffix = match[3] || '';

  const hasComma = numStr.includes(',');
  const cleanNumStr = numStr.replace(/,/g, '');
  const targetNumber = parseFloat(cleanNumStr) || 0;

  const decimalMatch = cleanNumStr.split('.');
  const decimals = decimalMatch.length > 1 ? decimalMatch[1].length : 0;

  return {
    prefix,
    targetNumber,
    suffix,
    hasComma,
    decimals,
  };
}

export const AnimatedValue: React.FC<AnimatedValueProps> = ({
  value,
  className = '',
  duration = 1800,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [displayNumber, setDisplayNumber] = useState(1);
  const [hasTriggered, setHasTriggered] = useState(false);

  const { prefix, targetNumber, suffix, hasComma, decimals } = parseNumericValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasTriggered || targetNumber <= 0) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth deceleration curve (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      // Start from 1 up to targetNumber
      const currentVal = 1 + (targetNumber - 1) * easeProgress;
      setDisplayNumber(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayNumber(targetNumber);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasTriggered, targetNumber, duration]);

  if (targetNumber === 0 && String(value).trim().length > 0) {
    return <span className={className}>{String(value)}</span>;
  }

  const formattedNum = hasTriggered
    ? decimals > 0
      ? displayNumber.toFixed(decimals)
      : hasComma
      ? Math.floor(displayNumber).toLocaleString()
      : Math.floor(displayNumber).toString()
    : '1';

  return (
    <span ref={containerRef} className={`tabular-nums inline-block transition-transform ${className}`}>
      {prefix}
      {formattedNum}
      {suffix}
    </span>
  );
};
