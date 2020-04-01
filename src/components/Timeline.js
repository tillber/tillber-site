import React from 'react'
import 'bulma/css/bulma.css'
import 'bulma-timeline/dist/css/bulma-timeline.min.css'

function Timeline(){
  return(
    <div className="martin-timeline">
      <div className="timeline is-centered">
        <div className="timeline-item"></div>
        <header className="timeline-header">
          <span className="tag is-primary">2017</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="heading">June 2017 - ONGOING</p>
            <p className="fw-500">Sales Assistant / Showroom Host</p>
            <p>Sales at J Bil Haninge</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <p className="heading">August 2017 - ONGOING</p>
            <p className="fw-500">Bachelor of Science Student in Computer Engineering</p>
            <p>KTH School of Electrical Engineering and Computer Science</p>
          </div>
        </div>
        <header className="timeline-header">
          <span className="tag is-primary">2020</span>
        </header>
        <div className="timeline-item">
          <div className="timeline-marker">
            <i className="fa fa-flag"></i>
          </div>
          <div className="timeline-content">
            <p className="heading">March 2020 - ONGOING</p>
            <p className="fw-500">Bachelor Thesis / Degree Project: "Security Test of an iZettle Reader 2"</p>
            <p>KTH Division of Network and Systems Engineering</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline;
