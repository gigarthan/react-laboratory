import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Save from '@material-ui/icons/Save';
import Icon from '@material-ui/core/Icon';


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

    }
});


const category = [
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
const subCategory = [
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
const testName = [
   /* {
        value: 'male',
        label: 'male',
    },
    {
        value: 'female',
        label: 'female',
    },
    ,*/
];
const priority = [
    {
        value: 'high',
        label: 'high',
    },
    {
        value: 'medium',
        label: 'medium',
    },
    {
        value: 'low',
        label: 'low',
    }
];

class RequestForm_test extends React.Component {
    state = {
        requestedPerson:'',
        requestedDepart: '',
        requestedDate:'',
        dueDate:'',
        category:'',
        subCategory:'',
        testName:'',
        priority:'',
        comment:''
    };

    handleChange_requestedPerson = requestedPerson => event => {
        this.setState({
            [requestedPerson]: event.target.value,
        });
    };
    handleChange_requestedDepart = requestedDepart => event => {
        this.setState({
            [requestedDepart]: event.target.value,
        });
    };
    handleChange_requestedDate = requestedDate => event => {
        this.setState({
            [requestedDate]: event.target.value,
        });
    };
    handleChange_dueDate = dueDate => event => {
        this.setState({
            [dueDate]: event.target.value,
        });
    };
    handleChange_category = category => event => {
        this.setState({
            [category]: event.target.value,
        });
    };
    handleChange_subCategory = subCategory => event => {
        this.setState({
            [subCategory]: event.target.value,
        });
    };
    handleChange_testName = testName => event => {
        this.setState({
            [testName]: event.target.value,
        });
    };
    handleChange_priority = priority => event => {
        this.setState({
            [priority]: event.target.value,
        });
    };
    handleChange_comment = comment => event => {
        this.setState({
            [comment]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="requestedPerson"
                    label="Person Requesting"
                    className={classes.textField}
                    value={this.state.patientHIN}
                    onChange={this.handleChange_requestedPerson('requestedPerson')}
                    margin="normal"
                />
                <br/><br/>
                <TextField
                    id="requestedDepart"
                    label="Department"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange_requestedDepart('requestedDepart')}
                    margin="normal"
                />
                <br/><br/>
                <TextField
                    id="requestedDate"
                    label="Date Requested"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange_requestedDate('requestedDate')}
                    margin="normal"
                />
                <br/><br/>

                <TextField
                    id="dueDate"
                    label="Due Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    //helperText="Select the date"
                    margin="normal"
                    onChange={this.handleChange_dueDate('dueDate')}
                />
                <br/><br/>

                <TextField
                    id="category"
                    select
                    label="Select category"
                    className={classes.textField}
                    value={this.state.category}
                    onChange={this.handleChange_category('category')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    //helperText="Select the gender"
                    margin="normal"
                >
                    {category.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="subCategory"
                    select
                    label="Select Sub Category"
                    className={classes.textField}
                    value={this.state.subCategory}
                    onChange={this.handleChange_subCategory('subCategory')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    //helperText="Select the gender"
                    margin="normal"
                >
                    {subCategory.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="testName"
                    select
                    label="Select Test Name"
                    className={classes.textField}
                    value={this.state.testName}
                    onChange={this.handleChange_testName('testName')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    //helperText="Select the gender"
                    margin="normal"
                >
                    {testName.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="priority"
                    select
                    label="Priority"
                    className={classes.textField}
                    value={this.state.priority}
                    onChange={this.handleChange_priority('priority')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    //helperText="Select the gender"
                    margin="normal"
                >
                    {priority.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="comment"
                    label="Comment"
                    className={classes.textField}
                    value={this.state.comment}
                    onChange={this.handleChange_comment('comment')}
                    margin="normal"
                />

            </form>

        );
    }
}

RequestForm_test.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestForm_test);