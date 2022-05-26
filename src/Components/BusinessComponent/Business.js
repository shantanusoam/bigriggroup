import React from "react";
import businesstrailernew from "../../assets/Images/businesstrailernew.png";
import businesstruck from "../../assets/Images/businesstruck.png";
// import businesstrailernew from "../../assets/Images/businesstrailernew"; 
export default function Business() {
  return (
    <>
      <div id="maincontainer" className="bg-businessbackground">
        <div id="innermain" className="p-36 bg-white drop-shadow-2xl">
          <div id="firstmain" className="flex justify-center items-center font-semibold"> 
            <h1 className="text-5xl text-Heading">Our Business Verticals</h1>
          </div>
          
          <div id="secondmain">
            <div id="secondmaintwo">
              <div
                id="backgroundd"
                className="h-40rem w-30rem"
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
                      src={businesstrailernew}
                      alt="logo"
                      className="w-56 h-20"
                    />
                  </div>
                  <div>
                    <h1 className="text-Heading text-5xl font-sub-heading font-semibold w-4/5 leading-44px pt-6">
                      GET ON THE ROAD WITH POWERFUL ENGINE
                    </h1>
                  </div>
                  <div>
                    <p className="text-2xl pt-12 font-normal w-64">
                      Contact Us for the best trucks and trailers
                    </p>
                  </div>

                  <div id="imagemain" className="flex justify-between">
                    <div></div>
                    <div>
                      <img src={businesstruck} alt="" />
                    </div>
                  </div> 

                  {/* <div id="btn">
                      <button>Trailers & Leasing </button> 
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div id="btn" >
            <button className="bg-Lightblue w-30rem h-14">Trailers & Leasing </button>  
          </div>
        </div>
      </div>
    </>
  );
}

