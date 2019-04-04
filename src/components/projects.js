import React, {Component} from 'react'
import Project from "./project"
import "./css/projects.css"


class Projects extends Component {

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
                    <Project project={project} key={project.project_name}/>)}
            </div>
        )
    }
}

export default Projects;

