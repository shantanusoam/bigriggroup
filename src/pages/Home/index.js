import React from 'react';
import BrandComponent from '../../Components/BrandsComponent/BrandComponent';
import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';
import HeroSection from '../../Components/HeaderHome';
import Roadservice from '../../Components/RoadServiceComponent/Roadservice';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import { ContactFormContainer } from '../../Container/ContactFormContainer';
import Contact from '../../Components/Contactsection/Contact';
import Abouthome from '../../Components/Abouthomecomponent/Abouthome';
import { Slideshow } from '../../Components/Slider/slideshow';
// import OurBusinessVerticles from '../../Container/OurBusinessVerticles';
import { MapConatiner } from '../../Container/MapContainer';
import './Home.scss';
import Business from '../../Components/BusinessComponent/Business';
function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Business />
      {/* <OurBusinessVerticles></OurBusinessVerticles> */}
      <Abouthome />
      <GroupWebsitesSection />
      <Roadservice />
      {/* <BrandComponent></BrandComponent> */}
      {/* <ServicesSection /> */}
      <ContactFormContainer></ContactFormContainer>
      <Slideshow></Slideshow>
      <MapConatiner></MapConatiner>
      {/* <Contact /> */}
      {/* <ContactFormContainer></ContactFormContainer> */}
    </>
  );
}
export default Home;
