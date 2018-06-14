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




import  LabManagerTable from './LabManagerTable';


import { getLabs } from 'store/actions/index';
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
            columnData:  [

                'Lab Name',
                'Lab Type',
                'Department',
                'Count',
                'Lab Incharge',
                'Location',
                'Contact 1',
                'Contact 2'
            ]
        };


    }

    componentDidMount(){

        this.props.getLabs();

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




    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { columnData } = this.state;


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


                        <LabManagerTable columnData={columnData} data={this.props.labs}/>

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
                                />


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleSave} color="primary">
                                    Save
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


                        <LabManagerTable columnData={columnData} data={this.props.labs} />

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
                                    label="Laboratory Department"
                                    fullWidth
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleSave} color="primary">
                                    Save
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


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleSave} color="primary">
                                    Save
                                </Button>
                            </DialogActions>
                        </Dialog>


                    </TabContainer>}
                    {value === "Labs" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Labs"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />


                        <LabManagerTable columnData={columnData} data={this.props.labs} />

                        <Button onClick={this.handleClickOpen}>Add New Laboratory</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add New Laboratory</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="labType"
                                    label="Lab Type"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="department"
                                    label="Department"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="depCount"
                                    label="Department Count"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="labName"
                                    label="Lab Name"
                                    fullWidth
                                />

                                <TextField
                                    margin="dense"
                                    id="labIncharge"
                                    label="Lab Incharge"
                                    fullWidth
                                />

                                <TextField
                                margin="dense"
                                id="location"
                                label="Location"
                                fullWidth
                                />

                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    fullWidth
                                />

                                <TextField
                                    margin="dense"
                                    id="contact1"
                                    label="Contact 1"
                                    fullWidth
                                />

                                <TextField
                                    margin="dense"
                                    id="contact2"
                                    label="Contact 2"
                                    fullWidth
                                />


                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleSave} color="primary">
                                    Save
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


function mapStateToProps({ labs }) {
    return { labs };
}

const mapDispatchToProps = {getLabs};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);


