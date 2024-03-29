import React, {Component} from 'react';
import "./css/createProject.css"
//import axios from "axios"


class CreateProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: 'first@gmail.com',
            userPassword: 'qwerty',
            value: '',
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state)
    }

    handleChange2(event) {
        this.setState({description: event.target.value});
        console.log(this.state)
    }

    handleSubmit(event) {
        const {userEmail, userPassword, value, description} = this.state;
        const url = 'http://149.56.45.104:8000/api/createProject?userEmail=first@gmail.com&userPassword=qwerty&projectName=firstProject&projectDescription=description';
        const params = {userEmail, userPassword, projectName: value, projectDescription: description};

        const esc = encodeURIComponent;
        const query = Object.keys(params)
            .map(key => esc(key) + '=' + esc(params[key]))
            .join('&');

        fetch(`${url}?${query}`);

    }

    render() {
        return (
            <div className="create-project">
                <h2>Start Project</h2>
                <div className="create-form">
                    <p>Project name</p>
                    <input onChange={this.handleChange}/>
                    <p>Brief</p>
                    <input onChange={this.handleChange2}/>
                    <button onClick={this.handleSubmit}>Create</button>
                </div>
            </div>
        )
    }
}

export default CreateProject;