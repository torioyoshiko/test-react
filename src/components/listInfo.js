import React, {Component} from 'react'
import {connect} from 'react-redux'
import getInfo from "../actions/info";
import Info from "loadInfo";


class AllInfo extends Component {
    componentDidMount() {
        this.props.getInfo()
    }

    render() {
        return (
            <div className="info-block">
                <p>
                    {this.props.info.map(post => <Info key={post.id} post={post}/>)}
                </p>
            </div>
        )
    }
}

