import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import RequesteeForm from './RequesteeForm'

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
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function SimpleCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <TabContainer>
                        <RequesteeForm />
                    </TabContainer>
                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);