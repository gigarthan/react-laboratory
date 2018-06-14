import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';


import TestRequestTable from './TestRequestTable';
import TestRequestTable1 from './TestRequestTable1';



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
            value: 'parentFields',
            columnData:  [
                { id: 'field', numeric: false, disablePadding: false, label: 'FieldName' },
                { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
                { id: 'minValue', numeric: false, disablePadding: false, label: 'Minimum Value' },
                { id: 'maxValue', numeric: false, disablePadding: false, label: 'Maximum Value' },
                { id: 'minAge', numeric: false, disablePadding: false, label: 'Minimum Age' },
                { id: 'maxAge', numeric: false, disablePadding: false, label: 'Maximum Age' },
                { id: 'unit', numeric: false, disablePadding: false, label: 'Unit' },
            ],
            columnData1:  [
                { id: 'field', numeric: false, disablePadding: false, label: 'FieldName' },
                { id: 'subField', numeric: false, disablePadding: false, label: 'SubFieldName' },
                { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
                { id: 'minValue', numeric: false, disablePadding: false, label: 'Minimum Value' },
                { id: 'maxValue', numeric: false, disablePadding: false, label: 'Maximum Value' },
                { id: 'minAge', numeric: false, disablePadding: false, label: 'Minimum Age' },
                { id: 'maxAge', numeric: false, disablePadding: false, label: 'Maximum Age' },
                { id: 'unit', numeric: false, disablePadding: false, label: 'Unit' },
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
        const { columnData1 } = this.state;

        const tableCellData = [
          //  { priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: new Date().toString(), dueDate: new Date().toString(), reqPerson: 'wasamtha', comment: 'new test' }
        ];

        const tableCellData1 = [
            //  { priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: new Date().toString(), dueDate: new Date().toString(), reqPerson: 'wasamtha', comment: 'new test' }
        ];

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">s

                    </AppBar>

                    <TabContainer>
                        <TestRequestTable columnData={this.state.columnData} data={tableCellData} />
                        <TestRequestTable columnData1={this.state.columnData} data={tableCellData1} />
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

export default withStyles(styles)(TestRequestViewWrapper);
