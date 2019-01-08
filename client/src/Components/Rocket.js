import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import ImageThumb from './ImageThumb';

const ROCKET_QUERY = gql(`
  query RocketQuery($rocket_id: String!) {
    rocket(rocket_id: $rocket_id) {
      rocket_id
      rocket_name
      rocket_type
      success_rate_pct
      first_flight
      flickr_images
      description
      height {
        feet
      }
      diameter {
        feet
      }
      mass {
        lb
      }
    }
  }
`);

export class Rocket extends Component {
  constructor() {
    super()
    this.state = { prime_img: '' };
  }

  primaryPic = (value) => {
    return this.state.prime_img === ''
      ? value
      : this.state.prime_img;
  }

  selectThumb = (src, thumb) => {
    this.setState({ prime_img: src });
  }

  isHighlighted = (src) => {
    if(this.state.prime_img !== '') {
      return src === this.state.prime_img
        ? '2px solid red'
        : '1px solid #dee2e6';
    }
  }

  formatNum = (number) => {
    let numsArr = [...number.toString()].reverse();
    let output = [];
    numsArr.forEach((number, index) => {
      output.push(number)
      if((index + 1) % 3 === 0 && numsArr[index + 1]) {
        output.push(',')
      }
    });
  
    return output.reverse().join('');
  }

  render() {
    const { rocket_id } = this.props.match.params;

    return (
      <Fragment>
        <Query query={ ROCKET_QUERY } variables={ { rocket_id } }>
          {
            ({ loading, error, data }) => {
              if(loading) return <h4>Loading</h4>;
              if(error) console.log(error);
              const { 
                rocket_name,
                rocket_type,
                success_rate_pct,
                first_flight,
                flickr_images,
                description,
                height: { feet: height },
                diameter: { feet: diameter },
                mass: { lb: mass }
               } = data.rocket;

              return (
                <div>
                  <h1 className="display-4 my-3">
                  <span className="text-danger">Rocket:</span> { rocket_name }
                  </h1>
                  <div className="row">
                    <div className="col-md-6"> 
                      <img className="img-style prime-img" src={ this.primaryPic(flickr_images[0]) } alt={ rocket_name }/> <hr/>
                      <div className="thumbs">
                        {
                          flickr_images.map( img => (
                            <ImageThumb 
                              key={ img } 
                              url={ img } 
                              alt={ rocket_name } 
                              selectThumb={ this.selectThumb } 
                              isHighlighted={ this.isHighlighted } 
                            />
                          ))
                        }
                      </div>
                    </div>

                    <div className="col-md-6">
                      <h4 className="mb-3">Rocket Details</h4>
                      <p>Name: { rocket_name }</p>
                      <p>Type: { rocket_type }</p>
                      <p>First Flight: <Moment format="MMMM Do, YYYY">{ first_flight }</Moment></p>
                      <p>Success Rate: { ' ' }
                        <span className={classNames({ 'text-success': success_rate_pct > 70, 'text-danger' : success_rate_pct < 70 })}>
                          { success_rate_pct } %
                        </span>
                      </p>
                      <section>
                       <h6>Ship Dimensions</h6>
                       <p>Height: { height } feet</p>
                       <p>Diameter: { diameter } feet</p>
                       <p>Mass: { this.formatNum(mass) } lbs</p>
                      </section>
                      <p>Description: { description }</p><br/>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/rockets" className="btn btn-secondary">Back</Link>
                      </div>
                      <br/>
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

export default Rocket
