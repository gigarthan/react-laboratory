import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

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

function LabTestCategoryTable(props) {
    const { classes, columnData, data } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        { columnData.map( tableHeading => {
                            return ( <TableCell>{tableHeading}</TableCell>)
                        }) }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data.map( data => {
                            return (
                                <TableRow>
                                    <TableCell>{data.name}</TableCell>
                                    {/* <TableCell>{data.subCategoryName}</TableCell> */}
                                    <TableCell>{data.specimenType}</TableCell>
                                    <TableCell>{data.specimenRetentionType}</TableCell>
                                    <TableCell>{data.duration}</TableCell>
                            

                                </TableRow>
                            );
                        } )
                    }
                </TableBody>
            </Table>
        </Paper>
    );
}

export default withStyles(styles)(LabTestCategoryTable);
