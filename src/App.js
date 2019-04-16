import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="jumbotron jumbotron-fluid masthead">
          <div class="container">
            <h1 class="display-4">Christopher W. Evans</h1>
            <p class="lead">Portland, Maine</p>
            <nav class="custom-nav navbar navbar-expand-lg navbar-light justify-content-center">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="#">About Me <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">Projects</a>
                  <a class="nav-item nav-link" href="#">Résumé</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
