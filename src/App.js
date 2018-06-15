import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import MainWrapper from "containers/MainWrapper";
import Home from 'containers/Home';
import LabTestWrapper from './components/NewLabTests/LabTestWrapper';
import LabTestManagerWrapper from './components/OptionsManager/LabTestManagerWrapper';
import LaboratoryManagerWrapper from './components/OptionsManager/LaboratoryManagerWrapper';
import SampleCenterManagerWrapper from './components/OptionsManager/SampleCenterManagerWrapper';
import SpecimenInformationWrapper from './components/LabOrders/SpecimenInformationWrapper';

//Erandi
import ViewTestRequestsHome from './components/TestRequestsView/ViewTestRequestsHome';
//import HomePage from './components/Home/HomePage';
import LoginHome from './components/Login/Login';
import TestOrder from './components/TestOrder/TestOrderHome';

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
          <Route path="/login" component={LoginHome} />
          <Grid container>
            <Grid item md={12}>
              <MainWrapper >
                <Route path="/" exact component={Home} />

                {/*Added By Erandi*/}
                {/*<Route path="/" exact component={HomePage}/>*/}
                <Route path="/lab-orders" exact component={Home}/>
                <Route path="/lab-tests" exact component={LabTestWrapper} />
                <Route path="/lab-test-managers" exact component={LabTestManagerWrapper} />
                <Route path="/lab-managers" exact component={LaboratoryManagerWrapper} />
                <Route path="/sample-centers" exact component={SampleCenterManagerWrapper} />
                <Route path="/specimen-details" exact component={SpecimenInformationWrapper} />

                <Route path="/test-requests-view" exact component={ViewTestRequestsHome}/>
                <Route path="/order" exact component={TestOrder}/>
              </MainWrapper>
            </Grid>
          </Grid>
        </Switch>
      </Router>
     
    );
  }
}

export default App;
