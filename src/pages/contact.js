import React from "react"
import Footer from "../component/footer"
import Header from "../component/header"

const contactPage = () => {
  return (
    <div>
      <Header/>
      <h1>Contact Info</h1>
      <ul>
        <li>
          nombre:{" "}
          <a
            href="https://www.facebook.com/ariel.navarro.9655"
            target="_blank"
            rel="noreferrer"
          >
            Ariel Navarro
          </a>
        </li>
        <li>
          tel: <a href="tel:+541123624747">1123624747</a>
        </li>
        <li>edad:26</li>
      </ul>
      <Footer />
    </div>
  )
}

export default contactPage
