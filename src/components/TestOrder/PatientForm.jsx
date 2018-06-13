import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        padding: theme.spacing.unit * 3

    },
    menu: {
        width: 200,

    },
});

const gender = [
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

class PatientForm extends React.Component {
    state = {
        patientHIN:'',
        name: '',
        gender:'',
        dob:''
    };

    handleChange_patientHIN = patientHIN => event => {
        this.setState({
            [patientHIN]: event.target.value,
        });
    };
    handleChange_name = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChange_gender = gender => event => {
        this.setState({
            [gender]: event.target.value,
        });
    };
    handleChange_dob = dob => event => {
        this.setState({
            [dob]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="patientHIN"
                    label="Patient HIN"
                    className={classes.textField}
                    value={this.state.patientHIN}
                    onChange={this.handleChange_patientHIN('patientHIN')}
                    margin="normal"
                   // helperText="Enter Patient HIN"
                />

                <TextField
                    id="name"
                    label="Full Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange_name('name')}
                    margin="normal"
                    //helperText="Enter Patient Full Name"
                />
                <TextField
                    id="gender"
                    select
                    label="Gender"
                    className={classes.textField}
                    value={this.state.gender}
                    onChange={this.handleChange_gender('gender')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    //helperText="Select the gender"
                    margin="normal"
                >
                    {gender.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="dob"
                    label="Date Of birth"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    //helperText="Select the date"
                    margin="normal"
                    onChange={this.handleChange_dob('dob')}
                />
            </form>
        );
    }
}

PatientForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientForm);