import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll, Link } from "react-scroll";

import {
  Nav,
  NavMenu,
  NavBtn,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false); 
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  function disabeled() {
    console.log(Boolean(window.localStorage.getItem("product")));
    return window.localStorage.getItem("product");
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "1em" }}>
        <Nav scrollNav={scrollNav}>
          <NavLogo to="/" onClick={toggleHome}>
            <img
              src="http://127.0.0.1:5500/src/assets/Images/navlogo.svg"
              alt="logo"
              width="80%"
            />
          </NavLogo>

          {/* <Bars onClick={toggle}/> */}
          <NavMenu>
            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                <a to="/">HOME</a>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/" onClick={toggleHome}>
                <a to="/">TRAILER & LEASING</a>  
              </NavLinks>
            </NavItem>

            <NavItem>
              {disabeled() === "true" ? (
                <NavLinks>
                  <Link
                    to="Products"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                  >
                    Products
                  </Link>
                </NavLinks>
              ) : (
                <NavLinks to="/products" onClick={toggleHome}>
                  <a to="/products">TIRES & SERVICES</a>
                </NavLinks>
              )}
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">PARTZ</a>
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">CONTACT</a> 
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/Contact" onClick={toggleHome}>
                <a to="/Contact">NEWS & EVENTS</a> 
              </NavLinks>
            </NavItem>
            {/* <NavItem>
            
          <NavLinks >
          <Link to='ContactUs' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact Us</Link>
          </NavLinks>
          </NavItem> */}

            <MobileIcon onClick={toggle}>
              <FaBars color="#111" />
            </MobileIcon>

            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <button className="text-white bg-yellow-bg p-2 px-16 font-semibold  rounded-md shadow-sm hover:shadow-md shadow-yellow-shadow hover:shadow-yellow-shadowhover text-2xl flex items-center justify-center">
              (604) 864 3100
            </button>
          
          </NavBtn>
          {/* <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon> */}
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
