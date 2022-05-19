import React from "react";
import './Fleight.css'

export default function ServicesSection() {
  return (
    <>
      <div id="maincontainer" className="bg-Lightblue flex justify-between ">
        <div id="firstmain" className="mt-16 ml-60">
          <h1 class="text-heading text-white font-heading ">Our Services</h1>
          <p className="text-desc font-desc text-white w-2/3 mt-2">
            Kal Tires has 9 distribution centers, 4 service centers and
            nationwide 24/7 emergency road service. Exclusive with major tire
            manufactures such as Goodyear, Cooper, BKT, Michelin, Yokohama,
            Double Coin, Pirelli and Hankook. We offer national account billing
            for Goodyear, Cooper, Michelin, Yokohama and Hankook products.{" "}
          </p>
          <button className="text-white bg-yellow rounded p-4 w-44 mt-8">
            CONTACT US
          </button>
        </div>

        <div id="Secondmain" className=" mt-24">
          <div id="innermain" className="flex justify-between mr-96">
            <div className="mr-12 mt-9">
              <img
                className="mr-10"
                src="http://127.0.0.1:5500/src/assets/Images/truck1white.svg"
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
          <div id="innermain" className="flex justify-between mr-96">
            <div className="mr-12 mt-5">
              <img
                className="mr-10"
                src="http://127.0.0.1:5500/src/assets/Images/truck1white.svg"
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
          <div id="innermain" className="flex justify-between mr-96">
            <div className="mr-12 ">
              <img
                className="mr-10 mt-18   "
                src="http://127.0.0.1:5500/src/assets/Images/truck1white.svg"
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
        </div>
      </div>
    </>
  );
}
