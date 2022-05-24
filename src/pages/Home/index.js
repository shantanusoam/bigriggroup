import React from 'react';
import BrandComponent from '../../Components/BrandsComponent/BrandComponent';
import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';
import HeroSection from '../../Components/HeaderHome';
import Roadservice from '../../Components/RoadServiceComponent/Roadservice';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import Contact from '../../Components/Contactsection/Contact';

function Home() {
  return (
    <>
 <HeroSection></HeroSection>
      <GroupWebsitesSection />
      <Roadservice />
      <BrandComponent></BrandComponent>
      <ServicesSection />
      <Contact/>
      
    </>
  );
}
export default Home; 
