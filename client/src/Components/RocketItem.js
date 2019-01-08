import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function RocketItem({ rocket : { rocket_id, rocket_name, rocket_type, first_flight, flickr_images } }) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-3">
          <img 
            className="img-thumbnail img-style"
            src={ flickr_images[0] } 
            alt={ rocket_name }
          />
        </div>
        <div className="col-md-6">
          <h4>Rocket: <span className="text-white">{ rocket_name }</span></h4>
          <p>Rocket Type: { rocket_type }</p>
          <p>First Flight: <Moment format="MMMM Do, YYYY">{ first_flight }</Moment></p>
        </div>
        <div className="col-md-3">
          <Link to={ `/rocket/${rocket_id}` } className="btn btn-secondary">
            Rocket Details
          </Link>
        </div>
      </div>
    </div>
  )
}
