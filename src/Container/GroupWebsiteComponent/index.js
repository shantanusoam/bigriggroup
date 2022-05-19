import React from 'react';
import {
  ImageComponent,
  InformationComponent,
} from './GroupWebsiteComponent.js';
import TrailersLeasing from '../../assets/Images/TrailersLeasing.png';
import TrailersLeasingLogo from '../../assets/Images/TrailersLeasingLogo.png';
import TrailersLeasingIcon from '../../assets/Images/TrailerLeasingIcon.svg';
import BgImage from '../../assets/Images/GroupWebsitesBackground.png';
import { GroupWebsiteComponentdata } from '../../data.js';
function GroupWebsiteComponent() {
  return (
    <>
      <div
        className="py-16 bg-white "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {GroupWebsiteComponentdata.map((data) => (
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 my-11">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
              {data.id % 2 !== 0 ? (
                <div className="md:5/12 lg:w-5/12">
                  <div className="relative">
                    <img
                      className={'w-full'}
                      src={data.imageurl}
                      alt="image"
                      loading="lazy"
                      width=""
                      height=""
                    />
                    <div className="cursor-pointer absolute top-0 right-0  hover:shadow-outline drop-shadow-lg bg-white">
                      <img src={data.Logourl} width="200" />
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="md:7/12 lg:w-6/12 items-start ml-28">
                <div className="flex flex-row items-center mt-12 -ml-32 pl-6">
                  <img src={data.icon} width="100" className="pr-8"></img>
                  {/* <a
                    href="#"
                    
                  >
                    <span className="link link-underline link-underline-black text-black">
                      Hover to See the Effect
                    </span>
                  </a> */}
                  <div className="font-display max-w-sm text-2xl font-bold leading-tight">
                    <h2 className="text-3xl text-Heading font-semibold md:text-5xl link link-underline link-underline-black pb-8">
                      {data.heading}
                    </h2>
                  </div>
                  {/* <h1 classNameName="text-center text-black  2xl:text-5xl text-4xl pb-0  2xl:mt-28 xl:mt-28 mt-8 md:pb-3">
                    Trailers & Leasing
                    <div classNameName="w-40 h-2  hover:w-10 transition duration-700 ease-in-out delay-150"></div>
                  </h1> */}
                </div>
                {data.desc.map((data) => (
                  <div className="lg:w-3/4 mt-12">
                    <h2 className="mt-6 text-2xl text-Heading font-semibold md:text-subheading ">
                      {data.head}
                    </h2>
                    <p className="mt-2 text-Description font-desc text-desc ">
                      {data.desc1}
                    </p>
                  </div>
                ))}

                {/* // <div className="lg:w-3/4">
                //   <h2 className="mt-6 text-1xl text-gray-900 font-semibold md:text-2xl ">
                //     Trailers
                //   </h2>
                //   <p className="mt-2 text-gray-600">
                //     {' '}
                //     Designed To Reduce Your Cost Of Ownership, Our Trucks Improved
                //     Fuel Economy, Enhanced Safety Features And Lead The Way In
                //     Technological Advancements And Driver Comfort.
                //   </p>
                // </div> */}
                <div className>
                  <button className="text-white bg-yellow p-4 font-semibold  mt-8 rounded-md w-6/12 text-2xl flex items-center justify-center">
                    Inventory
                  </button>
                </div>
              </div>
              {data.id % 2 === 0 ? (
                <div className="md:5/12 lg:w-5/12">
                  <div className="relative">
                    <img
                      className={'w-full'}
                      src={data.imageurl}
                      alt="image"
                      loading="lazy"
                      width=""
                      height=""
                    />
                    <div className="cursor-pointer absolute top-0 right-0  hover:shadow-outline drop-shadow-lg bg-white">
                      <img src={data.Logourl} width="200" />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      {/* <ImageComponent className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row ">
        <div className="flex justify-center xl:w-1/2">
          <img
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover "
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </div>
      </ImageComponent> */}
      <InformationComponent></InformationComponent>
    </>
  );
}

export default GroupWebsiteComponent;
