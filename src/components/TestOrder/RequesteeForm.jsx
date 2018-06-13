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

    }
});

class RequesteeForm extends React.Component {
    state = {
        requestedPerson:'',
        requestedDepart: '',
        requestedDate:'',
        dueDate:'',
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
                <TextField
                    id="requestedDepart"
                    label="Department"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange_requestedDepart('requestedDepart')}
                    margin="normal"
                />
                <TextField
                    id="requestedDate"
                    label="Date Requested"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange_requestedDate('requestedDate')}
                    margin="normal"
                />
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
            </form>

        );
    }
}

RequesteeForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequesteeForm);