import React, { Component } from 'react';
import './App.css';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MainWrapper from "containers/MainWrapper";

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
     <Grid container >
      <Grid item md={12}>
        <MainWrapper>
          <h1>WELCOME</h1>
        </MainWrapper>
      </Grid>
    </Grid>
    );
  }
}

export default App;
