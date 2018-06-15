import React from 'react';
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

function LabManagerTable(props) {
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
                                <TableRow key={data.name}>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.labTypes}</TableCell>
                                    <TableCell>{data.department}</TableCell>
                                    <TableCell>{data.count}</TableCell>
                                    <TableCell>{data.labInCharge}</TableCell>
                                    <TableCell>{data.location}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.contact1}</TableCell>
                                    <TableCell>{data.contact2}</TableCell>


                                    <TableCell><Button variant="contained" color="primary" className={classes.button}>
                                        Edit
                                    </Button>
                                    </TableCell>

                                </TableRow>
                            );
                        } )
                    }
                </TableBody>
            </Table>
        </Paper>
    );
}





export default withStyles(styles)(LabManagerTable);
