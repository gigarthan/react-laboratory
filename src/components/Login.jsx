import React, { Component } from 'react';
import { Grid, Card, CardContent, Button } from '@material-ui/core';
import { renderTextField } from "./MaterialUi";
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signin } from 'store/actions/authentication';

class Login extends Component {
    
    submit = values => {
        this.props.signin(values, this.props.history)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Grid container justify="center" align="center" style={{'background-color': '#efefef', 'align-items': 'center', 'height':'100vh'}} >
                <Grid item md={3}>
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit(this.submit)} >
                                <Grid container spacing={24}>
                                    <Grid item md={12}>
                                        <Field name="username" label="Username" component={renderTextField} />
                                    </Grid >
                                    <Grid item md={12}>
                                        <Field name="password" label="Password" component={renderTextField} type="password" />
                                    </Grid>
                                    <Grid item md={12}>
                                        <Button type="submit" variant="contained" color="primary" fullWidth >Login</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        )
    }
}

const MyForm = reduxForm({
    form: "loginForm",
  })(Login);
  
export default connect(null, { signin })(MyForm);