import React from "react";
import { AboutusSec } from "../../data";

export default function Abouthome() {
  const aboutdata = AboutusSec[0];
  return (
    <>
      <div id="maincontainer" className="h- aboutusheight 2xl:p-36">
        <div id="innermaincontainer">
          <div id="firstmain">
            <h1 className="text-5xl text-Heading  p-8 font-semibold flex justify-center items-center">
              {aboutdata.headingmain}
            </h1>
            <p className="text-2xl text-Description   pt-2 leading-6 flex justify-center items-center 2xl:mx-80 lg:mx-20  mx-6">
             {aboutdata.desc} 
             <br /> <br />
             {aboutdata.descOne} 
            </p>
          </div>

          <div
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
          </div>
        </div>
      </div>
    </>
  );
}

