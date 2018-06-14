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



import  LabTestTable from './LabTestTabel';


import { getLabTests } from 'store/actions/index';
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

class LabTestWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'labs',
            columnData:  [

                'Name',
                'Sub Category Name',
                'Specimen Type',
                'Specimen Retention Type',
                'Duration'
            ]
        };


    }

    componentDidMount(){

        this.props.getLabTests();

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
                            <Tab value="testNames" label="Test Names" />
                            <Tab value="testCategories" label="Test Categories" />
                            <Tab value="testSubCategories" label="Test SubCategories" />
                        </Tabs>
                    </AppBar>
                    {value === "testNames" &&
                    <TabContainer>

                        <LabTestTable columnData={columnData} data={this.props.labs}/>
                    </TabContainer>}

                    {value === "testCategories" &&
                    <TabContainer>


                            <TextField
                                id="search"
                                label="Search Test Categories"
                                type="search"
                                className={classes.textField}
                                margin="right"
                            />


                        <LabTestTable columnData={columnData} data={this.props.labs} />


                        <Button variant="contained" color="primary" className={classes.button}>
                            Add New Test category
                        </Button>

                    </TabContainer>}
                    {value === "testSubCategories" &&
                    <TabContainer>

                        <TextField
                            id="search"
                            label="Search Test Sub Categories"
                            type="search"
                            className={classes.textField}
                            margin="right"
                        />

                        <LabTestTable columnData={columnData} data={this.props.labs} />

                        <Button variant="contained" color="primary" className={classes.button}>
                            Add New Test Sub category
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

LabTestWrapper.propTypes = {
    classes: PropTypes.object.isRequired
};



const withStylesComponent = withStyles(styles)(LabTestWrapper);


function mapStateToProps({ labTests }) {
    return { labTests };
}

const mapDispatchToProps = {getLabTests};

export default connect(mapStateToProps, mapDispatchToProps)(withStylesComponent);


