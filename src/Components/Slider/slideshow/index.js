import React from 'react';
import { useHover } from '../../../Hooks/Hover';
import { BrandCompnentBrands } from '../../../data';
// const colors = [
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
//   '#0088FE',
//   '#00C49F',
//   '#FFBB28',
// ];
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
            prevIndex === BrandCompnentBrands.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );

      return () => {
        resetTimeout();
      };
    }
  }, [index, isHovered]);

  return (
    <>
      <div
        id="heading"
        className="text-36px font-semibold text-Heading flex justify-center items-center pb-16 mt-16 mb-10"
      >
        <h1>Our Brands</h1>
      </div>

      <div
        className=" slideshow    snap-x flex space-x-5 overflow-x-auto"
        ref={hoverRef}
      >
        <div
          className="slideshowSlider 2xl:ml-40 lg:ml-32 transition ease-in-out delay-150 mb-20"
          style={{
            transform: `translate3d(${-index * 33.33333333333333333}%, 0, 0)`,
          }}
        >
          {BrandCompnentBrands.map((brand, index) => (
            <div
              className="slide  w-1/3  bg-fit bg-no-repeat bg-center grayscale hover:grayscale-0 hover:scale-125 transition-all flex items-center content-center justify-center p-8"
              key={index}
              // style={{ backgroundImage: `url(${brand.imageurl})` }}
            >
              <img
                src={brand.imageurl}
                className="self-center slide justify-self-center justify-items-center"
              ></img>
            </div>
          ))}
        </div>

        {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx / 3}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx / 3);
            }}
          ></div>
        ))}
      </div> */}
      </div>
    </>
  );
}

// flex space-x-5 overflow-x-auto snap-x
// w-80 flex-shrink-0 snap-center h-48 bg-gray-800
