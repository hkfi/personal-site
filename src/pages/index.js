import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import {
  RiMailLine,
  RiStackOverflowLine,
  RiCodepenLine,
  RiGithubLine,
} from "react-icons/ri"
import { TransitionGroup } from "react-transition-group"
import { Transition } from "../utils/transition"

export default () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500)
    return () => clearTimeout(timeout)
  }, [])
  const nameArray = "Hiroki".split("")

  return (
    <Layout>
      <div className="flex flex-col flex-1 h-full justify-center items-center text-center mb-nav-size md:mr-nav-size">
        <div className="text-text-primary">
          <TransitionGroup component={null}>
            {isMounted && (
              <Transition
                show={true}
                enter={`transition ease-out delay-100 transform duration-100`}
                enterFrom="opacity-0 translate-y-8"
                enterTo="opacity-100 translate-y-0"
              >
                <div className="text-text-primary text-xl">Hello, I am</div>
              </Transition>
            )}
          </TransitionGroup>
          <div className="text-6xl font-semibold mb-2">
            <TransitionGroup component={null}>
              {isMounted &&
                nameArray.map((letter, i) => {
                  return (
                    <Transition
                      key={i}
                      show={true}
                      enter={`transition ease-out delay-${i * 100 +
                        200} duration-200`}
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                    >
                      <span>{letter}</span>
                    </Transition>
                  )
                })}
            </TransitionGroup>
          </div>
          <TransitionGroup component={null}>
            {isMounted && (
              <Transition
                show={true}
                enter={`transition ease-out delay-300 transform duration-500`}
                enterFrom="opacity-0 translate-y-8"
                enterTo="opacity-100 translate-y-0"
              >
                <div className="flex flex-row text-text-primary text-4xl justify-center">
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
              </Transition>
            )}
          </TransitionGroup>
        </div>
      </div>
    </Layout>
  )
}
