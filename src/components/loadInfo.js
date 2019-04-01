import React, { Component } from 'react';
//import {connect} from 'react-redux';

class Info extends Component {
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}


export default Info;