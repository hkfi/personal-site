import React from "react"

export default () => {
  return (
    <div class="columns is-centered is-mobile">
      <div class="column is-three-fifths">
        <form action="POST" data-netlify="true" data-netlify-recaptcha="true">
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
                  <span className="icon is-small is-left has-text-success">
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
              <div data-netlify-recaptcha="true" />
              <button type="submit" class="button is-medium is-rounded">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
