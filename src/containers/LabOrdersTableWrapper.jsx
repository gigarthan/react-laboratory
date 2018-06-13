import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';

import LabOrdersTable from '../components/LabOrders/LabOrdersTable';

import { getOrders } from './../store/actions/index';
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

  componentDidMount() {
    this.props.getOrders();
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
              <Tabs value={value} onChange={this.handleChange}>
                <Tab value="opd" label="OPD" />
                <Tab value="inward" label="Inward" />
                <Tab value="pcu" label="PCU" />
                <Tab value="clinic" label="Clinic" />                
              </Tabs>
            </AppBar>
            {value === "opd" && 
                <TabContainer>
                   <LabOrdersTable columnData={columnData} data={this.props.orders} />
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


const withStylesComponent = withStyles(styles)(LabOrdersTablesWrapper);


function mapStateToProps({ orders}) {
  return { orders };
}

const mapDispatchToProps = {getOrders};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);
