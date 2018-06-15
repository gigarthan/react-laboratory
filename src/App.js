import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import MainWrapper from "containers/MainWrapper";
import Home from 'containers/Home';
import LabTestWrapper from './components/NewLabTests/LabTestWrapper';
import NotificationWrapper from './containers/ViewNotification/NotificationWrapper';
import LabTestManagerWrapper from './components/OptionsManager/LabTestManagerWrapper';

import LaboratoryManagerWrapper from './components/OptionsManager/LaboratoryManagerWrapper';
import SampleCenterManagerWrapper from './components/OptionsManager/SampleCenterManagerWrapper';
import SpecimenInformationWrapper from './components/LabOrders/SpecimenInformationWrapper';

//Erandi
import TestOrder from './components/TestOrder/TestOrderHome';
import ViewTestRequestsHome from './components/TestRequestsView/ViewTestRequestsHome';
import TestResultsWrapper from './components/LabOrders/TestResultsWrapper';

import requireAuth from 'containers/Require_Auth';

//import HomePage from './components/Home/HomePage';
// import LoginHome from './components/Login/Login';
import Login from './components/Login';


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
          <Grid container>
            <Grid item md={12}>
              <MainWrapper >
                <Route path="/" exact component={requireAuth(Home)} />
                <Route path="/lab-tests" exact component={requireAuth(LabTestWrapper)} />
                <Route path="/notify" exact component={requireAuth(NotificationWrapper)}/>
                <Route path="/lab-test-managers" exact component={requireAuth(LabTestManagerWrapper)} />
                <Route path="/lab-managers" exact component={requireAuth(LaboratoryManagerWrapper)} />
                <Route path="/sample-centers" exact component={requireAuth(SampleCenterManagerWrapper)} />
                <Route path="/specimen-details" exact component={requireAuth(SpecimenInformationWrapper)} />
                <Route path="/requests/:reqId/specimen-details" component={requireAuth(SpecimenInformationWrapper)} />
                <Route path="/requests/:reqId/test-results" component={requireAuth(TestResultsWrapper)} />
                <Route path="/test-requests-view" exact component={requireAuth(ViewTestRequestsHome)}/>           
                <Route path="/order" exact component={requireAuth(TestOrder)}/>
              </MainWrapper>
            </Grid>
          </Grid>
        </Switch>
      </Router>

    );
  }
}

export default App;
