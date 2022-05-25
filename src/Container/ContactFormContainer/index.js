import React from 'react';
import Contactform from '../../Components/Contactform/Contactform';

export const ContactFormContainer = () => {
  return (
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12 flex mt-24 align-center justify-center ">
      <div>
        <div>
          <h1 className="xl:text-5xl text-Heading font-semibold md:text-2xl link link-underline link-underline-black pb-8">
            Contact Form
          </h1>
          <p className="mt-2 text-Description font-desc text-desc ">
            we are ready to work on a project f any complexity
          </p>
        </div>

        <Contactform></Contactform>
      </div>

      <div className="flex ">
        <img
          src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/Partz.png"
          width="300"
        />
      </div>
    </div>
  );
};
