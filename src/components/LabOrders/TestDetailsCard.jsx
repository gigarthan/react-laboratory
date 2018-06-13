import React from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@material-ui/core';

export default (props) => {
    const { test } =  props;

    return (
        <Card className="test-detail-card" >
        <CardContent>
        <Typography variant="title"> Test Details </Typography>
        <List>
            <ListItem>
                <Typography> <span className="test-detail-key" > Request Id </span> : { test._id }</Typography>
            </ListItem>
            <ListItem>
                <Typography> <span className="test-detail-key" >  Category </span> : { test.category } </Typography>
            </ListItem>
            <ListItem>
                <Typography> <span className="test-detail-key" >  Sub Category </span> : { test.subCategory } </Typography>
            </ListItem>
            <ListItem>
                <Typography> <span className="test-detail-key" >  Test Name </span> : { test.testName } </Typography>
            </ListItem>
        </List>
        </CardContent>
    </Card>
    );    
}