import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Save from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
//import TestRequestTable from './ViewTest/ViewTestRequestsHome';
import TestRequestTable from './ViewTest/TestRequestTable';
import {connect} from "react-redux";
import { getAddedLabTests } from 'store/actions/index';
import {Field, reduxForm} from 'redux-form';
import {renderTextField} from "../MaterialUi";
import {renderSelectField} from "../MaterialUi";
//import Save from '@material-ui/icons/Save';
import { addTestsFields } from 'store/actions/labTestField';
import classNames from "classnames";
import { addTests } from 'store/actions/labTest';


function TabContainer(props) {
    const { children, dir } = props;
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>

    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({

    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },

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

    }
});


const Laboratory = [

];

const Category = [

];

const SubCategory = [

];

const TestName = [
    /*  {
          value: 'male',
          label: 'male',
      },
      {
          value: 'female',
          label: 'female',
      },
      ,*/
];

const Gender = [
    {
        value: 'male',
        label: 'male',
    },
    {
        value: 'female',
        label: 'female',
    },
    ,
];

class TestFieldForm extends React.Component {

    state = {

        TestName:'',
        open: false,
        viewForm: false,
        value: 'parentFields',
        columnData:  [
            { id: 'field', numeric: false, disablePadding: false, label: 'FieldName' },
            { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
            { id: 'minValue', numeric: false, disablePadding: false, label: 'Minimum Value' },
            { id: 'maxValue', numeric: false, disablePadding: false, label: 'Maximum Value' },
            { id: 'minAge', numeric: false, disablePadding: false, label: 'Minimum Age' },
            { id: 'maxAge', numeric: false, disablePadding: false, label: 'Maximum Age' },
            { id: 'unit', numeric: false, disablePadding: false, label: 'Unit' },
        ],

    };

    componentDidMount(){
        this.props.getAddedLabTests();
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClickOpen1 = () => {
        this.setState({ viewForm: true });
    };

    handleClose1 = () => {
        this.setState({ viewForm: false });
    };


    handleChange_TestName = TestName => event => {
        this.setState({
            [TestName]: event.target.value,
        });
    };

    handleChange_TestField = TestField => event => {
        this.setState({
            [TestField]: event.target.value,
        });
    };
    handleChange_SubField = SubField => event => {
        this.setState({
            [SubField]: event.target.value,
        });
    };
    handleChange_Gender = Gender => event => {
        this.setState({
            [Gender]: event.target.value,
        });
    };

    handleChange_MinAge = MinAge => event => {
        this.setState({
            [MinAge]: event.target.value,
        });
    };

    handleChange_MaxAge = MaxAge => event => {
        this.setState({
            [MaxAge]: event.target.value,
        });
    };

    handleChange_MinValue = MinValue => event => {
        this.setState({
            [MinValue]: event.target.value,
        });
    };

    handleChange_MaxValue = MaxValue => event => {
        this.setState({
            [MaxValue]: event.target.value,
        });
    };

    handleChange_Unit = Unit => event => {
        this.setState({
            [Unit]: event.target.value,
        });
    };

    submit = values => {
        this.props.addTestsFields(values);
    };

    render() {
        const {classes, theme} = this.props;
        const { value } = this.state;
        const { columnData } = this.state;
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.submit)}>

                <Field
                    name="testName"
                    label="Select Test Name"
                    component={renderSelectField}
                />
                <br/>

                <Button variant="contained" onClick={this.handleClickOpen}>Add Test Field</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >

                    <DialogTitle id="form-dialog-title">Field Details</DialogTitle>
                    <DialogContent>

                        <Field
                            name="testField"
                            label="Test Field"
                            component={renderTextField}
                        />

                        <Field
                            name="subField"
                            label="Sub Field"
                            component={renderTextField}
                        />

                        <Field
                            name="gender"
                            label="Gender"
                            component={renderSelectField}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Field>

                        <Field
                            name="minAge"
                            label="Minimum Age"
                            component={renderTextField}
                        />

                        <Field
                            name="maxAge"
                            label="Maximum Age"
                            component={renderTextField}
                        />

                        <Field
                            name="minValue"
                            label="Minimum Value"
                            component={renderTextField}
                        />

                        <Field
                            name="maxValue"
                            label="Maximum Value"
                            component={renderTextField}
                        />

                        <Field
                            name="unit"
                            label="Unit"
                            component={renderTextField}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>

                <Button variant="contained" onClick={this.handleClickOpen1}>VIEW DATA</Button>
                <Dialog
                    open={this.state.viewForm}
                    onClose={this.handleClose1}
                    aria-labelledby="form-dialog-title1"
                >

                    <DialogTitle id="form-dialog-title1">Field Details</DialogTitle>
                    <DialogContent>
                        <div>
                            <div className={classes.root}>
                                <AppBar position="static">
                                    <Tabs value={value} onChange={this.handleChange}>
                                        <Tab value="parentFields" label="Parent Fields" />
                                    </Tabs>
                                </AppBar>
                                {value === "parentFields" &&
                                <TabContainer>
                                    <TestRequestTable data={this.props.testField} />
                                </TabContainer>}
                                </div>
                            </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose1} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose1} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>

            </form>

        );
    }
}

TestFieldForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const withStylesComponent = withStyles(styles)(TestFieldForm);

function mapStateToProps({ testField }) {
    return { testField };
}

const mapDispatchToProps = {
    getAddedLabTests,
    addTestsFields
};
const MyForm = reduxForm({
    form: "labTestField",
})(withStylesComponent);

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);;

