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

  componentDidMount() {
    const id = this.props.match.params.reqId;
    this.props.getDetails(id);
  }

  render() {
    const { patient, testDetails } = this.props.specimen;
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={5} xs={12} >
            <PatientDetailCard patient={patient} />
          </Grid>
          <Grid item md={5} xs={12} >
            <TestDetailsCard test={testDetails}  />
          </Grid>
          <Grid item md={10}>
            <SpecimenDetailsForm id={testDetails._id} />
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
