import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';


import TestRequestViewTable from './TestRequestTable';



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

class TestRequestViewWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'opd',
            columnData:  [
                { id: 'priority', numeric: false, disablePadding: false, label: 'Priority' },
                { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
                { id: 'requestId', numeric: false, disablePadding: false, label: 'Request Id' },
                { id: 'patientsHIN', numeric: false, disablePadding: false, label: 'Patient\'s HIN' },
                { id: 'testName', numeric: false, disablePadding: false, label: 'Test Name' },
                { id: 'reqDate', numeric: false, disablePadding: false, label: 'Requested Date' },
                { id: 'dueDate', numeric: false, disablePadding: false, label: 'Due Date' },
                { id: 'reqPerson', numeric: false, disablePadding: false, label: 'Req. Person' },
                { id: 'comment', numeric: false, disablePadding: false, label: 'Comment' },
            ]
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { columnData } = this.state;

        const tableCellData = [
            { priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: new Date().toString(), dueDate: new Date().toString(), reqPerson: 'wasamtha', comment: 'new test' }
        ];

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                All Lab Test Requests
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <TabContainer>
                        <TestRequestViewTable columnData={columnData} data={tableCellData} />
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

TestRequestViewWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TestRequestViewWrapper);
