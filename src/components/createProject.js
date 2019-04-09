import React, {Component} from 'react';
import "./css/createProject.css"

class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state)
    }

    handleChange2(event) {
        this.setState({value: event.target.value});
        console.log(this.state)
    }

    handleSubmit(event) {
        console.log("form was submitted");
    }

    render() {
        return (
            <div className="create-project">
                <h2>Start Project</h2>
                <p>Project name</p>
                <input onChange={this.handleChange}/>
                <p>Brief</p>
                <input onChange={this.handleChange2}/>
                <button onClick={this.handleSubmit}>Create</button>
            </div>
        )
    }
}

export default CreateProject;