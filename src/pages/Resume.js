import React from 'react';
import resume from '../assets/John_McAvaddy_Resume.pdf';


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <h3>Download my resume <a href={resume} download>here</a>!</h3>
      <h3>Languages and libraries I have worked with include the following:</h3>
      <ul>
        <li>jQuery and Bootstrap</li>
        <li>React and Handlebars</li>
        <li>Node.js</li>
        <li>Express.js, GraphQL, and Insomnia</li>
        <li>MySQL and Sequelize</li>
        <li>MongoDB and Mongoose</li>
        <li>IndexedDB</li>
        <li>Progressive Web Applications, Service Workers, and Webpack</li>
        <li>Heroku</li>
        <li>GitHub</li>
        </ul>
    </div>
  );
}


