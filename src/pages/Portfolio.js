import React from 'react';
import Project from '../components/Project';

export default function Portfolio(props) {

  return (
    <div>
      <h1>
        Portfolio
      </h1>
      <ul className='list-unstyled'>
        {props.projects.map((project) => (
          <li key={project.id} className='pb-5'> 
            <Project currentProject={project} />
          </li>
        ))}
      </ul> 
    </div>
  );
}
