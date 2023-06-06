import React from 'react';
import Project from '../components/Project';


export default function Portfolio(props) {

  console.log(props);

  return (
    <div className='container d-flex'>
      <h1>
        Portfolio
      </h1>
      <ul className='list-unstyled'>
        {props.projects.map((project) => (
          <li> 
            <Project currentProject={project} />
          </li>
        ))}
      </ul> 
    </div>
  );
}
