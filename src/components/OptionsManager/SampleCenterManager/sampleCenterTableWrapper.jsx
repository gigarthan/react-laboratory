//IT16139640


import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';


import SampleCenterTable from './sampleCenterTable';
//import sampleCenterTypeTable from '../SampleCenterManager/sampleCenterTypeTable';


function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class sampleCenterTableWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'sampleCenterTypes',
            columnData:  [
                'Sample Center Type',
                'Sample Center Name',
                'Incharge',
                'Location',
                'Email',
                'Contact 1',
                'Contact 2'
            ]
        };
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { columnData } = this.state;

        const tableCellData = [
            { sampleCenterType: 'type1' ,
             sampleCenterName: 'name' ,
             inCharge: 'dd' ,
             location: 'cmb' ,
             email: 'l@gmail' ,
             contact1: '1234567891' ,
             contact2: '888888' }
        ];

        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab value="sampleCenterTypes" label="Sample Center Types" />
                            <Tab value="SampleCenters" label="Sample Centers" />
                        </Tabs>
                    </AppBar>
                    {value === "sampleCenterTypes" &&
                    <TabContainer>
                        <sampleCenterTypeTable columnData={columnData} data={tableCellData} />
                    </TabContainer>}
                    {value === "SampleCenters" &&
                    <TabContainer>
                        <h1>TABLE</h1>
                        <SampleCenterTable columnData={columnData} data={tableCellData} />
                    </TabContainer>}


                </div>
            </div>
        );
    }
}





const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

sampleCenterTableWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(sampleCenterTableWrapper);

