import React from "react"
import Layout from "../components/layout"

import CalculatorApp from "../apps/calculator/App"
function Calculator() {
  return (
    <Layout cls={"main--calc"}>
      <CalculatorApp />
    </Layout>
  )
}

export default Calculator
