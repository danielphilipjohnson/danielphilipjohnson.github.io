import React from "react"
import "./blog-type.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFont,
  faCamera,
  faQuoteLeft,
  faLink,
  faComments,
  faMusic,
  faVideo,
} from "@fortawesome/free-solid-svg-icons"

const BlogType = () => {
  return (
    <div className="d-flex flex-row modal-bar mt-4">
      <div className="media blog-post-card d-lg-flex">
        <div className="d-none d-lg-flex mr-4 profile-box">
          <img
            className=" rounded"
            src="https://placeimg.com/450/450/any"
            alt="bot profile"
          />
        </div>

        <div className="media-body">
          <nav className="d-flex flex-row" aria-label="Page navigation example">
            <ul className="pagination">
              <li
                className="page-item"
                data-toggle="modal"
                data-target="#myModal"
              >
                <p className="page-link">
                  <FontAwesomeIcon icon={faFont} className="text" />
                  <span>Text</span>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <FontAwesomeIcon icon={faCamera} className="photo" />
                  <span>Photo</span>
                </p>
              </li>
              <li className="page-item d-none d-sm-flex">
                <p className="page-link">
                  <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
                  <span>Quote</span>
                </p>
              </li>
              <li className="page-item d-none d-sm-flex">
                <p className="page-link">
                  <FontAwesomeIcon icon={faLink} className="link" />
                  <span>Link</span>
                </p>
              </li>
              <li className="page-item d-none d-md-flex">
                <p className="page-link">
                  <FontAwesomeIcon icon={faComments} className="chat" />
                  <span>Chat</span>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <FontAwesomeIcon icon={faMusic} className="audio" />
                  <span>Audio</span>
                </p>
              </li>
              <li className="page-item">
                <p className="page-link">
                  <FontAwesomeIcon icon={faVideo} className="video" />
                  <span>Video</span>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default BlogType
