import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 30,
    }
});

function RequestButton(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" size="small" className={classes.button}>
                <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
                Save
            </Button>
        </div>
    );
}

RequestButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestButton);