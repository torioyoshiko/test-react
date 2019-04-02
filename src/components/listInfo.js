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
                {this.state.projects.map( project    =>
                    <div key={project.project_name}>
                        <h2>{project.project_name}</h2>
                        <p>{project.project_description}</p>
                    </div>)}
                {/*this.state.projects.map(project => <p key={project.project_name}>{project.project_description}</p>)*/}
            </div>
        )
    }
}

export default AllInfo;

