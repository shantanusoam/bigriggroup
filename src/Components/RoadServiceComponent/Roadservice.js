import React from 'react';

export default function Roadservice() {
  return (
    <>
      <div
        id="maincontainer"
        className="flex flex-col-reverse lg:flex-row  md:mx-20 mx-0  lg:mx-16"
      >
        <div id="firstmain" className="bg-Darkblue">
          <div id="firtmaininner" className="xl:ml-48 lg:ml-10 mb-10 mt-10 ">
            <h1 className="text-white text-heading font-heading ">
              24/7 Road Service
            </h1>
            <p className="text-white text-desc font-desc 2xl:w-1/2 w-full ">
              Kal Tires has 9 distribution centers, 4 service centers and
              nationwide 24/7 emergency road service. Exclusive with major tire
              manufactures such as Goodyear, Cooper, BKT, Michelin, Yokohama,
              Double Coin, Pirelli and Hankook. We offer national account
              billing for Goodyear, Cooper, Michelin, Yokohama and Hankook
              products.
            </p>
            <div>
              <button className="text-white bg-yellow-bg  font-semibold  mt-8 rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow hover:shadow-yellow-shadowhover  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md ">
                Inventory
              </button>
            </div>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/2017-freightliner-cascadia-accessories_0%201.svg"
          alt="truck"
        />
      </div>
    </>
  );
}
