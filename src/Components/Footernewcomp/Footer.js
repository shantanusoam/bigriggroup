import React from 'react';
import Navbar from '../../Components/Navbar';

export default function Footer() {
  return (
    <>
      <div
        id="maincontainer"
        className="bg-Lightblue" 
        style={{
          height: '50vh',
        }}
      >
        <div
          id="container"
          className="flex flex-row pt-16 lg:flex justify-between" 
        >
          <div
            id="one"
            className="flex-1 w-1/2 lg:block  hidden"
            style={{
              backgroundImage:
                'url(' +
                'https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/backmapfooter.svg' +
                ')',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: 'full',
              marginRight: '5rem',
            }}
          >
            <div id="logo" className="ml-36">
              <img
                src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/bigrigfooterlogo.png"
                alt="logo"
                width="200"
                href="mailto:umarkhurshid3@gmail.com"
              />
            </div>
            <div id="email" className="text-white flex ml-36 mt-12">
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
              <div className="ml-4">
                <span className="block">Phone Number</span>
                <span className="text-2xl font-bold">(604) 864 3100</span>
              </div>
            </div>

            <div id="language" className="text-white flex  ml-36">
              <div className="ml-4">
                <span>English, ਪੰਜਾਬੀ, Español, Français, हिन्दी</span>
              </div>
            </div>
          </div>

          <div id="two" className="flex-2 pr-4 w-2/12 lg:pl-0 pl-4">
            <div className="text-white ">
              <h1 className="2xl:text-footerheading text-desc font-bold w-4/5  2xl:leading-10 leading-6">
                Trailers & Leasing
              </h1>
            </div>
            <br /> 

            <div id="ancrtrl" className="text-white 2xl:leading-8 leading-6 ">
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

          <div
            id="three"
            className="flex-2 pr-4 w-2/12 "
            // className="flex-2 pr-4 lg:w-2/12 w-full"
          >
            <div className="text-white">
              <h1 className="2xl:text-footerheading text-desc font-bold  ">
                Parts
              </h1>
            </div>
            <br />

            <div id="ancrpart" className="text-white  2xl:leading-8 leading-6">
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
              <h1 className=" font-bold  2xl:text-footerheading text-desc">
                Tires & Services
              </h1>
            </div>
            <br />

            <div id="ancrtire" className="text-white 2xl:leading-8 leading-6">
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
        <Navbar />
      </div>
    </>
  );
}
