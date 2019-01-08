import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

export default function LaunchItem({ launch : { flight_number, mission_name, launch_date_local, launch_success, links: { mission_patch } } }) {
  const isImgEmpty = (img) => img ? img : logo;
  
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-3">
          <img 
            className="img-thumbnail img-style"
            src={ isImgEmpty(mission_patch) } 
            alt={ mission_name }
          />
        </div>
        <div className="col-md-6">
          <h4>Mission:{' '}
            <span className={ classNames({
              'text-success': launch_success,
              'text-danger': !launch_success
            }) }>
              { mission_name }
            </span>
          </h4>
          <p>Date: <Moment format="MMMM Do, YYYY hh:mm a">{ launch_date_local }</Moment></p>
        </div>
        <div className="col-md-3">
          <Link to={ `/launch/${flight_number}` } className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  )
}
