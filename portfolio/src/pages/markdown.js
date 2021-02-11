import React from "react"
import Layout from "../components/layout"
import TumblrMarkdown from "../apps/markdown/App"
function markdown() {
  return (
    <Layout cls={"main--markdown"}>
      <TumblrMarkdown />
    </Layout>
  )
}

export default markdown
