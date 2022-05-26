import React from "react";
import Navbar from "../../Components/Navbar";

export default function Footer() {
  return (
    <>
      <div
        id="maincontainer"
        className="bg-Lightblue "
        style={{
          height: "50vh",
        }}
      >
        <div id="container" className="flex flex-row pt-16"> 
          <div
            id="one"
            className="flex-1 w-1/2"
            style={{
              backgroundImage:
                "url(" +
                "http://127.0.0.1:5500/src/assets/Images/1606.m00.i125.n007.S.c12%201.svg" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "full",
              marginRight: "5rem",
            }}
          >
            <div id="logo" className="ml-36">
              <img
                src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/BigRig%20Group%20Logo_TM%201.svg"
                alt=""
                href="mailto:umarkhurshid3@gmail.com"
              />
            </div>
            <div id="email" className="text-white flex ml-36">  
              <div>
                <img
                  src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/Vectoremail.svg"
                  alt=""
                  className="text-white mt-2 "
                />
              </div>
              <div className="block ml-4">
                <span className="block">E-Mail Address</span>
                <span className="text-2xl font-bold">Info@bigrigcanda.com</span>
              </div>
            </div>

            <div id="phone" className="text-white flex mt-4 ml-36">
              <div>
                <img
                  src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/Vectorphone.svg"
                  alt=""
                  className="text-white mt-2"
                />
              </div>
              <div className="block ml-4">
                <span className="block">Phone Number</span>
                <span className="text-2xl font-bold">(604) 864 3100</span>
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

          <div id="two" className="flex-2 pr-4 w-2/12">
            <div className="text-white ">
              <h1 className="text-footerheading  font-bold w-4/5 leading-10">
                Trailers & Leasing
              </h1>
            </div>
            <br />

            <div id="ancrtrl" className="text-white leading-8 ">
              <a href="" className="block">
                Filling
              </a>
              <a href="" className="block">
                Machines
              </a>
              <a href="" className="block">
                Bottle Filling
              </a>
              <a href="" className="block">
                Series
              </a>
              <a href="" className="block">
                Package
              </a>
              <a href="" className="block">
                Machines
              </a>
              <a href="" className="block">
                Linear
              </a>
            </div>
          </div>

          <div id="three" className="flex-2 pr-4 w-2/12">
            <div className="text-white">
              <h1 className="text-footerheading  font-bold  ">Parts</h1>
            </div>
            <br />

            <div id="ancrpart" className="text-white  leading-8">
              <div>
                <a href="">End of Line Solutions</a>
              </div>
              <div>
                <a href="">Food Industry Machines</a>
              </div>
              <div>
                <a href="">Software</a>
              </div>
              <div>
                <a href="">Research Solutions</a>
              </div>
              <div>
                <a href="">Conveyor Solutions</a>
              </div>
              <div>
                <a href="">Special Solutions your</a>
              </div>
              <div>
                <a href="">Needs</a>
              </div>
            </div>
          </div>

          <div id="four" className="flex-2 w-2/12">
            <div className="text-white">
              <h1 className="text-footerheading  font-bold  ">
                Tires & Services
              </h1>
            </div>
            <br />

            <div id="ancrtire" className="text-white leading-8">
              <div>
                <a href="">About Us</a>
              </div>
              <div>
                <a href="">Our Values</a>
              </div>
              <div>
                <a href="">Human</a>
              </div>
              <div>
                <a href="">Resources</a>
              </div>
              <div>
                <a href="">News</a>
              </div>
              <div>
                <a href="">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="secondmain">
        <Navbar/>
      </div>
    </>
  );
}
