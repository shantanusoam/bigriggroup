import React from 'react';
import { BigPArtzBrands, BigTireBrands } from '../../data.js';
export const CommmingSoonComponentindex = (data) => {
  if (data.data === 'partz') {
    var data1 = BigPArtzBrands;
  }
  if (data.data === 'tires') {
    var data1 = BigTireBrands;
  }

  return (
    <>
      <div className="mt-28">
        <div className="flex flex-col align-center justify-center">
          {data1.map((item) => (
            <div
              className="flex flex-row align-center justify-center"
              key={item.id}
            >
              <img src={item.logo} className="w-2/6"></img>
            </div>
          ))}
          <div className="flex flex-row align-center justify-center text-2xl text-Heading font-bold md:text-2xl pb-8">
            Coming soon!
          </div>
          <div className="flex flex-row align-center justify-center mt-2 text-Description font-desc text-desc text-center">
            Over 50,000 Truck and Trailer parts. Our parts professionals are{' '}
            <br />
            available 24/7 to help keep you moving.
          </div>
          <div className="flex flex-wrap mx-20 my-16 align-center justify-center">
            {data1[0].Brands.map((brand) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-fit mb-4 mt-12 flex align-center justify-center "
                key={brand.id}
              >
                <img
                  src={brand.imageurl}
                  alt={brand.heading}
                  className="mx-6 my-2 align-center w-40 h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
