import React from 'react';
import { motion } from 'framer-motion';
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";
import { Businessdata } from '../../data';
import Accordion from '../Accordion';
import { useSpring, animated } from 'react-spring';
import { useHover } from '../../Hooks/Hover';
var mydata = Businessdata[0];

export default function Business() {
  const [hoverRef, isHovered] = useHover();
  const titleAnimation = useSpring({
    from: {
      transform: 'translateY(-30px)',
    },
    to: [{ transform: 'translateY(15px)' }],
    config: { mass: 3, tension: 500, friction: 25 },
  });

  return (
    <>
      <div class="social"></div>
      <div id="maincontainer" className="bg-businessbackground">
        <div id="innermain" className="lg:p-12 p-2 bg-white drop-shadow-2xl">
          <div
            id="firstmain"
            className="flex justify-center items-center font-semibold"
          >
            <h1 className="text-5xl text-Heading">{mydata.heading}</h1>
          </div>

          <div id="secondmain" className={`flex w-full lg:flex-row flex-col`}>
            <div class="container">
              <div class="gallery-wrap w-screen">
                {mydata.thebox.map((element) => (
                  <motion.div
                    ref={hoverRef}
                    className={`demo item item-${element.id}`}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    {/* <Accordion title={element.heading} text={element.desc} /> */}
                    <div
                      ref={hoverRef}
                      key={element.id}
                      id="secondmaintwo "
                      // className={`z-${element.id} ${
                      //   !isHovered ? 'w-30rem relative' : '80rem'
                      // }`}
                    >
                      <div
                        id="backgroundd"
                        className="h-65vh  mx-2 mt-8 "
                        style={{
                          // backgroundImage:
                          //   'url(' +
                          //   'https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/businessback.svg' +
                          //   ')',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                        }}
                      >
                        <div id="box">
                          <div>
                            <img
                              src={element.logo}
                              alt="logo"
                              className="w-56 h-20"
                            />
                          </div>
                          <div>
                            <h1 className="text-Heading text-5xl font-sub-heading font-semibold w-4/5 leading-44px pt-6">
                              {element.heading}
                            </h1>
                          </div>
                          <div>
                            <p className="text-2xl pt-12 font-normal w-64">
                              {element.desc}
                            </p>
                          </div>

                          <div id="imagemain" className="flex justify-between">
                            <div></div>
                            <div>
                              <img src={element.logotwo} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div id="btn">
                        <button className="bg-Lightblue w-50rem h-14 ml-4">
                          {element.btn}
                        </button>
                      </div> */}
                    </div>
                  </motion.div>
                ))}
                {/* <div class="item item-1"></div>
                <div class="item item-2"></div> */}
                {/* <div class="item item-3"></div>
                <div class="item item-4"></div>
                <div class="item item-5"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
