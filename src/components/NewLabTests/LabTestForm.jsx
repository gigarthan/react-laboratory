import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "../MaterialUi";
import { renderSelectField } from "../MaterialUi";
import Save from "@material-ui/icons/Save";
import { addTests } from "store/actions/labTest";
import { connect } from "react-redux";
import { Grid, MenuItem } from "@material-ui/core";



const Laboratory = [];

const Category = [];

const SubCategory = [];

class LabTestForm extends React.Component {
 
  submit = values => {
    this.props.addTests(values);
  };

  render() {
    const { classes } = this.props;
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Grid container spacing={16}>
          <Grid item md={12}>
            <Field
              name="laboratory"
              label="Laboratory"
              component={renderSelectField}
            >
                <MenuItem value="lab1" >Lab1</MenuItem>
            </Field>
          </Grid>
          <Grid item md={12}>
            <Field
              name="category"
              label="Select Category"
              component={renderSelectField}
            >
                <MenuItem value="lab1" >Lab1</MenuItem>
            </Field>
          </Grid>
          <Grid item md={12}>
            <Field
              name="subCategory"
              label="Select Sub Category"
              component={renderSelectField}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              name="testName"
              label="Test Name"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">           
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}



function mapStateToProps({ test }) {
  return { test };
}

const mapDispatchToProps = {
  addTests
};

const MyForm = reduxForm({
  form: "labTest"
})(LabTestForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyForm);
