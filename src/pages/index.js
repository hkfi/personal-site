import React from "react"
import Layout from "../components/layout"
import {
  RiMailLine,
  RiStackOverflowLine,
  RiCodepenLine,
  RiGithubLine,
} from "react-icons/ri"

export default () => {
  return (
    <Layout>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="text-text-primary text-6xl">hirokicodes</div>
        <div className="flex flex-row text-text-primary text-4xl">
          <a href="mailto: hirokicodes@gmail.com">
            <RiMailLine className="hover:text-theme-primary" />
          </a>
          <a
            href="https://github.com/hirokicodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubLine className=" hover:text-theme-primary" />
          </a>
          <a
            href="https://stackoverflow.com/users/11485944/hirokicodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiStackOverflowLine className=" hover:text-theme-primary" />
          </a>
          <a
            href="https://codepen.io/hirokicodes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiCodepenLine className=" hover:text-theme-primary" />
          </a>
        </div>
      </div>
    </Layout>
  )
}
