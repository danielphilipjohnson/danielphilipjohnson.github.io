import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFirefox } from "@fortawesome/free-brands-svg-icons"

// import BtnGroup from "./btns"

import getBadgeLogo from "../../utils/getBadgeLogo"
import calculatorImage from "../../images/calculator-desktop.png"
import bg from "../../images/overlay-bg.png"
import "./projects.css"

function Projects() {
  const ProjectBadges = ["HTML5", "CSS", "Responsive", "freecodecamp"]
  return (
    <>
      <div id="responsive" className="container">
        <div className="projects">
          <Link to="/calculator/">
            <div className="item">
              <div className="bar">
                <FontAwesomeIcon icon={faFirefox} />
                <i className="window-buttons"></i>
                <span className="title">project title</span>
              </div>
              <img className="item-img" src={calculatorImage} alt="ddd page" />
              <div
                className="overlay"
                style={{
                  backgroundImage: `url(${bg})`,
                }}
              >
                <div className="content">
                  <div className="badges">
                    {ProjectBadges &&
                      ProjectBadges.map(badge => {
                        return (
                          <span className="badge-tech" key={badge}>
                            {getBadgeLogo(badge)}

                            {badge}
                          </span>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Projects
