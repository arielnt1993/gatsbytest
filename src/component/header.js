import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  return (
    <div>
      <p>my site</p>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
