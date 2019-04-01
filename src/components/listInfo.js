import React, {Component} from 'react'
//import {connect} from 'react-redux'
import Info from "./loadInfo";


class AllInfo extends Component {

    state = {
        projects: []
    }

    async componentDidMount () {
        const response = await fetch ("http://149.56.45.104:8000/api/getAllProjects")
        const result = await response.json()
        this.setState({projects: result.result})
    }

    render() {
        console.log(this.state.projects)
        return (
            <div className="info-block">
                <p>{this.state.projects.name}</p>
                {this.state.projects.map(project => <p key={project.project_name}>{project.project_name}</p>)}
            </div>
        )
    }
}

export default AllInfo;

