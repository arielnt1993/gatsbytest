import React from "react"
import { Link } from "gatsby"
import Layout from "../component/layout"


const indexPage = () => {
  return (
    <div>
      <Layout>
      <h1>Hola, soy Ariel</h1>
      <h2> un desarrollador FullStack</h2>
      <p>necesitas un desarrollador?</p>
      <p>
        pues <Link to="/contact">buscame!!</Link>
      </p>
      </Layout>
    </div>
  )
}

export default indexPage
