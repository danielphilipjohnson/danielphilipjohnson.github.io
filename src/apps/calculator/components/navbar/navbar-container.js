import React from "react"

const NavbarContainer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Js Calculator
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="https://codepen.io/danielphilipjohnson/pen/abdpKOv"
              target="_blank"
              rel="noreferrer"
            >
              Codepen <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarContainer
