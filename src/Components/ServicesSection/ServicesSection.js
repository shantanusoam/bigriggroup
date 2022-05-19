import React from 'react';
import './data.js';

export default function ServicesSection() {
  return (
    <>
      <div
        id="maincontainer"
        className="bg-Lightblue flex flex-col justify-between md:flex-row"
      >
        <div id="firstmain" className="mt-48  xl:ml-60 ml-10 ">
          <div>
            <h1 className="text-heading text-white font-heading ">
              Our Services
            </h1>
            <p className="text-desc font-desc text-white w-2/3  ">
              Kal Tires has 9 distribution centers, 4 service centers and
              nationwide 24/7 emergency road service. Exclusive with major tire
              manufactures such as Goodyear, Cooper, BKT, Michelin, Yokohama,
              Double Coin, Pirelli and Hankook. We offer national account
              billing for Goodyear, Cooper, Michelin, Yokohama and Hankook
              products.{' '}
            </p>
            <button className="text-white bg-yellow rounded p-4 w-44 mt-8">
              CONTACT US
            </button>
          </div>
        </div>

        <div id="Secondmain" className=" mt-24 pb-8 xl:ml-0 ml-10 ">
          <div id="innermain" className="flex justify-between mr-60">
            <div className="mr-12 mt-16">
              <img
                className="mr-10"
                src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/truck1white.svg"
                alt=""
              />
            </div>

            <div>
              <h1 className="text-white text-subheading font-sub-heading">
                Trailers & Leasing
              </h1>
              <p className="text-desc font-desc text-white w-96 mt-4">
                As a Vanguard authorized dealer, we offer a variety of dry vans
                and refrigerated trailers and flatsbed and chessie.
              </p>
            </div>
          </div>
          <div id="innermain" className="flex justify-between mr-60 mt-16">
            <div className="mr-12 mt-16">
              <img
                className="mr-10"
                src="http://127.0.0.1:5500/src/assets/Images/white2.svg"
                alt=""
              />
            </div>

            <div>
              <h1 className="text-white text-subheading font-sub-heading">
                Partz
              </h1>
              <p className="text-desc font-desc text-white w-96 mt-4">
                Designed To Reduce Your Cost Of Ownership, Our Trucks Improved
                Fuel Economy, Enhanced Safety Features And Lead The Way In
                Technological Advancements And Driver Comfort.
              </p>
            </div>
          </div>
          <div id="innermain" className="flex justify-between mr-60 mt-16">
            <div className="mr-12 mt-16">
              <img
                className="mr-10   "
                src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/white3.svg"
                alt=""
              />
            </div>

            <div>
              <h1 className="text-white text-subheading font-sub-heading">
                Tires & Services
              </h1>
              <p className="text-desc font-desc text-white w-96 mt-4 mb-16">
                As a Vanguard authorized dealer, we offer a variety of dry vans
                and refrigerated trailers and flatsbed and chessie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
