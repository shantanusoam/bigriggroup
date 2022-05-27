import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll, Link } from 'react-scroll';

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }; 
  // useEffect(() => {
  //   window.addEventListener('scroll', changeNav);
  // }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  function disabeled() {
    return window.localStorage.getItem('product');
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff', size: '1em' }}>
        <Nav scrollNav={scrollNav}>
          <div className="flex flex-row">
            <NavLogo to="/bigriggroup" onClick={toggleHome}>
              <img
                // className="2xl:w-56 w-44  2xl:h-44 h-32  "
                className='pt-6' 
                src="https://raw.githubusercontent.com/shantanusoam/bigriggroup/master/src/assets/Images/navlogo.svg" 
                alt="logo"
                width="80%"
              />
            </NavLogo>

            <NavMenu>
              <NavItem>
                <NavLinks
                  to="/bigriggroup"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall md:text-sm lg:text-xs"
                >
                  HOME
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/trailers"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs"
                >
                  TRAILER & LEASING
                </NavLinks>
              </NavItem>

              <NavItem>
                {disabeled() === 'true' ? (
                  <NavLinks className="2xl:text-desc text-navsmall lg:text-xs">
                    <Link to="/Products" duration={500} offset={-80}>
                      Products
                    </Link>
                  </NavLinks>
                ) : (
                  <NavLinks
                    to="/tires"
                    onClick={toggleHome}
                    className="2xl:text-desc text-navsmall lg:text-xs"
                  >
                    TIRES & SERVICES
                  </NavLinks>
                )}
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/partz"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs"
                >
                  PARTZ
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/Contact"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs" 
                >
                  CONTACT
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks
                  to="/Contact"
                  onClick={toggleHome}
                  className="2xl:text-desc text-navsmall lg:text-xs"
                >
                  NEWS & EVENTS
                </NavLinks>
              </NavItem>

              <MobileIcon onClick={toggle}>
                <FaBars color="#111" />
              </MobileIcon>
            </NavMenu>
          </div>

          <NavBtn>
            <button className="text-white bg-yellow-bg  font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow hover:shadow-yellow-shadowhover  flex items-center justify-center 2xl:w-80 lg:w-36 md:32 2xl:h-16 h-12 2xl:text-2xl lg:text-md md:text-md ">
              (800) 977 0010 
            </button>
          </NavBtn>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
