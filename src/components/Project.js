import React from "react";


function Project(props) {

    const project = props.currentProject;

    return (
        <div className="container d-flex">
            <div className="container card d-flex">
                <div className="img-container">
                    <img alt={project.name} src={project.image} className="img-thumbnail" />
                </div>
                <div className="content">
                    <ul>
                    <li>
                        <strong>Name:</strong> {project.title}
                    </li>
                    <li>
                        <strong>Description:</strong> {project.description}
                    </li>
                    <li>
                        <strong>Deployed:</strong> <a href={project.deployed}>Deployed</a>
                    </li>
                    <li>
                        <strong>Repo:</strong> <a href={project.repo}>Repo</a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;