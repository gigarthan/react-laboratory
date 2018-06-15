//IT16139640


import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



import  LabManagerTable from './LabManagerTable';


import { getLabs } from 'store/actions/index';
import { connect } from 'react-redux';


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

class LabManagerWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'labs',
            columnData:  [

                'Lab Name',
                'Lab Type',
                'Department',
                'Count',
                'Lab Incharge',
                'Location',
                'Contact 1',
                'Contact 2'
            ]
        };


    }

    componentDidMount(){

        this.props.getLabs();

    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        const { columnData } = this.state;


        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs value={value} onChange={this.handleChange}>
                            <Tab value="labTypes" label="Lab Types" />
                            <Tab value="LabDepartments" label="Laboratory Departments" />
                            <Tab value="Labs" label="Laboratories" />
                        </Tabs>
                    </AppBar>
                    {value === "labTypes" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Lab Types"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />


                        <LabManagerTable columnData={columnData} data={this.props.labs}/>

                        <Button variant="contained" color="primary" className={classes.button}>
                            Add New Lab Test
                        </Button>


                    </TabContainer>}
                    {value === "LabDepartments" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Lab Departments"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />


                        <LabManagerTable columnData={columnData} data={this.props.labs} />

                        <Button variant="contained" color="primary" className={classes.button}>
                            Add New Lab Department
                        </Button>


                    </TabContainer>}
                    {value === "Labs" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Labs"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />


                        <LabManagerTable columnData={columnData} data={this.props.labs} />

                        <Button variant="contained" color="primary" className={classes.button}>
                            Add New Lab
                        </Button>



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

LabManagerWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(LabManagerWrapper);


function mapStateToProps({ labs }) {
    return { labs };
}

const mapDispatchToProps = {getLabs};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);


