import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import MainWrapper from "containers/MainWrapper";

import Login from 'components/Login';
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
                <Route path="/" exact component={Home} />
               <Route path="/lab-tests" exact component={LabTestWrapper} />

               <Route path="/notify" exact component={NotificationWrapper}/>
                <Route path="/lab-test-managers" exact component={LabTestManagerWrapper} />
                <Route path="/lab-managers" exact component={LaboratoryManagerWrapper} />
                <Route path="/sample-centers" exact component={SampleCenterManagerWrapper} />
                <Route path="/specimen-details" exact component={SpecimenInformationWrapper} />
                <Route path="/requests/:reqId/specimen-details" component={SpecimenInformationWrapper} />

                <Route path="/requests/:reqId/test-results" component={TestResultsWrapper} />
                {/* Erandi*/}
                <Route path="/orders" exact component={TestOrder}/>

                <Route path="/test-requests-view" exact component={ViewTestRequestsHome}/>
              </MainWrapper>
            </Grid>
          </Grid>
        </Switch>
      </Router>

    );
  }
}

export default App;
