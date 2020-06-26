import React from "react"
import "../styles/main.css"
import { Footer } from "./footer"
import HTMLHeader from "./htmlHead"
import { SideNav } from "./sidenav"
import { TopNav } from "./topnav"

const Layout = props => {
  return (
    <div className="h-screen flex flex-col md:flex-row bg-background-primary">
      <HTMLHeader />
      <div className="w-full md:hidden">
        <TopNav />
      </div>
      <div className="w-12 hidden md:block">
        <SideNav />
      </div>
      <div className="w-full overflow-scroll h-full">
        <div className="flex flex-col h-full items-center p-3">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Layout
