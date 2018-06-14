//IT16139640

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Field, reduxForm} from 'redux-form';
import {renderTextField} from "../../MaterialUi";

import  SampleCenterTable from './sampleCenterTable';
import SampleCenterTypeTable from './SampleCenterTypeTable';


import { getSampleCenters } from 'store/actions/index';
import { addSampleCenters } from 'store/actions/sampleCenter';

import { connect } from 'react-redux';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class sampleCenterTableWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'SampleCenterTypes',

            columnData:  [

                'Sample Center Type',
                'Sample Center Name',
                'Incharge',
                'Location',
                'Email',
                'Contact 1',
                'Contact 2'
            ],
            sampleCenterTypeColumns: [

                'Sample Center Type'
            ]
        };


    }

    componentDidMount(){

        this.props.getSampleCenters();

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = values => {
        console.log('click');
        console.log(values);
        // this.setState({ open: false });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    submit = values => {
        this.props.addSampleCenters(this.props.id, values);
    };


    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { columnData, sampleCenterTypeColumns } = this.state;
        const { handleSubmit } = this.props;


        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab value="SampleCenterTypes" label="Sample Center Types" />
                            <Tab value="SampleCenters" label="Sample Centers" />
                        </Tabs>
                    </AppBar>



                    {value === "SampleCenterTypes" &&
                    <TabContainer>


                        <TextField
                            id="search"
                            label="Search Sample Center Types"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />
                        <SampleCenterTypeTable columnData={sampleCenterTypeColumns} data={this.props.sampleCenters}/>

                        <Button onClick={this.handleClickOpen}>Add New Sample Center Type</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add New Sample Center Type</DialogTitle>
                            <DialogContent>
                                <form onSubmit={this.props.handleSubmit(this.submit) && this.handleClose} >


                                    <Field
                                        name="type"
                                        label="Sample Center Type"
                                        component={renderTextField}
                                    />
                                    <Button type="submit" color="primary">
                                        Save
                                    </Button>
                                </form>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>
                    </TabContainer>}



                    {value === "SampleCenters" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Sample Centers"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />
                        <SampleCenterTable columnData={columnData} data={this.props.sampleCenters} />

                        <Button onClick={this.handleClickOpen}>Add New Sample Center</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add new Sample Center</DialogTitle>
                            <DialogContent>

                                <form onSubmit={this.props.handleSubmit(this.submit)} >

                                <Field
                                    name="type"
                                    label="Sample Center Type"
                                    component={renderTextField}
                                />
                                <Field
                                    name="name"
                                    label="Sample Center Name"
                                    component={renderTextField}
                                />
                                <Field
                                    name="inCharge"
                                    label="Incharge"
                                    component={renderTextField}
                                />
                                <Field
                                    name="location"
                                    label="Location"
                                    component={renderTextField}
                                />
                                <Field
                                    name="email"
                                    label="Email"
                                    component={renderTextField}
                                />

                                <Field
                                    name="contact1"
                                    label="contact 1"
                                    component={renderTextField}
                                />
                                <Field
                                    name="contact2"
                                    label="contact 2"
                                    component={renderTextField}
                                />
                                    <Button type="submit" color="primary">
                                        Save
                                    </Button>

                                </form>

                            </DialogContent>

                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>

                    </TabContainer>}

                </div>
            </div>
        );
    }
}


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

sampleCenterTableWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(sampleCenterTableWrapper);


function mapStateToProps({ sampleCenters }) {
    return { sampleCenters };
}

const mapDispatchToProps = {getSampleCenters,addSampleCenters};


const MyForm = reduxForm({
    form: "sampleCenterType",
})(withStylesComponent);

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);


