import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BodyContainer} from './BodyContainer.js'
const ReactMarkdown = require('react-markdown')
const Discord = require('discord.js')


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'data': {
        'projects':[]
      },
      'open': 'about_me',
      'readme': "https://raw.githubusercontent.com/ChrisWeldon/chriswevans.com/master/README.md",
      'readmedata':null
    }

    this.handleProjectChange = this.handleProjectChange.bind(this)
  }


  componentDidMount(){
    fetch(this.state.readme)
      .then(response=>response.text())
      .then(function(readmedata){
        fetch('./data.json')
        .then(response=>response.json())
        .then(data=>this.setState({'data':data, "readmedata":readmedata}))
      }.bind(this))

  }

  openBodyContainer(e, open){
    e.preventDefault()
    if(this.state.open != open){
      this.setState({'open':open})
    }

  }

  handleProjectChange(url){
    fetch(url)
      .then(response=>response.text())
      .then(function(data){this.setState({'readme':url, 'readmedata': data})}.bind(this))
  }

  render() {
    return (
      <div className="App">
        <div class="app-top-bar">
        </div>
        <div class="jumbotron jumbotron-fluid masthead">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <h1 class="name-head display-4">{this.state.data.name}, {this.state.data.age}</h1>
                <p class="lead">{this.state.data.location}</p>
              </div>
              <div class="col-md-5 profile-pic-column justify-content-center">
                <img src={this.state.data.profile_img} class="rounded-circle profile-pic allign-middle" alt="Chris Evans"/>
              </div>
            </div>
            <nav class="custom-nav navbar navbar-expand-lg  flex-lg-row">
              <div class="navbar" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link" href="https://github.com/ChrisWeldon"><img src="web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
                  <a class="nav-item nav-link" href="https://www.linkedin.com/in/christopher-e-594b63128/"><img src="web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
                  <a class="nav-item nav-link" onClick={(e) => this.openBodyContainer(e,'about_me')} href="/About-me">About</a>
                  <a class="nav-item nav-link" onClick={(e) => this.openBodyContainer(e,'projects')} href="/Projects">Projects</a>
                  <a class="nav-item nav-link" onClick={(e) => this.openBodyContainer(e,'resume')} href="/Resume">Résumé</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div class="body container">
          <BodyContainer open={this.state.open} readmedata={this.state.readmedata} readme={this.state.readme} onProjectChange={this.handleProjectChange} data={this.state.data}/>
        </div>
        <footer class="app-bot-bar text-center">
          <p>All photos (excluding photos with Chris Evans as subject) were taken by Chris Evans and are protected under Copywrite.</p>
          <p>Website designed and built by Chris Evans.
          Code License <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank" rel="license noopener">MIT</a>
          , docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
