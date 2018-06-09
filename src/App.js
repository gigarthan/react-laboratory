import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainWrapper from "containers/MainWrapper";

import Login from 'components/Login';
import Home from 'containers/Home';

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };


  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
        
          <Grid container >
            <Grid item md={12}>
              <MainWrapper>
                <Route path="/" component={Home} />
              </MainWrapper>
            </Grid>
          </Grid>
        </Switch>
      </Router>
     
    );
  }
}

export default App;
