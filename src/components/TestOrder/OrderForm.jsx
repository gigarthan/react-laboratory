import React, {Component} from "react";
import {reduxForm, Field, formValueSelector} from "redux-form";
import {Card, CardContent, Grid, Typography, MenuItem} from "@material-ui/core";
import {renderTextField, renderDatePicker, renderSelectField} from "components/MaterialUi";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {addNewRequest, } from 'store/actions/newOrder';
import {getLabTestCategories} from 'store/actions/index';
import {connect} from 'react-redux';
import { getTests } from 'store/actions/labTest';


class OrderForm extends Component {

    submit = values => {
        this.props.addNewRequest(values);
    };

    componentDidMount() {
        this.props.getLabTestCategories();
        this.props.getTests();
    }

    render() {
        const {handleSubmit} = this.props;
        return(
            <Card>
                <CardContent>
                    <form onSubmit={handleSubmit(this.submit)}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} sm={4}>
                                <Grid item md={12}>
                                    <AppBar position="static">
                                        <Toolbar>
                                            <Typography variant="title" color="inherit">
                                                Patient Details
                                            </Typography>
                                        </Toolbar>
                                    </AppBar>
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        label="Patient HIN"
                                        name="patientHIN"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        label="Full Name"
                                        name="fullName"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        label="Gender"
                                        name="gender"
                                        component={renderSelectField}
                                    >
                                        <MenuItem value="male">male</MenuItem>
                                        <MenuItem value="female">female</MenuItem>
                                    </Field>
                                    <br/>
                                    <br/>
                                </Grid>
                                <Grid item md={12}>
                                    <Field
                                        label="Date Of birth"
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        name="dob"
                                        component={renderDatePicker}
                                    />
                                </Grid>
                                <br/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid item md={12}>
                                    <AppBar position="static">
                                        <Toolbar>
                                            <Typography variant="title" color="inherit">
                                                Request Details
                                            </Typography>
                                        </Toolbar>
                                    </AppBar>
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        name="reqPerson"
                                        label="Person Requesting"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        name="department"
                                        label="Department"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                              
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        name="dueDate"
                                        label="Due Date"
                                        component={renderDatePicker}
                                    />
                                </Grid>
                                <br/>
                            </Grid>

                            <Grid item xs={12} sm={4}>

                                <Grid item md={12}>
                                    <AppBar position="static">
                                        <Toolbar>
                                            <Typography variant="title" color="inherit">
                                                Test Details
                                            </Typography>
                                        </Toolbar>
                                    </AppBar>
                                </Grid>
                                <br/><br/>
                                <Grid item md={12}>
                                    <Field
                                        name="category"
                                        select
                                        label="Select category"
                                        component={renderSelectField}
                                    >
                                        { 
                                            this.props.labTestCategories.map(cat => {
                                                return(<MenuItem key={cat._id} value={cat.name} >{cat.name}</MenuItem>)
                                            })
                                         }
                                    </Field>
                                </Grid>
                                <br/>           
                                <Grid item md={12}>
                                    <Field
                                        name="testName"
                                        select
                                        label="Select Test Name"
                                        component={renderSelectField}

                                    >
                                    {
                                        this.props.test
                                            .filter( t => t.category === this.props.categoryValue )
                                            .map(t => {
                                                return(<MenuItem key={t.testName} value={t.testName} >{t.testName}</MenuItem>)
                                            })
                                    }
                                    </Field>
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        name="priority"
                                        select
                                        label="Priority"
                                        component={renderSelectField}

                                    >
                                        <MenuItem value="high">high</MenuItem>
                                        <MenuItem value="medium">medium</MenuItem>
                                        <MenuItem value="low">low</MenuItem>
                                    </Field>
                                </Grid>
                                <br/>
                                <Grid item md={12}>
                                    <Field
                                        name="comment"
                                        label="Comment"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/><br/><br/><br/>
                                <Grid item md={12}>
                                    <Button type="submit" variant="contained" size="medium">
                                        Submit Request
                                    </Button>

                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        );

    }
}

// Decorate with connect to read form values
const selector = formValueSelector('OrderForm');

function mapStateToProps(state) {
    const {newOrder, labDetails, labTestCategories, test } = state;
    const categoryValue = selector(state, 'category')
    return {newOrder, labDetails,labTestCategories, test,categoryValue};
}

const mapDispatchToProps = {
    addNewRequest, getLabTestCategories, getTests

};
const MyOrderForm = reduxForm({
    form: "OrderForm"
})(OrderForm);



export default connect(mapStateToProps, mapDispatchToProps)(MyOrderForm);