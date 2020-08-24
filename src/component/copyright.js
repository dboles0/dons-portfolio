import React from "react"

export default function Copyright({ element }) {
  return (
    <div className="copyrightSection" ref={element}>
      <div className="col-md-12 text-center">
        <p>&copy; Copyright Donald Boles 2020</p>
      </div>
    </div>
  )
}
