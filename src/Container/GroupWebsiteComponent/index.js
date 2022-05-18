import React from 'react';
import {
  ImageComponent,
  InformationComponent,
} from './GroupWebsiteComponent.js';
import TrailersLeasing from '../../assets/Images/TrailersLeasing.png';
import TrailersLeasingLogo from '../../assets/Images/TrailersLeasingLogo.png';
import TrailersLeasingIcon from '../../assets/Images/TrailerLeasingIcon.svg';
function GroupWebsiteComponent() {
  return (
    <>
      <div class="py-16 bg-white">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-start lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <div class="relative">
                <img
                  src={TrailersLeasing}
                  alt="image"
                  loading="lazy"
                  width=""
                  height=""
                />
                <div class="cursor-pointer absolute top-0 right-0  hover:shadow-outline drop-shadow-lg">
                  <img src={TrailersLeasingLogo} width="200" />
                </div>
              </div>
            </div>

            <div class="md:7/12 lg:w-6/12 items-start ml-28">
              <div class="flex flex-row items-center mt-12 -ml-32 pl-6">
                <img src={TrailersLeasingIcon} width="100" class="pr-8"></img>
                <h2 class="text-2xl text-gray-900 font-semibold md:text-4xl ">
                  Trailers & Leasing
                </h2>
              </div>
              <div>
                <h2 class="mt-6 text-1xl text-gray-900 font-medium md:text-2xl ">
                  Trucks
                </h2>
                <p class="mt-2 text-gray-600">
                  As a Vanguard authorized dealer, we offer a variety of dry
                  vans and refrigerated trailers and flatsbed and chessie.
                </p>
              </div>
              <div>
                <h2 class="mt-6 text-1xl text-gray-900 font-medium md:text-2xl ">
                  Trailers
                </h2>
                <p class="mt-2 text-gray-600">
                  {' '}
                  Designed To Reduce Your Cost Of Ownership, Our Trucks Improved
                  Fuel Economy, Enhanced Safety Features And Lead The Way In
                  Technological Advancements And Driver Comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ImageComponent class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row ">
        <div class="flex justify-center xl:w-1/2">
          <img
            class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover "
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </div>
      </ImageComponent> */}
      <InformationComponent></InformationComponent>
    </>
  );
}

export default GroupWebsiteComponent;    
