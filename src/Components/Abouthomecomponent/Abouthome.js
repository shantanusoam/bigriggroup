import React from "react";
import { AboutusSec } from "../../data";

export default function Abouthome() {
  const aboutdata = AboutusSec[0];
  return (
    <>
      <div id="abouthomeimg" style={{
        backgroundImage: "url(" + "http://127.0.0.1:5500/src/assets/Images/abouthomeimage.svg" + ")",
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat', 
        
      }}>
        <div id="maincontainer" className="h- aboutusheight  ">
          <div id="innermaincontainer">
            <div id="backimage">
              <div id="firstmain" className="pb-96">
                <h1 className="text-5xl text-Heading   p-8 font-semibold flex justify-center items-center">
                  {aboutdata.headingmain}
                </h1>
                <p className="text-2xl text-Description   pt-2 leading-6 flex justify-center items-center 2xl:mx-80 lg:mx-20  mx-6">
                  {aboutdata.desc}
                  <br /> <br />
                  {aboutdata.descOne}
                </p>
                <div id="btn" className="flex justify-center itesm-center">
                  <button className="  text-white bg-Lightblue  font-semibold  mt-8 rounded-md shadow-sm hover:shadow-md shadow-blue-shadow hover:shadow-blue-shadowhover  2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md ">
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
    </>
  );
}

