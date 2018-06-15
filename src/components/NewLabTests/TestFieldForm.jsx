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

    render() {
        const {classes, theme} = this.props;
        const { value } = this.state;
        const { columnData } = this.state;

        return (
            <form className={classes.container} noValidate autoComplete="off">

                <TextField
                    id="TestName"
                    select
                    label="Select Test Name"
                    className={classes.textField}
                    value={this.state.TestName}
                    onChange={this.handleChange_TestName('TestName')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}

                    margin="normal"
                >
                    {TestName.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField><br/>

                <Button variant="contained" onClick={this.handleClickOpen}>Add Test Field</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >

                    <DialogTitle id="form-dialog-title">Field Details</DialogTitle>
                    <DialogContent>

                        <TextField
                            id="TestField"
                            label="Test Field"
                            className={classes.textField}
                            value={this.state.TestField}
                            onChange={this.handleChange_TestField('TestField')}
                            margin="normal"

                        />

                        <TextField
                            id="SubField"
                            label="Sub Field"
                            className={classes.textField}
                            value={this.state.SubField}
                            onChange={this.handleChange_SubField('SubField')}
                            margin="normal"

                        />

                        <TextField
                            id="Gender"
                            select
                            label="Gender"
                            className={classes.textField}
                            value={this.state.Gender}
                            onChange={this.handleChange_Gender('Gender')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            //helperText="Select the gender"
                            margin="normal"
                        >
                            {Gender.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="MinAge"
                            label="Minimum Age"
                            className={classes.textField}
                            value={this.state.MinAge}
                            onChange={this.handleChange_MinAge('MinAge')}
                            margin="normal"

                        />

                        <TextField
                            id="MaxAge"
                            label="Maximum Age"
                            className={classes.textField}
                            value={this.state.MaxAge}
                            onChange={this.handleChange_MaxAge('MaxAge')}
                            margin="normal"

                        />

                        <TextField
                            id="MinValue"
                            label="Minimum Value"
                            className={classes.textField}
                            value={this.state.MinValue}
                            onChange={this.handleChange_MinValue('MinValue')}
                            margin="normal"

                        />

                        <TextField
                            id="MaxValue"
                            label="Maximum Value"
                            className={classes.textField}
                            value={this.state.MaxValue}
                            onChange={this.handleChange_MaxValue('MaxValue')}
                            margin="normal"

                        />

                        <TextField
                            id="Unit"
                            label="Unit"
                            className={classes.textField}
                            value={this.state.Unit}
                            onChange={this.handleChange_Unit('Unit')}
                            margin="normal"

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

const mapDispatchToProps = {getAddedLabTests};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);
