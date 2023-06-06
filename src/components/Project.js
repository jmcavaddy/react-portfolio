import React from "react";


function Project(props) {
    console.log(props);
    const project = props.currentProject;
    return (
        <div className="container">
            <div className="card d-flex">
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
                        <strong>Deployed:</strong> {project.deployed}
                    </li>
                    <li>
                        <strong>Repo:</strong> {project.repo}
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Project;