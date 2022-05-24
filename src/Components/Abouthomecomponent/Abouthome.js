import React from 'react'

export default function Abouthome() {
  return (
    <>
      <div id="maincontainer">
        <div id="innermaincontainer"> 
          <div id="firstmain">
            <h1 className='text-heading text-Heading text-center p-8'>About Us</h1> 
            <p className='text-2xl text-Description w-6/12 ml-96 pt-2'> 
              “New and independent” Heavy Duty Truck and Trader Parts
              Distributor. Creating a nationwide distribution chain by
              strategically placing Heavy Duty Parts Distribution Centers around
              the country to supply our customers needs. One-stop-shop for all
              your trucking needs. We are an authorized dealer for Vanguard
              trailers servicing in British Columbia, Canada. We are an
              established retailer of pre-owned trucks and trailers as well
            </p>
          </div>

          <div id="secondmain">
            <div id="logo" className='flex justify-center'>
                <img src="http://127.0.0.1:5500/src/assets/Images/bigrigtrailerlogo.svg" alt="trailers logo" />
                <img src="http://127.0.0.1:5500/src/assets/Images/bigrigpartzlogo.svg" alt="partz logo" />
                <img src="http://127.0.0.1:5500/src/assets/Images/bigrigtireslog.svg" alt="tire logo" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
