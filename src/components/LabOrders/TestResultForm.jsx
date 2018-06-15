import React, { Component } from "react";
import { renderTextField, renderDatePicker } from "components/MaterialUi";
import { reduxForm, Field } from "redux-form";
import { Card, CardContent, Grid, Typography, Button } from "@material-ui/core";
import { addTestResults } from "store/actions/testfields";
import { connect } from "react-redux";

class TestResultForm extends Component {
  renderTestFields = () => {
    const testInputFields = this.props.fields.map(field => {
      return (
        <Grid item md={12}>
          <Field name={field} component={renderTextField} label={field} />
        </Grid>
      );
    });

    return testInputFields;
  };

  submit = values => {
      this.props.addTestResults(this.props.id, values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Card>
        <CardContent>
          <Typography variant="title">Test Results </Typography>
          <form onSubmit={handleSubmit(this.submit)} >
            <Grid container justify="center" spacing={24}>
              {this.renderTestFields()}
              <Grid item md={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={this.props.fields.length < 1} >
                  Add Results
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
  form: "testResultsForm",
  enableReinitialize: true
})(TestResultForm);

export default connect(
  null,
  { addTestResults }
)(MyForm);
