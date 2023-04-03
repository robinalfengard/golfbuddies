import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
import SignupComponent from "../../signup/SignupComponent";
import LoginComponent from "../../login/LoginComponent";
import { useAuth } from "../../security/AuthContext";
// Assets
import LogoIcon from "../assets/svg/Logo";
import BurgerIcon from "../assets/svg/BurgerIcon";

export default function TopNavbar(props) {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [visibilitysignup, setVisibilitysignup] = useState(false);
  const [visibilitylogin, setVisibilitylogin] = useState(false);
  const authContext = useAuth();
  const isAuthenticated = authContext.isAuthenticated;

  const popupCloseHandlerSignup = (e) => {
    setVisibilitysignup(e);
    setVisibilitylogin(!visibilitylogin);
  };

  const popupCloseHandlerLogin = (e) => {
    setVisibilitylogin(e);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  function logout() {
    authContext.logout();
  }

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Golf Mates
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          {!isAuthenticated && (
            <UlWrapper className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Hem
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Erbjudande
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Turneringar
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Nyheter
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="pricing"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Prisplan
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Kontakt
                </Link>
              </li>
            </UlWrapper>
          )}
          {!isAuthenticated && (
            <UlWrapperRight className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <a
                  onClick={(e) => setVisibilitylogin(!visibilitylogin)}
                  style={{ padding: "10px 30px 10px 0" }}
                >
                  Logga in
                </a>
                <LoginComponent
                  title="Login"
                  onClose={popupCloseHandlerLogin}
                  show={visibilitylogin}
                >
                  <h1>Test</h1>
                </LoginComponent>
              </li>
              <li className="semiBold font15 pointer flexCenter">
                <a
                  onClick={(e) => setVisibilitysignup(!visibilitysignup)}
                  className="radius8 lightBg"
                  style={{ padding: "10px 15px" }}
                >
                  Skapa konto
                </a>
                <SignupComponent
                  title="Signup"
                  onClose={popupCloseHandlerSignup}
                  show={visibilitysignup}
                ></SignupComponent>
              </li>
            </UlWrapperRight>
          )}
          {isAuthenticated && (
            <UlWrapper>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Mina sidor
                </Link>
              </li>
              <li className="semiBold font15 pointer">
                <Link
                  activeClass="active"
                  style={{ padding: "10px 15px" }}
                  to=""
                  spy={true}
                  smooth={true}
                  offset={-80}
                >
                  Bokningar
                </Link>
              </li>
            </UlWrapper>
          )}
          {isAuthenticated && (
            <UlWrapperRight className="flexNullCenter">
              <li className="semiBold font15 pointer">
                <li className="nav-item">
                  <Link className="nav-link" to="/logout" onClick={logout}>
                    Logga ut
                  </Link>
                </li>
              </li>
            </UlWrapperRight>
          )}
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
