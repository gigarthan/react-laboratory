import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="Laboratory"
                    select
                    label="Select Laboratory"
                    className={classes.textField}
                    value={this.state.Laboratory}
                    onChange={this.handleChange_Laboratory('Laboratory')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}

                    margin="normal"
                >
                    {Laboratory.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="Category"
                    select
                    label="Select Category"
                    className={classes.textField}
                    value={this.state.Category}
                    onChange={this.handleChange_Category('Category')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}

                    margin="normal"
                >
                    {Category.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="SubCategory"
                    select
                    label="Select Sub Category"
                    className={classes.textField}
                    value={this.state.SubCategory}
                    onChange={this.handleChange_SubCategory('SubCategory')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}

                    margin="normal"
                >
                    {SubCategory.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField
                    id="TestName"
                    label="Test Name"
                    className={classes.textField}
                    value={this.state.TestName}
                    onChange={this.handleChange_TestName('TestName')}
                    margin="normal"

                />

            </form>
        );
    }
}

LabTestForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabTestForm);