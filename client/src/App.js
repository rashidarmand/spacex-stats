import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './Components/Launches';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from './Components/Launch';
import Nav from './Components/Nav';
import Rockets from './Components/Rockets';
import Rocket from './Components/Rocket';
import Home from './Components/Home';
import NotFound from './Components/NotFound';

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={ client } >
        <Router>
          <main>
            <Nav />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/launches" component={ Launches } />
                <Route exact path="/launch/:flight_number" component={ Launch } />
                <Route exact path="/rockets" component={ Rockets } />
                <Route exact path="/rocket/:rocket_id" component={ Rocket } />
                <Route component={ NotFound } />
              </Switch>
            </div>
          </main>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
