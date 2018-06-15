import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
//import Tabs from "@material-ui/core/Tabs";
//import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import TestFieldForm from './TestFieldForm';
import LabTestForm from './LabTestForm';
import RequestButton from './RequestButton';


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

class LabTestWrapper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                New Laboratory Test
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br/><br/><br/>

                    <Typography  variant="title" color="inherit">
                        <u>Laboratory Test</u>
                    </Typography>
                    <TabContainer>
                        <LabTestForm />
                    </TabContainer>
                    <br/><br/>
                    <Divider />

                    <br/>

                    <br/>
                    <Typography padding="3*3" variant="title" color="inherit">
                        <u>Test Fields</u>
                    </Typography>
                    <TabContainer>
                        <TestFieldForm />
                    </TabContainer>

                    <br/><br/>
                    <Divider />


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

LabTestWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LabTestWrapper);