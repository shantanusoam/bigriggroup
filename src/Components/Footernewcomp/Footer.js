import React from "react";

export default function Footer() {
  return (
    <>
      <div id="maincontainer" className="bg-Lightblue p-24">
        <div id="container" className="flex ">
           
          <div id="one" className="w-full ml-32 ">
            <div id="logo">
              <img
                src="http://127.0.0.1:5500/src/assets/Images/BigRig%20Group%20Logo_TM%201.svg"
                alt=""
                href="mailto:umarkhurshid3@gmail.com"
                
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
                <span className="text-2xl font-bold">Info@bigrigcanda.com</span>
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

          <div id="two" className="ml-12">
            <div className="text-white w-40">
              <h1 className="text-footerheading leading-10 font-bold">Trailers & Leasing</h1>
            </div> 
             <br />

            <div id="ancrtrl" className="text-white leading-8">
              <a href="" className="block">Filling</a> 
              <a href="" className="block">Machines</a>
              <a href="" className="block">Bottle Filling</a>
              <a href="" className="block">Series</a>
              <a href="" className="block">Package</a>
              <a href="" className="block">Machines</a>
              <a href="" className="block">Linear</a>
            </div>
          </div>

          <div id="three" className="pl-32">
            <div className="text-white">
              <h1 className="text-footerheading leading-10 font-bold">Parts</h1>
            </div>
            <br />

            <div id="ancrpart" className="text-white mr-44 leading-8">
              <div className="w-40"><a href="">End of Line Solutions</a></div>
              <div className="w-40"><a href="">Food Industry Machines</a></div>
              <div className="w-40"><a href="">Software</a></div>
              <div className="w-40"><a href="">Research Solutions</a></div>
              <div className="w-40"><a href="">Conveyor Solutions</a></div>
              <div className="w-40"><a href="">Special Solutions your</a></div>
              <div className="w-40"><a href="">Needs</a></div> 
            </div>
          </div>

          <div id="four">
            <div className="text-white">
              <h1 className="text-footerheading leading-10 font-bold">Tires & Services</h1> 
            </div>
            <br />

            <div id="ancrtire" className="text-white leading-8">
              <div><a href="">About Us</a></div>
              <div className="w-20"><a href="">Our Values</a></div>
              <div><a href="">Human</a></div>
              <div><a href="">Resources</a></div>
              <div><a href="">News</a></div>
              <div><a href="">Contact</a></div> 

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
