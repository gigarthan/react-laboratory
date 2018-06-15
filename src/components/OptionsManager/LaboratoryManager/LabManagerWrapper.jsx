//IT16139640


import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "../../MaterialUi";

import LabManagerTable from "./LabManagerTable";
import LabDepTable from "./LabDepTable";
import LabTypeTable from "./LabTypeTable";


import { getLabs, addLabs, addLabDepartments,getLabDepartments,getLabTypes,addLabTypes } from 'store/actions/laboratory';


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

class LabManagerWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'labTypes',

      columnData: [
        "Lab Name",
        "Lab Type",
        "Department",
        "Count",
        "Lab Incharge",
        "Location",
        "Contact 1",
        "Contact 2"
      ],

            labDepColumns:[
                'Department'
            ],

            labTypeColumns:[
                'Lab Type'
            ]
        };


    }

    componentDidMount(){

        this.props.getLabs();
        this.props.getLabDepartments();
        this.props.getLabTypes();

    };

    submit = values => {
        this.props.addLabs(values);
        this.handleClose();
    };

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

    formChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    submitLabForm = event => {
        event.preventDefault();
       // this.props.addLabTypes(this.state.labTypes);
        this.props.addLabDepartments(this.state.labDepartments);

        this.handleClose();
    }






    render() {
        const {classes} = this.props;
        const {value} = this.state;
        const {columnData,labDepColumns,labTypeColumns} = this.state;
        const { handleSubmit } = this.props;




            return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab value="labTypes" label="Lab Types" />
                            <Tab value="LabDepartments" label="Laboratory Departments" />
                            <Tab value="Labs" label="Laboratories" />
                        </Tabs>
                    </AppBar>
                    {value === "labTypes" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Lab Types"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />


                        <LabTypeTable columnData={labTypeColumns} data={this.props.labTypes}/>

                        <Button onClick={this.handleClickOpen}>Add New Laboratory Type</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">New Laboratory Type</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="type"
                                    label="Laboratory Type"
                                    fullWidth
                                    value={this.state.labTypes}
                                    onChange={this.formChange('labTypes')}
                                />

                                <Button onClick={this.submitLabForm} color="primary">
                                    Save
                                </Button>


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>



                    </TabContainer>}


                    {value === "LabDepartments" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Lab Departments"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />


                        <LabDepTable columnData={labDepColumns} data={this.props.laboratory} />

                        <Button onClick={this.handleClickOpen}>Add New Department</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Department Name</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="labDep"
                                    value={this.state.labDepartments}
                                    onChange={this.formChange('labDepartments')}


                                />

                                <Button type="submit" color="primary">
                                    Save
                                </Button>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>


                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add new Lab Department</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="depName"
                                    label="Lab Department"
                                    fullWidth
                                />

                                <Button type="submit" color="primary">
                                    Save
                                </Button>


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>

                            </DialogActions>
                        </Dialog>


                    </TabContainer>}
                    {value === "Labs" &&
                    <TabContainer>
                        <LabManagerTable columnData={columnData} data={this.props.laboratory} />

                        <Button onClick={this.handleClickOpen}>Add New Laboratory</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add New Laboratory</DialogTitle>
                            <DialogContent>
                                <form onSubmit={handleSubmit(this.submit)} >
                                <Field
                                    name="labTypes"
                                    label="Lab Type"
                                    component={renderTextField}
                                />
                                <Field
                                    name="department"
                                    label="Department"
                                    component={renderTextField}
                                />
                                <Field
                                    name="count"
                                    label="Department Count"
                                    component={renderTextField}
                                />
                                <Field
                                    name="name"
                                    label="Lab Name"
                                    component={renderTextField}
                                />

                                <Field
                                    name="labIncharge"
                                    label="Lab Incharge"
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
                                    label="Contact 1"
                                    component={renderTextField}
                                />

                                <Field
                                    name="contact2"
                                    label="Contact 2"
                                    component={renderTextField}
                                />

                                    <Button type="submit"  color="primary" >
                                        Submit
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

LabManagerWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(LabManagerWrapper);


function mapStateToProps({ laboratory, labTypes }) {
    return { laboratory, labTypes };
}

const mapDispatchToProps = {getLabs,addLabs, addLabDepartments,getLabDepartments,getLabTypes,addLabTypes };

const MyForm = reduxForm({
    form: "labManager",
})(withStylesComponent);


export default connect(mapStateToProps, mapDispatchToProps)(MyForm);


