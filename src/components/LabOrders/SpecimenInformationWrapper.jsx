import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import  ListItem  from '@material-ui/core/ListItem';
import  CardHeader  from '@material-ui/core/CardHeader';
import PatientDetailCard from './PatientDetailCard';
import TestDetailsCard from './TestDetailsCard';

export default class SpecimenInformationWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: {
        fullName: 'Kumara',
        gender: 'Male',
        dob: '26/14/1998',
        patientHIN: '123456'
      },
      testDetail: {
        _id: '1234',
        category: 'Blood & Disease',
        subCategory: 'Blood Composition',
        testName: 'Full Blood Count'
      }
    }
  }

  render() {
    const { patient, testDetail } = this.state;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={3} >
            <PatientDetailCard patient={patient} />
          </Grid>
          <Grid item md={4} >
            <TestDetailsCard test={testDetail}  />
          </Grid>
        </Grid>
      </div>
    );
  }
}
