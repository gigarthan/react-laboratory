import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Card, CardContent, Grid, Typography, Button, MenuItem } from "@material-ui/core";
import { renderTextField, renderDatePicker, renderSelectField } from "components/MaterialUi";
import { addSpecimen } from 'store/actions/specimen';
import { getLabTestCategories } from 'store/actions/index';
import { connect } from 'react-redux';

class SpecimenDetailsForm extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
      this.props.getLabTestCategories();
    }

  submit = values => {
    this.props.addSpecimen(this.props.id, values);
  };

  renderSpecimenType = () => {
    return this.props.labTestCategories.map( cat => {
      return(<MenuItem key={cat._id} value={cat.specimenType} > { cat.specimenType }</MenuItem>)
    });
  }

  render() {
    const { handleSubmit } = this.props;
    let disable = false;
    if(this.props.initialValues) {
        disable = true;
    } 
    return (
      <Card>
        <CardContent>
          <Typography variant="title"> Specimen Details </Typography>
          <form onSubmit={handleSubmit(this.submit)}>
            <Grid md={12} container spacing={24} >
              <Grid item md={6}>
                <Field
                  name="type"
                  component={renderSelectField}
                  label="Specimen Type"
                  disabled={disable}
                >
                  { this.renderSpecimenType() }
                </Field>
              </Grid>
              <Grid item md={6}>
                <Field
                  name="retentionType"
                  component={renderTextField}
                  label="Retention Type"
                  disabled={disable}
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  name="collectedDate"
                  component={renderDatePicker}
                  label="Collected Date"
                  disabled={disable}
                />
              </Grid>
              <Grid item md={6}>
              <Field
                name="storedDate"
                component={renderDatePicker}
                label="Stored/ Destroyed Date"
                disabled={disable}
              />
              </Grid>
              <Grid item md={6}>
                <Field
                  name="remarks"
                  component={renderTextField}
                  label="Remarks"
                  disabled={disable}
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  name="location"
                  component={renderTextField}
                  label="Location"
                  disabled={disable}
                />
              </Grid>
              <Grid item md={6}>
                <Button type="submit" variant="contained" color="primary" disabled={disable} >
                    Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
  }
}

const MyForm = reduxForm({
  form: "specimenDetailsForm",
  enableReinitialize: true
})(SpecimenDetailsForm);

function mapStateToProps({ specimen, labTestCategories }) {
        return({ initialValues: specimen.specimenData, labTestCategories });
}

export default connect(mapStateToProps, { addSpecimen, getLabTestCategories })(MyForm);
