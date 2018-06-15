import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { renderTextField, renderDatePicker } from "components/MaterialUi";

class SpecimenDetailsForm extends Component {
  submit = values => {
    console.log("values", values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant="title"> Specimen Details </Typography>
          <form>
            <Grid md={12} container spacing={24} >
              <Grid item md={6}>
                <Field
                  name="type"
                  component={renderTextField}
                  label="Specimen Type"
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  name="retentionType"
                  component={renderTextField}
                  label="Retention Type"
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  name="collectedDate"
                  component={renderDatePicker}
                  label="Collected Date"
                />
              </Grid>
              <Field
                name="storedDate"
                component={renderDatePicker}
                label="Stored/ Destroyed Date"
              />
              <Grid item md={6}>
                <Field
                  name="remarks"
                  component={renderTextField}
                  label="Remarks"
                />
              </Grid>
              <Grid item md={6}>
                <Field
                  name="location"
                  component={renderTextField}
                  label="Location"
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
  }
}

const MyForm = reduxForm({
  form: "specimenDetailsForm"
})(SpecimenDetailsForm);

export default MyForm;
