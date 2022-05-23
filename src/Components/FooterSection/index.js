import React from 'react';
// import logo from '../../images/logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
  FooterContainer,
  SocialMediaActions,
  FooterLogo,
  FotterNav,
  FotterContact,
  FotterContactlist,
  FotterContactNo,
  FotterContactName,
  SocialMediaActionsContainer,
  FooterMobileContainer,
  FotterHName,
} from './FooterSectionElements';

const FooterSection = ({ isOpen, toggle }) => {
  return (
    <FooterContainer id="Footertag">
      <FooterLogo>
        <div className="mt-10">
          {/* <div>
            <img src={logo} alt="" />
          </div> */}
          <div>
            <h1 className="pt-10 font-bold text-xl   text-white">
              © BigRig Group Inc, 2022 All rights reserved.
            </h1>
          </div>
        </div>
        <FotterHName>Get in touch with us for your service</FotterHName>

        {/* <SocialMediaActionsContainer>
        <SocialMediaActions>
             <FaFacebook/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaInstagram/>
            </SocialMediaActions>
            <SocialMediaActions>
             <FaLinkedin/>
            </SocialMediaActions>
          </SocialMediaActionsContainer> */}
      </FooterLogo>

      <FotterNav>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>Address</FotterContactName>
            <FotterContactNo>
              1225 Riverside Rd, Abbotsford, BC V2S 7P1, Canada
            </FotterContactNo>
            <FotterContactNo>
              9115 52 St SE, Calgary, AB T2C 2R4, Canada
            </FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>Help line Number</FotterContactName>
            <FotterContactNo>(604) 864 3100</FotterContactNo>
            {/* //todo */}
          </FotterContactlist>
        </FotterContact>
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>Email</FotterContactName>
            <FotterContactNo>trailers@bigrigcanada.com</FotterContactNo>
            {/* //todo */}
          </FotterContactlist>
        </FotterContact>

        {/* <hr align="left" width="100%"></hr> */}

        {/* <hr align="left" width="100%"></hr> */}
        <FotterContact>
          <FotterContactlist>
            <FotterContactName>We are open</FotterContactName>
            <FotterContactNo>
              Monday to Friday, 8:00 AM to 5:00 PM
            </FotterContactNo>
          </FotterContactlist>
        </FotterContact>
        {/* <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions> */}
        {/* <FotterNavH>Email</FotterNavH> */}
        {/* <FotterNavH>Company</FotterNavH>
                <FotterNavH>Advantages</FotterNavH>
                <FotterNavH>Products</FotterNavH>
                <FotterNavH>Contact</FotterNavH> */}
      </FotterNav>

      {/* <FotterSocialMedia>
            <SocialMediaActions>
            <FaFacebookF/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaTwitter/>
            </SocialMediaActions>
            <SocialMediaActions>
                <FaInstagram/>
            </SocialMediaActions>
          </FotterSocialMedia> */}
      {/* <FotterContactN>
        © Kal Tires Inc, 2021 All rights reserved.{" "}
      </FotterContactN> */}
    </FooterContainer>
  );
};

export default FooterSection;