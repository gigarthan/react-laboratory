import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Field, reduxForm} from 'redux-form';
import {renderTextField} from "../MaterialUi";
import {renderSelectField} from "../MaterialUi";
import Save from '@material-ui/icons/Save';
import { addTests } from 'store/actions/labTest';
import { connect } from 'react-redux';
import classNames from "classnames";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,

    },
    menu: {
        width: 200,

    },
});

const Laboratory = [

];

const Category = [

];

const SubCategory = [

];

class LabTestForm extends React.Component {
    state = {
        TestName:''
    };

    handleChange_Laboratory = Laboratory => event => {
        this.setState({
            [Laboratory]: event.target.value,
        });
    };
    handleChange_Category = Category => event => {
        this.setState({
            [Category]: event.target.value,
        });
    };
    handleChange_SubCategory = SubCategory => event => {
        this.setState({
            [SubCategory]: event.target.value,
        });
    };
    handleChange_TestName = TestName => event => {
        this.setState({
            [TestName]: event.target.value,
        });
    };

    submit = values => {
        this.props.addTests(values);
    };

    render() {
        const {classes} = this.props;
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <Field
                    name="laboratory"
                    label="Laboratory"
                    component={renderSelectField}
                />

                <Field
                    name="category"
                    label="Select Category"
                    component={renderSelectField}
                />

                <Field
                    name="subCategory"
                    label="Select Sub Categor"
                    component={renderSelectField}
                />

                <Field
                    name="testName"
                    label="Test Name"
                    component={renderTextField}
                />

                <Button type="submit" color="primary">
                    <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                    Save
                </Button>
            </form>
        );
    }
}

LabTestForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const withStylesComponent = withStyles(styles)(LabTestForm);

function mapStateToProps({ test }) {
    return { test };
}

const mapDispatchToProps = {
    addTests
};

const MyForm = reduxForm({
    form: "labTest",
})(withStylesComponent);

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);