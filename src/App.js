import React from 'react';
import logo from './logo.svg';
import './App.css';

const projects = [
  {
    name: "Dynamic Dogs",
    type: "Pet Store",
    technologies: ["react", "redux", "sequelize"]
  },
  {
    name: "Stock Portfolio Manager",
    type: "financial app",
    technologies: ["react", "redux", "d3js"]
  }
]

function App() {
  const message = 'This is my Personal website'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>{message}</p>
        </p>
          <ul>
          {
            projects.map(elem => {
              return <li>
                <div>Name: {elem.name}</div>
                <div>Type: {elem.type}</div>
                <div>Technologies Used: {
                    elem.technologies.map(tech => {return tech + ", "})
                  }
                </div>
              </li>
            })
          }
          </ul>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
