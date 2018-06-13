import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
//import Tabs from "@material-ui/core/Tabs";
//import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import RequestForm_patient from './RequestForm_patient';
import RequestForm_test from './RequestForm_test';
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

class NewTestRequestFormWrapper extends Component {
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
                                Test Request Form
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br/><br/><br/>

                    <Typography  variant="title" color="inherit">
                        <u>Patient Details</u>
                    </Typography>
                    <TabContainer>
                        <RequestForm_patient />
                    </TabContainer>
                    <br/><br/>
                    <Divider />

                    <br/><br/><br/>
                    <Typography padding="3*3" variant="title" color="inherit">
                        <u>Test Details</u>
                    </Typography>
                    <TabContainer>
                        <RequestForm_test />
                    </TabContainer>
                    <br/><br/>
                    <Divider />
                    <TabContainer>
                        <RequestButton />
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

NewTestRequestFormWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewTestRequestFormWrapper);