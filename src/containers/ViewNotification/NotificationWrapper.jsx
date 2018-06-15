/*
import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';

import NotificationTable from './NotificationTable';

import { getNotifications } from 'store/actions/index';
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

class NotificationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //value: 'parentFields',
            columnData:  [
                { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
                { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
                { id: 'subCategory', numeric: false, disablePadding: false, label: 'Sub Category' },
                { id: 'testName', numeric: false, disablePadding: false, label: 'Test Name' },
            ]
        };
    }

    componentDidMount(){
        this.props.getNotifications();
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        //const { value } = this.state;
        const { columnData } = this.state;

        const tableCellData = [
          //  { priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: new Date().toString(), dueDate: new Date().toString(), reqPerson: 'wasamtha', comment: 'new test' }
        ];

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">s

                    </AppBar>

                    <TabContainer>
                        <NotificationTable data={this.props.notification} />
                    </TabContainer>

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

NotificationWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

const withStylesComponent = withStyles(styles)(NotificationWrapper);

function mapStateToProps({ notification }) {
    return { notification };
}

const mapDispatchToProps = {getNotifications};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);
*/



import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';


import NotificationTable from './NotificationTable';

import { getNotifications } from 'store/actions/index';
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

class NotificationWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'labs',
            columnData:  [
                { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
                { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
                { id: 'subCategory', numeric: false, disablePadding: false, label: 'Sub Category' },
                { id: 'testName', numeric: false, disablePadding: false, label: 'Test Name' },
            ]
        };


    }

    componentDidMount(){

        this.props.getNotifications();

    }

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
                        <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            Notifications
                        </Typography>
                        </Toolbar>
                    </AppBar>

                    <br/>
                    <Divider/>

                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab value="testNotifications" label="Tests" />
                            <Tab value="laboratories" label="Laboratories" />
                            <Tab value="sampleCenters" label="Sample Centers" />
                        </Tabs>
                    </AppBar>
                    {value === "testNotifications" &&
                    <TabContainer>
                        <NotificationTable data={this.props.notification}/>
                    </TabContainer>}

                    {value === "laboratories" &&
                    <TabContainer>
                        Item Two
                    </TabContainer>}
                    {value === "sampleCenters" &&
                    <TabContainer>
                        Item Three
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

NotificationWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(NotificationWrapper);


function mapStateToProps({ notification}) {
    return { notification };
}

const mapDispatchToProps = {getNotifications};


export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);


