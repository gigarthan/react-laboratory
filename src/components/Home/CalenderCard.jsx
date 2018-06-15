import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar-material';
import {withStyles} from "@material-ui/core/styles/index";

ReactDOM.render(
    <Calendar
        accentColor={'blue'}
        orientation={'flex-row'}
        showHeader={false}
        onDatePicked={(d) => {
            //console.log('onDatePicked', d);
        }}/>,
    document.getElementById('root')
);


export default (Calendar);