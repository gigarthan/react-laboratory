import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PatientDetailCard from './PatientDetailCard';
import TestDetailsCard from './TestDetailsCard';
import SpecimenDetailsForm from 'containers/SpecimenDetailsForm';
import { getDetails } from 'store/actions/specimen';
import { connect } from 'react-redux';

class SpecimenInformationWrapper extends Component {

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

  componentDidMount() {
    const id = this.props.match.params.reqId;
    this.props.getDetails(id);
  }

  render() {
    const { patient, testDetails } = this.props.specimen;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={3} xs={12} >
            <PatientDetailCard patient={patient} />
          </Grid>
          <Grid item md={4} xs={12} >
            <TestDetailsCard test={testDetails}  />
          </Grid>
          <Grid item md={7}>
            <SpecimenDetailsForm />
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ specimen }) {
  return({ specimen });
}

export default connect(mapStateToProps, { getDetails })(SpecimenInformationWrapper);
