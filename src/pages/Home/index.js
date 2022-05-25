import React from 'react';
import BrandComponent from '../../Components/BrandsComponent/BrandComponent';
import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';
import HeroSection from '../../Components/HeaderHome';
import Roadservice from '../../Components/RoadServiceComponent/Roadservice';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import { ContactFormContainer } from '../../Container/ContactFormContainer';
import Contact from '../../Components/Contactsection/Contact';
import Abouthome from '../../Components/Abouthomecomponent/Abouthome';
function Home() {
  return (
    <>
      <HeroSection></HeroSection> 
      <Abouthome/>
      <GroupWebsitesSection />
      <Roadservice />
      <BrandComponent></BrandComponent>
      <ServicesSection />
      {/* <Contact/> */} 
      {/* <ContactFormContainer></ContactFormContainer> */}
    </>
  );
}
export default Home;

