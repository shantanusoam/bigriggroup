import React from "react";
// import businesstrailernew from "../../assets/Images/businesstrailernew.png";
// import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew";     
import { Businessdata } from "../../data";
var mydata = Businessdata[0]

export default function Business() {
  return (
    <>
      <div id="maincontainer" className="bg-businessbackground">
        <div id="innermain" className="p-36 bg-white drop-shadow-2xl"> 
          <div
            id="firstmain"
            className="flex justify-center items-center font-semibold" 
          >
            <h1 className="text-5xl text-Heading">{mydata.heading}</h1>  
          </div>

          <div id="secondmain" className="flex flex-row"> 
            {mydata.thebox.map((element) => (
              <div id="secondmaintwo">
                <div
                  id="backgroundd"
                  className="h-65vh  mx-2 mt-8"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/businessback.svg" +
                      ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    
                  }}
                >
                  <div id="box" className="ml-12">
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
                <div id="btn">
                  <button className="bg-Lightblue w-50rem h-14 ml-4">
                    {element.btn} 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

