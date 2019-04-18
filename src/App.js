import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BodyContainer} from './BodyContainer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'data': {},
      'open': 'about_me'
    }
  }

  componentDidMount(){
    fetch('./data.json')
      .then(response=>response.json())
      .then(data=>this.setState({'data':data}))
  }

  openBodyContainer(open){
    if(this.state.open != open){
      this.setState({'open':open})
    }

  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div class="app-top-bar">
        </div>
        <div class="jumbotron jumbotron-fluid masthead">
          <div class="container">
            <div class="row">
              <div class="col-5">
                <h1 class="display-4">{this.state.data.name}, {this.state.data.age}</h1>
                <p class="lead">{this.state.data.location}</p>
                <nav class="custom-nav navbar navbar-expand-lg navbar-light justify-content-center">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                      <a class="nav-item nav-link" href="https://github.com/ChrisWeldon"><img src="web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
                      <a class="nav-item nav-link" href="https://www.linkedin.com/in/christopher-e-594b63128/"><img src="web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
                      <a class="nav-item nav-link" onClick={() => this.openBodyContainer('about_me')} href="#">About Me</a>
                      <a class="nav-item nav-link" onClick={() => this.openBodyContainer('projects')} href="#">Projects</a>
                      <a class="nav-item nav-link" onClick={() => this.openBodyContainer('resume')} href="#">Résumé</a>
                    </div>
                  </div>
                </nav>
              </div>
              <div class="col-5 profile-pic-column justify-content-center">
                <img src={this.state.data.profile_img} class="rounded-circle profile-pic allign-middle" alt="Chris Evans"/>
              </div>
            </div>
          </div>
        </div>
        <div class="body container">
          <BodyContainer open={this.state.open} data={this.state.data}/>
        </div>
        <nav class="row app-bot-bar">

        </nav>
      </div>
    );
  }
}

export default App;
