import React from "react";

export default function Footer() {
  return (
    <>
      <div id="maincontainer" className="bg-Lightblue p-10rem">
        <div id="container" className="flex">

          <div id="one" className="w-full bg-red-600"> 
            <div id="logo">
              <img
                src="http://127.0.0.1:5500/src/assets/Images/BigRig%20Group%20Logo_TM%201.svg"
                alt=""
              />
            </div>
            <div id="email" className="text-white flex">
              <div>
                <img
                  src="http://127.0.0.1:5500/src/assets/Images/Vectoremail.svg"
                  alt=""
                  className="text-white mt-2"
                />
              </div>
              <div className="block ml-4">
                <span className="block">E-Mail Address</span>
                <span>Info@bigrigcanda.com</span>
              </div>
            </div>

            <div id="phone" className="text-white flex mt-4">
              <div>
                <img
                  src="http://127.0.0.1:5500/src/assets/Images/Vectorphone.svg"
                  alt=""
                  className="text-white mt-2"
                />
              </div>
              <div className="block ml-4">
                <span className="block">Phone Number</span>
                <span>(604) 864 3100</span>
              </div>
            </div>
            {/* <div id="phone" className="text-white">
              <span>
                <img src="" alt="" />
              </span>
              <span>Phone Number</span>
              <span>(604) 864 3100</span>
            </div> */}
          </div>

          <div id="two">
            <div className="text-white">
              <h1>Trailers & Leasing</h1>
            </div>

            <div id="ancrtrl" className="text-white">
              <a href="">Filling</a>
              <a href="">Machines</a>
              <a href="">Bottle Filling</a>
              <a href="">Series</a>
              <a href="">Package</a>
              <a href="">Machines</a>
              <a href="">Linear</a>
            </div>
          </div>

          <div id="three">
            <div className="text-white">
              <h1>Parts</h1>
            </div>

            <div id="ancrpart" className="text-white">
              <a href="">End of Line Solutions</a>
              <a href="">Food Industry Machines</a>
              <a href="">Software</a>
              <a href="">Research Solutions</a>
              <a href="">Conveyor Solutions</a>
              <a href="">Special Solutions your</a>
              <a href="">Needs</a>
            </div>
          </div>

          <div id="four">
            <div className="text-white">
              <h1>Tires & Services</h1>
            </div>

            <div id="ancrtire" className="text-white">
              <a href="">About Us</a>
              <a href="">Our Values</a>
              <a href="">Human</a>
              <a href="">Resources</a>
              <a href="">News</a>
              <a href="">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
