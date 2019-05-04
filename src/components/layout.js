import React from "react"
import "../styles/index.scss"
import Navbar from "./navbar"
import Footer from "./footer"
import HTMLHeader from "./htmlHead"

const Layout = props => {
  return (
    <div id="page-container">
      <div id="content-wrap">
        <HTMLHeader />
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
