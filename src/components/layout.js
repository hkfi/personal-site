import React from "react"
import "../styles/index.scss"
import Navbar from "./navbar"
import Footer from "./footer"
import HTMLHeader from "./htmlHead"

const Layout = props => {
  return (
    <div>
      <HTMLHeader />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
