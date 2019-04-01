import React, { Component } from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
    return {
        info: state
    }
}
export default connect(mapStateToProps)(Info)