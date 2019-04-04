import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateProject from "../components/createProject";
import Projects from "../components/projects";

function AppRouter() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Projects}/>
                <Link to="/create">Create Project</Link>
                <Route path="/create" exact component={CreateProject}/>
            </div>
        </Router>
    );
}

export default AppRouter;