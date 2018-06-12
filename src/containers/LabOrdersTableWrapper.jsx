import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';

import LabOrdersTable from '../components/LabOrdersTable';



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

class LabOrdersTablesWrapper extends Component {
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
       { priority: 'high', status: 'Report Issued', reqId: 1234, testName: 'blood test', patientHIN: '12475', reqDate: Date.now(), dueDate: Date.now(), reqPerson: 'wasamtha', comment: 'new test' }
    ];

    return (
      <div>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs value={value} onChange={this.handleChange}>
                <Tab value="opd" label="OPD" />
                <Tab value="inward" label="Inward" />
                <Tab value="pcu" label="PCU" />
                <Tab value="clinic" label="Clinic" />                
              </Tabs>
            </AppBar>
            {value === "opd" && 
                <TabContainer>
                   <LabOrdersTable columnData={columnData} data={tableCellData} />
                </TabContainer>}
            {value === "inward" && <TabContainer>Item Two</TabContainer>}
            {value === "pcu" && <TabContainer>Item Three</TabContainer>}
            {value === "clinic" && <TabContainer>Item Three</TabContainer>}
            
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

LabOrdersTablesWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabOrdersTablesWrapper);
