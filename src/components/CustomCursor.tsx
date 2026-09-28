import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop mice
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || prefersReducedMotion) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable or custom element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
      setIsPointer(!!interactive);

      const customTextElem = target.closest('[data-cursor]') as HTMLElement | null;
      if (customTextElem) {
        setCursorText(customTextElem.getAttribute('data-cursor') || '');
      } else {
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out hidden lg:block"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {cursorText ? (
        <div className="relative -top-4 -left-4 px-2 py-0.5 bg-[#FF5500] text-white font-mono text-[9px] font-bold tracking-widest uppercase shadow-md flex items-center space-x-1 whitespace-nowrap">
          <span>{cursorText}</span>
        </div>
      ) : (
        <div
          className={`-top-2 -left-2 rounded-full border transition-all duration-150 ${
            isPointer
              ? 'w-7 h-7 -top-3.5 -left-3.5 border-[#FF5500] bg-[#FF5500]/20 scale-125'
              : 'w-4 h-4 -top-2 -left-2 border-white/60 bg-white/20'
          }`}
        />
      )}
    </div>
  );
};
