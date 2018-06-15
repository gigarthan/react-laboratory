import React, { Component } from 'react';
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import { getTestResultFields } from 'store/actions/testfields';
import TestResultForm from './TestResultForm';
import { connect } from 'react-redux';
import PatientDetailCard from './PatientDetailCard';

class TestResultsWrapper extends Component {

  componentDidMount() {
    const id = this.props.match.params.reqId;
    this.props.getTestResultFields(id);
  }

  render() {
    return (
        <Grid container spacing={24} >
          <Grid item md={3} >
            <PatientDetailCard patient={this.props.testResults.patient} />
          </Grid>
          <Grid item md={3} justify={'center'} >
            <TestResultForm fields={this.props.testResults.fields} id={this.props.match.params.reqId} />
          </Grid>
        </Grid>
    )
  }
}

function mapStateToProps({ testResults }){
  return({ testResults });
}

export default connect(mapStateToProps, { getTestResultFields })(TestResultsWrapper);
