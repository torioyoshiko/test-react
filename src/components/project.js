import React, {Component} from 'react'
import "./css/project.css"

class Project extends Component {
    render(){

        const project = this.props.project
        console.log(project)
        return (
            <div className="project-info">
                <h2>{project.project_name}</h2>
                <p>{project.project_description}</p>
            </div>
        )
    }
}

export default Project