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


import  SampleCenterTable from './sampleCenterTable';
// import  SampleCenterTypeTable  from './sampleCenterTypeTable';

import { getSampleCenters } from 'store/actions/index';
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
            sampleCenterColumns: [

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
                        <SampleCenterTable columnData={columnData} data={this.props.sampleCenters}/>

                        <Button onClick={this.handleClickOpen}>Add New Sample Center Type</Button>

                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Add new Sample Center</DialogTitle>
                            <DialogContent>

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="type"
                                    label="Sample Center Type"
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

                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="type"
                                    label="Sample Center Type"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Sample Center Name"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="inCharge"
                                    label="Incharge"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Location"
                                    fullWidth
                                />
                                <TextField
                                margin="dense"
                                id="email"
                                label="Email"
                                type = "email"
                                fullWidth
                                />

                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="contact 1"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="contact 2"
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

sampleCenterTableWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(sampleCenterTableWrapper);


function mapStateToProps({ sampleCenters }) {
    return { sampleCenters };
}

const mapDispatchToProps = {getSampleCenters};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);


