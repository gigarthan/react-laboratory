import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import TestRequestViewTable from './TestRequestTable';

import { viewOrderRequests } from 'store/actions/index';
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

class TestRequestViewWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {

            columnData:  [

                { id: 'requestId', numeric: false, disablePadding: false, label: 'Request Id' },
                { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
                { id: 'patientsHIN', numeric: false, disablePadding: false, label: 'Patient\'s HIN' },

                { id: 'fullName', numeric: false, disablePadding: false, label: 'Patient Name' },
                { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
                { id: 'dob', numeric: false, disablePadding: false, label: 'Date Of Birth' },

                { id: 'reqPerson', numeric: false, disablePadding: false, label: 'Req. Person' },
                { id: 'reqDate', numeric: false, disablePadding: false, label: 'Requested Date' },
                { id: 'dueDate', numeric: false, disablePadding: false, label: 'Due Date' },

                { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
                { id: 'subCategory', numeric: false, disablePadding: false, label: 'Sub Category' },
                { id: 'testName', numeric: false, disablePadding: false, label: 'Test Name' },

                { id: 'priority', numeric: false, disablePadding: false, label: 'Priority' },
                { id: 'comment', numeric: false, disablePadding: false, label: 'Comment' },
            ]
        };
    }


    componentDidMount() {
        this.props.viewOrderRequests();
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { columnData } = this.state;

       /* const tableCellData = [
            //{ priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: new Date().toString(), dueDate: new Date().toString(), reqPerson: 'wasamtha', comment: 'new test' },
            //{ priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: new Date().toString(), dueDate: new Date().toString(), reqPerson: 'wasamtha', comment: 'new test' }
        ];*/

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
                        <TestRequestViewTable columnData={columnData} data={this.props.orders} />
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

TestRequestViewWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(TestRequestViewWrapper);

const withStylesComponent = withStyles(styles)(TestRequestViewWrapper);


function mapStateToProps({ orders }) {
    return { orders };
}

const mapDispatchToProps = {viewOrderRequests};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);
