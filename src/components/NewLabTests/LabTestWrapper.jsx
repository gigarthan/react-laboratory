import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import TestFieldForm from "./TestFieldForm";
import LabTestForm from "./LabTestForm";
import { Card, CardContent, Grid } from "@material-ui/core";

class LabTestWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
          <Grid container spacing={24}>
            <Grid item md={4} >
              <Card>
                <CardContent>
                  <Typography variant="title" color="inherit">
                    Laboratory Test
                  </Typography>
                  <LabTestForm />
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={5}>
              <Card>
                <CardContent>
                  <Typography padding="3*3" variant="title" color="inherit">
                    Test Fields
                  </Typography>
                  <TestFieldForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
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

export default withStyles(styles)(LabTestWrapper);
