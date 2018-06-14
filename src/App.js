import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import MainWrapper from "containers/MainWrapper";
import Home from 'containers/Home';
import LabTestWrapper from './components/NewLabTests/LabTestWrapper';
import LabTestManagerWrapper from './components/OptionsManager/LabTestManagerWrapper';
import LaboratoryManagerWrapper from './components/OptionsManager/LaboratoryManagerWrapper';
import SampleCenterManagerWrapper from './components/OptionsManager/SampleCenterManagerWrapper';
import SpecimenInformationWrapper from './components/LabOrders/SpecimenInformationWrapper';

//Erandi
import NewTestRequest from './components/TestOrder/TestOrderHome';
import ViewTestRequestsHome from './components/TestRequestsView/ViewTestRequestsHome';
import HomePage from './components/Home/HomePage';
import LoginHome from './components/Login/Login';

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
                {/*<Route path="/" exact component={Home} />*/}

                {/*Added By Erandi*/}
                <Route path="/" exact component={HomePage}/>
                <Route path="/lab-orders" exact component={Home}/>
                <Route path="/lab-tests" exact component={LabTestWrapper} />
                <Route path="/lab-test-managers" exact component={LabTestManagerWrapper} />
                <Route path="/lab-managers" exact component={LaboratoryManagerWrapper} />
                <Route path="/sample-centers" exact component={SampleCenterManagerWrapper} />
                <Route path="/specimen-details" exact component={SpecimenInformationWrapper} />

                {/* Erandi*/}
                <Route path="/test-requests" exact component={ NewTestRequest}/>
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
