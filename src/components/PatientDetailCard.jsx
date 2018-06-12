import React from 'react';
import { Card, CardContent, List, ListItem, Typography } from '@material-ui/core';

export default (props) => {
    const { patient } =  props;

    return (
        <Card className="patient-detail-card" >
        <CardContent>
        <Typography variant="title"> Patient Details </Typography>
        <List>
            <ListItem>
                <Typography> <span className="patient-detail-key" > Patient's HIN </span> : { patient.patientHIN }</Typography>
            </ListItem>
            <ListItem>
                <Typography> <span className="patient-detail-key" >  Name </span> : { patient.fullName } </Typography>
            </ListItem>
            <ListItem>
                <Typography> <span className="patient-detail-key" >  Gender </span> : { patient.gender } </Typography>
            </ListItem>
            <ListItem>
                <Typography> <span className="patient-detail-key" >  Date of Birth </span> : { patient.dob } </Typography>
            </ListItem>
        </List>
        </CardContent>
    </Card>
    );    
}