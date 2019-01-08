import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const COMPANY_QUERY = gql(`
  query CompanyQuery {
    company {
      name
      founder
      founded
      employees
      vehicles
      launch_sites
      summary
      headquarters {
        address
        city
        state
      }
    }
  }
`);

export default function Home() {
  return (
    <Fragment>
      <Query query={ COMPANY_QUERY }>
        {
          ({loading, error, data}) => {
            if(loading) return <h4>Loading....</h4>;
            if(error) console.log(error);
            const {
              name,
              founder,
              founded,
              employees,
              vehicles,
              launch_sites,
              summary,
              headquarters: { address, city, state }
            } = data.company

            return (
              <div className="home">
                <section className="home-hero">
                  <h4>{ summary }</h4>
                </section>
                <div className="card text-center text-white home-details">
                  <h4 className="card-header black">{ name } Company Details</h4>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card border-dark mb-3">
                          <h5 className="card-header black">Founded</h5>
                          <div className="card-body">
                            <h5 className="card-title">{ founded }</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border-dark mb-3">
                          <h5 className="card-header black">Founder</h5>
                          <div className="card-body">
                            <h5 className="card-title">{ founder }</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border-dark mb-3">
                          <h5 className="card-header black black">Employees</h5>
                          <div className="card-body">
                            <h5 className="card-title">{ employees }</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card border-dark mb-3">
                          <h5 className="card-header black">Vehicles</h5>
                          <div className="card-body">
                            <h5 className="card-title">{ vehicles }</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border-dark mb-3">
                          <h5 className="card-header black">Launch Sites</h5>
                          <div className="card-body">
                            <h5 className="card-title">{ launch_sites }</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="card border-dark mb-3">
                          <h5 className="card-header black">Address</h5>
                          <div className="card-body">
                            <h5 className="card-title">{ address }<br/>{ city }, { state }</h5>
                          </div>
                        </div>
                      </div>
                    </div>
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
