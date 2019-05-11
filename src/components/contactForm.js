import React from "react"

export default () => {
  return (
    <div className="columns is-centered">
      <div className="column is-three-fifths">
        <form method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input hidden className="hidden" name="bot-field" />
          <div className="columns">
            <div className="column is-half">
              <div className="field">
                <div className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
            </div>
            <div className="column is-half">
              <div className="field">
                <div className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    name="email"
                    type="text"
                    placeholder="Email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control is-expanded">
              <textarea
                rows="5"
                className="textarea"
                name="message"
                placeholder="Message"
              />
            </div>
          </div>

          <div className="columns is-centered is-mobile">
            <div className="column is-half">
              <div data-netlify-recaptcha />
              <button type="submit" className="button is-medium is-rounded">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
