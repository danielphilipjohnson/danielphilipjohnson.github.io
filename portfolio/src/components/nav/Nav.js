import React, { useState, useRef } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./nav.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import profilePhoto from "../../images/profile-md.jpg";

import {
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  fab,
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faStackOverflow,
  faCodepen
);

function Nav() {
  const { site } = useStaticQuery(siteQuery);
  const [openNav, setOpenNav] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();
  const menuBrandRef = useRef();
  const menuNavRef = useRef();

  const openMenu = () => {
    const htmlMenuNodes = menuNavRef.current.children[0].children;
    var menuItems = Array.from(htmlMenuNodes);

    if (!openNav) {
      setOpenNav(true);
      menuRef.current.classList.add("close");
      navRef.current.classList.add("show");
      menuBrandRef.current.classList.add("show");
      menuNavRef.current.classList.add("show");

      menuItems.forEach((item) => item.classList.add("show"));
    } else {
      setOpenNav(false);
      menuRef.current.classList.remove("close");

      navRef.current.classList.remove("show");
      menuBrandRef.current.classList.remove("show");
      menuNavRef.current.classList.remove("show");

      menuItems.forEach((item) => item.classList.remove("show"));
    }
  };
  return (
    <aside>
      <button ref={menuRef} className="menu-btn" onClick={openMenu} role="menu">
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </button>

      <nav className="menu" ref={navRef}>
        <div className="menu-branding" ref={menuBrandRef}>
          <img
            className="lazyload portrait"
            // src={site.siteMetadata.profileImage}
            src={profilePhoto}
            alt="Profile of daniel philip johnson"
          />
        </div>
        <div className="menu-nav show" ref={menuNavRef}>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link" activeClassName="current">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about/" className="nav-link" activeClassName="current">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work/" className="nav-link" activeClassName="current">
                My Work
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact/"
                className="nav-link"
                activeClassName="current"
              >
                How To Reach Me
              </Link>
            </li>
          </ul>
          <div className="icons">
            {site.siteMetadata.socials.map((social) => {
              return (
                <a
                  key={social.FontAwesomeIcon.logo}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={[
                      `${social.FontAwesomeIcon.type}`,
                      `${social.FontAwesomeIcon.logo}`,
                    ]}
                    size="2x"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Nav;

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        profileImage
        socials {
          link
          FontAwesomeIcon {
            logo
            type
          }
        }
      }
    }
  }
`;
