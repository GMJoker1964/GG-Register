<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import React from 'react';
import { ReactDOM } from 'react-dom';
import GoogleLogin from 'react-google-login';
import Login from './conponent/Login';
import Logout from './conponent/Logout';


function App(props) {
  return (
    <div>
      <Login />
      <Logout />
>>>>>>> 1e53810 (Finish small part of login and logout)
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 1e53810 (Finish small part of login and logout)
