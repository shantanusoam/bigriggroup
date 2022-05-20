import React from 'react';

export default function Roadservice() {
  return (
    <>
      <div id="maincontainer" className="flex flex-col-reverse md:flex-row">
        <div id="firstmain" className="bg-Darkblue">
          <div id="firtmaininner" className="xl:ml-48 mb-10 mt-10 ">
            <h1 className="text-white text-heading font-heading">
              24/7 Road Service
            </h1>
            <p className="text-white text-desc font-desc 2xl:w-1/2 w-full">
              Kal Tires has 9 distribution centers, 4 service centers and
              nationwide 24/7 emergency road service. Exclusive with major tire
              manufactures such as Goodyear, Cooper, BKT, Michelin, Yokohama,
              Double Coin, Pirelli and Hankook. We offer national account
              billing for Goodyear, Cooper, Michelin, Yokohama and Hankook
              products.
            </p>
            <div>
              <button className="text-white bg-yellow p-4 font-semibold   mt-8 rounded-md w-1/5 text-2xl flex items-center justify-center">
                Inventory
              </button>
            </div>
          </div>
        </div>

        <img
          className="md:-my-10"
          src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/2017-freightliner-cascadia-accessories_0%201.svg"
          alt="truck"
        />
      </div>
    </>
  );
}
