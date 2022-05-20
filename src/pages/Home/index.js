import React from 'react';
import GroupWebsitesSection from '../../Components/GroupWebsitesSection/GroupWebsitesSection';
import Roadservice from '../../Components/RoadServiceComponent/Roadservice';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
function Home() {
  return (
    <>
      <GroupWebsitesSection />
      <Roadservice />
      <ServicesSection />
    </>
  );
}
export default Home;
