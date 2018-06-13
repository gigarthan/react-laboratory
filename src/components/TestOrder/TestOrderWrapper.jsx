import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';

import Details from './Request_Form';


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
                    <TabContainer>
                        <Details />
                    </TabContainer>

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

NewTestRequestFormWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewTestRequestFormWrapper);