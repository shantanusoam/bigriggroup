import React from 'react';
// import Contactform from '../../Components/ContactForm/Contactform';
import Formcomp from '../../Components/Contactsection/Formcomp';

export const ContactFormContainer = () => {
  return (
    <div id="maincontainer" >
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12 flex  align-center justify-center ">
        <div className="mt-24">
          {/* <div>
          <h1 className="xl:text-5xl text-Heading font-semibold md:text-2xl link link-underline link-underline-black pb-8">
            Contact Form
          </h1>
          <p className="mt-2 text-Description font-desc text-desc ">
            we are ready to work on a project f any complexity
          </p>
        </div> */}

          <Formcomp />
          {/* <Contactform></Contactform> */}
        </div>

        {/* <div className="flex ">
        <img
          src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/Partz.png"
          width="300"
        />
      </div> */}
        {/* <div id="secondmain"> */}
        <img
          className="w-full"
          src="http://127.0.0.1:5500/src/assets/Images/redcontactimg.svg"
          alt=""
        />
        {/* </div> */}
      </div>
    </div>
  );
};
