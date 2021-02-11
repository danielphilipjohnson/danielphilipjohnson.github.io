import React from "react"
import "./navbar.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faCompass,
  faEnvelope,
  faCommenting,
  faBolt,
  faUser,
  faPencil,
} from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-0">
      <button
        className="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="https://www.danielphilipjohnson.com">
        <h1 className="logo">DpJ</h1>
      </a>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0 col-8 d-none d-lg-block">
          <i className="fa fa-search search-icon" aria-hidden="true"></i>
          <label className="visuallyhidden" htmlFor="search">
            Search
          </label>

          <input
            id="search"
            className="form-control mr-sm-2 col-6 search-box"
            type="text"
            placeholder="Search"
          />
        </form>

        <ul className="navbar-nav mx-auto col-auto d-flex align-items-center">
          <li className="nav-item active">
            <a className="nav-link" href="/" aria-label="home">
              <FontAwesomeIcon icon={faHome} className="nav-icons" size="3x" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" aria-label="suggested post">
              <FontAwesomeIcon
                icon={faCompass}
                className="nav-icons"
                size="3x"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" aria-label="messages">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="nav-icons"
                size="3x"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" aria-label="replies">
              <FontAwesomeIcon
                icon={faCommenting}
                className="nav-icons"
                size="3x"
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" aria-label="hot posts">
              <FontAwesomeIcon icon={faBolt} className="nav-icons" size="3x" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" aria-label="find users">
              <FontAwesomeIcon icon={faUser} className="nav-icons" size="3x" />
            </a>
          </li>
          <li
            className="nav-item"
            data-toggle="modal"
            data-target="#myModal"
            aria-label="make posts"
          >
            <a className="nav-link" href="/" aria-label="make post">
              <FontAwesomeIcon icon={faPencil} className="nav-icons" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
