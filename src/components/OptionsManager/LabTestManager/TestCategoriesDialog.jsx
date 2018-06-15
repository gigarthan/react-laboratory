import React, { Component } from "react";
import { renderTextField } from "../../MaterialUi";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core/";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addLabTestCategories } from 'store/actions/index';


class TestCategoriesForm extends Component {
    
    submit = values => {
        this.props.addLabTestCategories(values);
        this.props.onClose('openTestCategoriesDialog');
    }
  render() {
    const { handleSubmit } = this.props;
    return (
      <Dialog
        open={this.props.open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Test Categories</DialogTitle>
        <form onSubmit={handleSubmit(this.submit)} >
        <DialogContent>
          
            <Field
              name="name"
              label="Category Name"
              component={renderTextField}
            />
            <Field
              name="subCategoryName"
              label="Sub Category Name"
              component={renderTextField}
            />
            <Field
              name="specimenType"
              label="specimen Type"
              component={renderTextField}
            />
            <Field
              name="specimenRetentionType"
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
  
export default connect(null, {addLabTestCategories})(MyForm);