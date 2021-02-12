/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "./nav/Nav"
// import "./layout.css"

const Layout = ({ cls, children }) => {
  return (
    <>
      <Navbar />
      <main className={cls}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
