import React from 'react';
import { AboutusSec } from '../../data';

export default function Abouthome() {
  const aboutdata = AboutusSec[0];
  return (
    <>
      <div id="mainheight">
        <div
          id="abouthomeimg"
          className="h-medium-height"
          style={{
            backgroundImage:
              'url(' +
              'https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/abouthomeimage.svg' +
              ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div id="maincontainer ">
            <div id="innermaincontainer" className="">
              <div id="backimage">
                <div id="firstmain">
                  <div className="flex justify-center items-center ">
                    <h1 className="text-5xl text-Heading w-2/12 mt-24 mb-6 text-center   p-2 font-bold  link link-underline link-underline-black">
                      {aboutdata.headingmain}
                    </h1>
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="text-2xl text-Description w-2/4 tracking-wide font-semibold leading-10  flex justify-center items-center   ">
                      {aboutdata.desc}
                      {/* <br /> <br />
                  {aboutdata.descOne} */}
                    </p>
                  </div>

                  <div
                    id="btn"
                    className="flex justify-center itesm-center mt-16"
                  >
                    <button className="  text-white bg-Lightblue  font-bold  rounded-md shadow-sm hover:shadow-md shadow-blue-shadow hover:shadow-blue-shadowhover  p-4 w-1/6  2xl:text-2xl lg:text-md ">
                      See more
                    </button>
                  </div>
                </div>

                {/* <div
            id="secondmain"
            className="flex lg:flex-row flex-col justify-center items-center mt-8 "
          >
            {aboutdata.aboutimg.map((element) => (
              <div id="logo" key={element.id}>
                <img
                  className="mx-2"
                  src={element.logo}
                  alt={element.heading} 
                />
              </div>
            ))}
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
