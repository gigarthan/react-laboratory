import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Calender from './CalenderCard';
import HeadingCard from './HeadingCard';
import DetailsCard from './DetailsCard'


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
                <Grid item xs={3} sm={5}>
                    <Paper className={classes.paper}>
                        <TabContainer>
                            <Calender />
                        </TabContainer>
                    </Paper>
                </Grid>
                <Grid item xs={2} sm={6}>
                    <Paper className={classes.paper}>
                        <TabContainer>
                            <HeadingCard />
                        </TabContainer>
                    </Paper>
                    <br/><br/><br/><br/>
                    <Divider/>
                    <Paper className={classes.paper}>
                        <TabContainer>
                            <DetailsCard />
                        </TabContainer>
                    </Paper>
                </Grid>
                <Grid item  xs={6} sm={6}>
                    {/*<Paper className={classes.paper}>
                        <TabContainer>
                            <DetailsCard />
                        </TabContainer>
                    </Paper>*/}
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
