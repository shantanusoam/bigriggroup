import React from 'react';
import { useHover } from '../../../Hooks/Hover';
const colors = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#0088FE',
  '#00C49F',
  '#FFBB28',
];
const delay = 1500;

export function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [hoverRef, isHovered] = useHover();
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    console.log('useEffect');
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }
  }, [index, isHovered]);

  return (
    <div className="slideshow" ref={hoverRef}>
      <div
        className="slideshowSlider "
        style={{ transform: `translate3d(${-index * 33.33}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}></div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx / 3}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx / 3);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

// flex space-x-5 overflow-x-auto snap-x
// w-80 flex-shrink-0 snap-center h-48 bg-gray-800
