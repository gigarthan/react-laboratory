import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
                    <Typography variant="headline" component="h5">
                        Laboratory information system is an automated system which handles most of the major functionalities that is
                        available in the healthcare sector and LIS- Laboratory Information system is a component of HIS which is
                        distinctive software and plays a critical role in the detection, and diagnosis phases.
                        The systems capable of handling laboratory test requests of external hospitals and sample centers,
                        regional, franchised path and referral laboratories.
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