import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from "@material-ui/core/AppBar";

import PatientDetailsCard from '../TestOrder/PatientDetailsCard';
import RequesteeDetailsCard from '../TestOrder/RequesteeDetailsCard';
import RequestedTestDetailsCard from '../TestOrder/RequestedTestDeatilsCard';

function TabContainer(props) {
    return (
        <Typography component="div">
            {props.children}
        </Typography>

    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        //padding: theme.spacing.unit ,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="title" color="inherit">
                                    Patient Details
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <TabContainer>
                            <PatientDetailsCard />
                        </TabContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="title" color="inherit">
                                    Request Details
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <TabContainer>
                            <RequesteeDetailsCard />
                        </TabContainer>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="title" color="inherit">
                                   Test Details
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <TabContainer>
                            <RequestedTestDetailsCard />
                        </TabContainer>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);