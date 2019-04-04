import React, { Component } from 'react';
import "./css/createProject.css"

class CreateProject extends Component {
    render() {
        return (
            <div className="create-project">
                <h2>Start Project</h2>
                <p>Project name</p>
                <input/>
                <p>Brief</p>
                <input/>
                <button>Create</button>
            </div>
        )
    }
}

export default CreateProject;