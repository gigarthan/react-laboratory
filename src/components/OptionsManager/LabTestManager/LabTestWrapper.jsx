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


import LabTestCategoryTable from "./LabTestCategoryTable";
import LabTestSubTable from "./LabTestSubTable";

import { getLabTestCategories, getBasicAddedLabTests } from "store/actions/index";

import TestRequestTable from "./TestRequestTable";

import { getLabTests } from "store/actions/index";
import { connect } from "react-redux";
import TestCategoriesDialog from "./TestCategoriesDialog";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class LabTestWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "testNames",
      columnData: [
        "Name",
        "Sub Category Name",
        "Specimen Type",
        "Specimen Retention Type",
        "Duration"
      ],
      categoryColumn: [
          "Category Name",
          "Sub Category",
          "Specimen",
          "Specimen Retention Type",
          "Duration"
        ],
      subCategoryColumn: ["Sub Category Name"],
      openTestCategoriesDialog: false,
      
    };
  }

  componentDidMount() {
    this.props.getLabTestCategories();
    this.props.getBasicAddedLabTests();


  }

  handleClickOpen = dialogBox => event => {
    this.setState({ [dialogBox]: true });
  };

  handleClose = dialogBox => event => {
    this.setState({ [dialogBox]: false });
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { categoryColumn, subCategoryColumn } = this.state;

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
          {value === "testNames" && (
            <TabContainer>
              <TestRequestTable data={this.props.basicTestField} />
            </TabContainer>
          )}

          {value === "testCategories" && (
            <TabContainer>
              <LabTestCategoryTable
                columnData={categoryColumn}
                data={this.props.labTestCategories}
              />
              <Button onClick={this.handleClickOpen('openTestCategoriesDialog')} >
                Add New Test Category
              </Button>
              <TestCategoriesDialog open={this.state.openTestCategoriesDialog} onClose={this.handleClose} />
            </TabContainer>
          )}

          {value === "testSubCategories" && (
            <TabContainer>   
              <LabTestSubTable
                columnData={subCategoryColumn}
                data={[]}
              />

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Add New Test Sub category
              </Button>
            </TabContainer>
          )}
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

LabTestWrapper.propTypes = {
  classes: PropTypes.object.isRequired
};

const withStylesComponent = withStyles(styles)(LabTestWrapper);

function mapStateToProps({ labTestCategories, basicTestField }) {
  return { labTestCategories, basicTestField };
}

const mapDispatchToProps = { getLabTestCategories, getBasicAddedLabTests };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStylesComponent);
