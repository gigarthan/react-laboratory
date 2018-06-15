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
import {renderTextField} from "../../MaterialUi";


import LabTestCategoryTable from './LabTestCategoryTable';
import LabTestSubTable from './LabTestSubTable';

import { getLabTestCategories } from 'store/actions/index';
import { connect } from 'react-redux';
import {reduxForm,Field} from "redux-form";



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

class LabTestWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'labs',
            columnData:  [

                'Name',
                'Sub Category Name',
                'Specimen Type',
                'Specimen Retention Type',
                'Duration'
            ],
            categoryColumn :[
                'Category Name'

            ],
            subCategoryColumn :[
                'Sub Category Name'

            ]
        };


    }

    componentDidMount(){

        this.props.getLabTestCategories();

    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = () => {
        this.setState({ open: false });
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    submit = values => {
        this.props.addLabTestCategories(this.props.id, values);
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { categoryColumn,subCategoryColumn} = this.state;
        const { handleSubmit } = this.state;


        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab value="testNames" label="Test Names" />
                            <Tab value="testCategories" label="Test Categories" />
                            <Tab value="testSubCategories" label="Test SubCategories" />
                        </Tabs>
                    </AppBar>
                    {value === "testNames" &&
                    <TabContainer>

                        {/*<LabTestTable columnData={columnData} data={this.props.labs}/>*/}
                    </TabContainer>}

                    {value === "testCategories" &&
                    <TabContainer>


                            <TextField
                                id="search"
                                label="Search Test Categories"
                                type="search"
                                className={classes.textField}
                                margin="right"
                            />


                        <LabTestCategoryTable columnData={categoryColumn} data={this.props.labCategories} />


                        <Button onClick={this.handleClickOpen}>Add New Test Category</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add new Sample Center</DialogTitle>
                            <DialogContent>

                                <form onSubmit={handleSubmit(this.submit) && this.handleClose}>

                                    <Field
                                        name="name"
                                        label="Category Name"
                                        component={renderTextField}
                                    />
                                    <Field
                                        name="subName"
                                        label="Sub Category Name"
                                        component={renderTextField}
                                    />
                                    <Field
                                        name="specimenType"
                                        label="specimen Type"
                                        component={renderTextField}
                                    />
                                    <Field
                                        name="SRType"
                                        label="Specimen Retention Type"
                                        component={renderTextField}
                                    />

                                    <Field
                                        name="duration"
                                        label="Duration"
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


                    {value === "testSubCategories" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Test Sub Categories"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />

                        <LabTestSubTable columnData={subCategoryColumn} data={this.props.labCategories} />

                        <Button variant="contained" color="primary" className={classes.button}>
                            Add New Test Sub category
                        </Button>



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

LabTestWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(LabTestWrapper);


function mapStateToProps({ labCategories }) {
    return { labCategories };
}

const mapDispatchToProps = {getLabTestCategories};

// const MyForm = reduxForm({
//     form: "sampleCenterType",
// })(withStylesComponent);


export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);


