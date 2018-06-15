import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {Card, CardContent, Grid, Typography, MenuItem} from "@material-ui/core";
import {renderTextField, renderDatePicker, renderSelectField} from "components/MaterialUi";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import {addNewRequest, getLabTestDetails} from 'store/actions/newOrder';
import {connect} from 'react-redux';

class OrderForm extends Component {

    submit = values => {
        this.props.addNewRequest(values);
    };

    componentDidMount() {
        this.props.getLabTestDetails();
    }

    render() {
        const {handleSubmit} = this.props;
        const {category, subCategory, testName} = this.props;
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
                                <Grid item md={6}>
                                    <Field
                                        label="Patient HIN"
                                        name="patientHIN"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={6}>
                                    <Field
                                        label="Full Name"
                                        name="name"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={6}>
                                    <Field
                                        label="Gender"
                                        name="gender"
                                        component={renderSelectField}
                                    >
                                        <MenuItem value="male">male</MenuItem>
                                        <MenuItem value="male">female</MenuItem>
                                    </Field>
                                    <br/>
                                    <br/>
                                </Grid>
                                <Grid item md={6}>
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
                                <Grid item md={6}>
                                    <Field
                                        name="requestedPerson"
                                        label="Person Requesting"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={6}>
                                    <Field
                                        name="requestedDepart"
                                        label="Department"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={6}>
                                    <Field
                                        name="requestedDate"
                                        label="Date Requested"
                                        component={renderDatePicker}
                                    />
                                </Grid>
                                <br/>
                                <Grid item md={6}>
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
                                <Grid item md={6}>
                                    <Field
                                        name="category"
                                        select
                                        label="Select category"
                                        component={renderSelectField}
                                    >

                                    </Field>
                                </Grid>
                                <br/>

                                <Grid item md={6}>
                                    <Field
                                        name="category"
                                        select
                                        label="Select category"
                                        component={renderSelectField}
                                    >

                                    </Field>
                                </Grid>
                                <br/>

                                <Grid item md={6}>
                                    <Field
                                        name="testName"
                                        select
                                        label="Select Test Name"
                                        component={renderSelectField}

                                    >
                                    </Field>
                                </Grid>
                                <br/>
                                <Grid item md={6}>
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
                                <Grid item md={6}>
                                    <Field
                                        name="comment"
                                        label="Comment"
                                        component={renderTextField}
                                    />
                                </Grid>
                                <br/><br/><br/><br/>
                                <Grid item md={6}>
                                    <Button variant="contained" size="medium">
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


function mapStateToProps({newOrder, labDetails}) {
    return {newOrder, labDetails};
}

const mapDispatchToProps = {
    addNewRequest, getLabTestDetails

};
const MyOrderForm = reduxForm({
    form: "OrderForm"
})(OrderForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyOrderForm);