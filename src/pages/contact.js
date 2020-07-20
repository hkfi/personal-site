import React from "react"
import { ContactForm } from "../components/contactForm"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div className="text-5xl text-theme-primary">Contact</div>
      <div className="flex items-center w-full h-full justify-center">
        <ContactForm />
      </div>
    </Layout>
  )
}
