import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../logo.png';


const LAUNCH_QUERY = gql(`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local,
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      details
      links {
        mission_patch
        wikipedia
        video_link
      }
    }
  }
`);

const isImgEmpty = (img) => img ? img : logo;

export class Launch extends Component {
  render() {
    let { flight_number } = this.props.match.params;
    flight_number = parseInt(flight_number);

    return (
      <Fragment>
        <Query query={ LAUNCH_QUERY } variables={ {flight_number} }>
          {
            ({ loading, error, data }) => {
              if(loading) return <h4>Loading</h4>;
              if(error) console.log(error);
              const { 
                flight_number, 
                mission_name, 
                launch_year, 
                launch_success,
                details,
                rocket: { rocket_id, rocket_name, rocket_type },
                links: { mission_patch, wikipedia, video_link }
               } = data.launch;
             
              return (
                <div>
                  <h1 className="display-4 my-3">
                    <span className="text-danger">Mission:</span> { mission_name }
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <img className="img-style prime-img" src={ isImgEmpty(mission_patch) } alt={ mission_name }/>
                    </div>
                    <div className="col-md-6">  
                      <h4 className="mb-3">Launch Details</h4>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <span className="text-white">Flight Number:</span> { flight_number }
                        </li>
                        <li className="list-group-item">
                          <span className="text-white">Launch Year:</span> { launch_year }
                        </li>
                        <li className="list-group-item">
                          <span className="text-white">Launch Successful:</span> <span className={ classNames({
                            'text-success': launch_success,
                            'text-danger': !launch_success
                          }) }>{ launch_success ? 'Yes' : 'No' }</span>
                        </li>
                        { details &&
                          <li className="list-group-item">
                            <span className="text-white">Details:</span> { details }
                          </li>
                        }
                      </ul>
                      <h4 className="my-3">Rocket Details</h4>
                      <ul className="list-group">
                        <li className="list-group-item">Rocket ID: { rocket_id }</li>
                        <li className="list-group-item">Rocket Name: { rocket_name }</li>
                        <li className="list-group-item">Rocket Type: { rocket_type }</li>
                      </ul>
                      <hr/>
                      <div className="button-row">
                        { video_link &&
                          <a href={ video_link } className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Watch Launch</a>
                        }
                        { wikipedia &&
                          <a href={ wikipedia } className="btn btn-secondary" target="_blank" rel="noopener noreferrer">More Info</a>
                        }
                          <Link to="/launches" className="btn btn-secondary">Back</Link>
                      </div><br/><br/>
                    </div>
                  </div>
                </div>
              );
            }
          }
        </Query>
        
      </Fragment>
    )
  }
}

export default Launch
