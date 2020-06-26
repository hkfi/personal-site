import React from "react"

export const ContactForm = () => {
  return (
    <div className="w-full max-w-2xl self-center">
      <form
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="flex">
          <div className="mb-4 w-1/2 p-1">
            <label
              for="name"
              className="block text-text-primary text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              className=" appearance-none bg-background-secondary border focus:border-theme-secondary rounded w-full py-2 px-3 leading-tight focus:outline-none text-text-primary"
              name="name"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4 w-1/2 p-1">
            <label
              for="email"
              className="block text-text-primary text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              className=" appearance-none border bg-background-secondary focus:border-theme-secondary rounded w-full py-2 px-3 leading-tight focus:outline-none text-text-primary"
              name="email"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex justify-between">
            <label
              for="message"
              className="block text-text-primary text-sm font-bold mb-2"
            >
              Message
            </label>
          </div>
          <textarea
            rows="5"
            className=" appearance-none bg-background-secondary border focus:border-theme-secondary rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none text-text-primary"
            name="message"
            id="message"
            placeholder="Message"
          />
        </div>
        <div className="flex items-center justify-between">
          <div data-netlify-recaptcha />
          <button
            className="bg-background-primary text-text-primary border border-text-primary hover:border-theme-secondary hover:text-theme-secondary font-bold py-2 px-4 rounded focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
