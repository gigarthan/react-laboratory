import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const styles = {
    card: {
        minWidth: 275,
    },

};

function SimpleCard(props) {
    const { classes } = props;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="headline" component="h1">
                        <b>Welcome To The Laboratory Information System</b>
                    </Typography>

                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);