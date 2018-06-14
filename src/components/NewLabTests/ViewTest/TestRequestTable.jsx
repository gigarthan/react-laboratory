import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(field, gender, minAge, maxAge, minValue, maxValue, unit) {
    id += 1;
    return { field, gender, minAge, maxAge, minValue, maxValue, unit };
}

const data = [

];

function TestRequestTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Field</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell numeric>Minimum Age</TableCell>
                        <TableCell numeric>Maximum Age</TableCell>
                        <TableCell numeric>Minimum Value</TableCell>
                        <TableCell numeric>Maximum Value</TableCell>
                        <TableCell numeric>Unit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                    {n.field}
                                </TableCell>
                                <TableCell>{n.gender}</TableCell>
                                <TableCell numeric>{n.minAge}</TableCell>
                                <TableCell numeric>{n.maxAge}</TableCell>
                                <TableCell numeric>{n.minValue}</TableCell>
                                <TableCell numeric>{n.maxValue}</TableCell>
                                <TableCell numeric>{n.unit}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

TestRequestTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TestRequestTable);
