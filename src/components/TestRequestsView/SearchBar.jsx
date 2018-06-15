import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class SearchBar extends Component {
    render() {
        const {search, value} = this.props;

        return (
            <input
                className="form-control"
                placeholder = "Search"
                onChange={(e) => search(e.target.value)}
                value={value}/>

        );
    }
}


export default (SearchBar);