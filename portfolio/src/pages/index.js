import React from "react"
import { Link } from "gatsby"
import "@fontsource/orbitron"
import "./index.css"
import Layout from "../components/layout"
import Projects from "../components/work/projects"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>React Projects</h1>
    <br />
    <br />
    <Projects />

    <Link to="/markdown/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
