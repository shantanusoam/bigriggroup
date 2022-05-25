import React from 'react';
import arrow from '../../assets/Images/arrow.svg';
import { motion } from 'framer-motion';
import BgImage from '../../assets/Images/GroupWebsitesBackground.png';
import { GroupWebsiteComponentdata } from '../../data.js';
function GroupWebsiteComponent() {
  return (
    <>
      <div
        className=" bg-white  "
        // style={{ backgroundImage: `url(${BgImage})` }}
      >
        {GroupWebsiteComponentdata.map((data) => (
          <div className="container   w-screen  text-gray-600" key={data.id}>
            <div
              className={
                data.id % 2 !== 0
                  ? 'md:flex w-screen '
                  : 'md:flex md:flex-row-reverse w-screen flex-col-reverse'
              }
            >
              <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-info flex-1"
              >
                <div className={data.id % 2 !== 0 ? 'md:5/12 ' : 'md:5/12 '}>
                  <div className="relative">
                    <div
                      className={
                        'h-screen w-full bg-cover bg-no-repeat bg-center'
                      }
                      style={{ backgroundImage: `url(${data.imageurl})` }}
                      // src={data.imageurl}

                      loading="lazy"
                    />
                    {/* <div className="cursor-pointer absolute top-0 right-0  hover:shadow-outline drop-shadow-lg bg-white">
                      <img src={data.Logourl} width="200" />
                    </div> */}
                  </div>
                </div>
              </motion.div>
              <div className="md:6/12 flex-col flex content-center  flex-1">
                <div className="md:6/12 flex-col flex content-center justify-center  flex-1 ml-48 ">
                  <div className="flex flex-row items-center content-start mt-12 -ml-32 pl-6">
                    <motion.img
                      whileInView={{ scale: [0.5, 1] }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      alt="profile_circle"
                      //  className="overlay_circle"
                      src={data.icon}
                      width="100"
                      className="pr-8"
                    ></motion.img>

                    <div className="font-display max-w-sm text-2xl font-bold leading-tight">
                      <h2 className="xl:text-5xl text-Heading font-semibold md:text-2xl link link-underline link-underline-black pb-8">
                        {data.heading}
                      </h2>
                    </div>
                  </div>
                  {data.desc.map((data) => (
                    <div className="2xl:w-3/4 mt-12" key={data.id}>
                      <h2 className="mt-6 text-2xl text-Heading font-semibold md:text-subheading ">
                        {data.head}
                      </h2>
                      <p className="mt-2 text-Description font-desc text-desc ">
                        {data.desc1}
                      </p>
                      {data.desc2 ? (
                        <p className="mt-12 text-Description font-desc text-desc ">
                          {data.desc1}
                        </p>
                      ) : null}
                    </div>
                  ))}
                  {data.comingsoon ? (
                    <section className="centered-container">
                      <a className="link link--arrowed mt-6" href="#">
                        <div className="flex flex-row align-center justify-center">
                          <h2 className="text-2xl text-Lightblue font-semibold md:text-subheading text-center pr-4">
                            Coming soon
                          </h2>

                          <svg
                            className="arrow-icon mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                          >
                            <g
                              fill="none"
                              stroke="#2175FF"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                            >
                              <circle
                                className="arrow-icon--circle"
                                cx="16"
                                cy="16"
                                r="15.12"
                              ></circle>
                              <path
                                className="arrow-icon--arrow"
                                d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                              ></path>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </section>
                  ) : (
                    <div>
                      <button className="text-white bg-yellow-bg  font-semibold  mt-8 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow hover:shadow-yellow-shadowhover  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md ">
                        Inventory
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <InformationComponent></InformationComponent> */}
    </>
  );
}

export default GroupWebsiteComponent;
