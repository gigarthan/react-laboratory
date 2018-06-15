import React, { Component } from "react";
import { renderTextField } from "../../MaterialUi";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core/";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';


class TestCategoriesForm extends Component {
  render() {
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Test Categories</DialogTitle>
        <form>
        <DialogContent>
          
            <Field
              name="name"
              label="Category Name"
              component={renderTextField}
            />
            <Field
              name="subName"
              label="Sub Category Name"
              component={renderTextField}
            />
            <Field
              name="specimenType"
              label="specimen Type"
              component={renderTextField}
            />
            <Field
              name="retentionType"
              label="Specimen Retention Type"
              component={renderTextField}
            />

            <Field
              name="duration"
              label="Duration"
              component={renderTextField}
            />

            
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
              Save
            </Button>
            <Button onClick={this.props.onClose('openTestCategoriesDialog')}  color="primary">
            Cancel
          </Button>
          
        </DialogActions>
        </form>
      </Dialog>
    );
  }
}

const MyForm = reduxForm({
    form: "testCategoriesForm",
  })(TestCategoriesForm);
  
export default MyForm;