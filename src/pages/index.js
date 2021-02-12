import React from "react";
import "@fontsource/orbitron";
import "./index.css";

import Layout from "../components/layout";
import Projects from "../components/work/projects";

import SEO from "../components/seo";

const IndexPage = () => (
  <Layout cls={"main--home"}>
    <SEO title="Home" />

    <header>
      <h1 className="home--header">React Projects</h1>
    </header>

    <Projects />
  </Layout>
);

export default IndexPage;
