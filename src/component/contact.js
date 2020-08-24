import React from "react"

export default function Contact({ element }) {
  return (
    <div id="contact" className="contactSection section" ref={element}>
      <div className="col-md-12 text-center">
        <p className="subHeading">Like what you see?</p>
        <h2>I'd love to hear from you!</h2>
        <a href="mailTo:donald.c.boles@gmail.com" className="contactButton">
          GET IN TOUCH!
        </a>
      </div>
    </div>
  )
}
