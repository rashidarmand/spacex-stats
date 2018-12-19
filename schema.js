const axios = require('axios');
const { 
  GraphQLObjectType, 
  GraphQLInt, 
  GraphQLFloat,
  GraphQLString, 
  GraphQLBoolean, 
  GraphQLList ,
  GraphQLSchema
} = require('graphql');

// Launch Type
const LaunchType = new GraphQLObjectType({
  name: 'Launch',
  fields: () => ({
    flight_number: { type: GraphQLInt },
    mission_name: { type: GraphQLString },
    launch_year: { type: GraphQLString },
    launch_date_local: { type: GraphQLString },
    launch_success: { type: GraphQLBoolean },
    rocket: { type: RocketType }
  })
});

const DimensionsType = new GraphQLObjectType({
  name: 'Height',
  fields: () => ({
    feet: { type: GraphQLFloat },
    lb: { type: GraphQLInt }
  })
});

// Rocket Type
const RocketType = new GraphQLObjectType({
  name: 'Rocket',
  fields: () => ({
    rocket_id: { type: GraphQLString },
    rocket_name: { type: GraphQLString },
    rocket_type: { type: GraphQLString },
    first_flight: { type: GraphQLString },
    flickr_images: { type: GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    success_rate_pct: { type: GraphQLInt },
    height: { type: DimensionsType },    
    diameter: { type: DimensionsType },
    mass: { type: DimensionsType }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    launches: {
      type: new GraphQLList(LaunchType),
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/launches`)
          .then(res => res.data);
      }
    },
    launch: {
      type: LaunchType,
      args: {
        flight_number: { type: GraphQLInt }
      },
      resolve(parent, { flight_number }) {
        return axios.get(`https://api.spacexdata.com/v3/launches/${ flight_number }`)
          .then(res => res.data);
      }
    },
    rockets: {
      type: new GraphQLList(RocketType),
      resolve(parent, args) {
        return axios.get(`https://api.spacexdata.com/v3/rockets`)
          .then(res => res.data);
      }
    },
    rocket: {
      type: RocketType,
      args: {
        rocket_id: { type: GraphQLString }
      },
      resolve(parent, { rocket_id }) {
        return axios.get(`https://api.spacexdata.com/v3/rockets/${ rocket_id }`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})