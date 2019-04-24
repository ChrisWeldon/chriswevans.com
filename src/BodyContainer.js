import React, { Component } from 'react';
import './App.css';
import Markdown from 'markdown-to-jsx';
const ReactMarkdown = require('react-markdown')

export class BodyContainer extends Component{
  constructor(props){
    super(props)
    this.data = this.props.data
    this.mdsource = null
    console.log(Object.keys(this.data))
    fetch('./README.md')//this.data.projects[1].url_readme
    .then(response=>response.text())
    .then(function(data){
      this.mdsource = data
      console.log(data)
    }.bind(this))
  }

  render(){
      console.log(Object.keys(this.data))
      if(Object.keys(this.data.projects).length != 0){
        fetch('./README.md')//this.data.projects[1].url_readme
        .then(response=>response.text())
        .then(function(data){
          this.mdsource = data
        }.bind(this))
      }

    switch(this.props.open){
      case "about_me":
        return(
          <div>
            <img src="./pics/SA_CHALK.JPG" class="keyboard-pic" alt="SA Chalk DZ60"/>
            <img src="./pics/Tada68.JPG" class="keyboard-pic" alt="SA Chalk DZ60"/>
          </div>
        )
        break;
      case "projects":
        return(
          <div class="row">
            <div class="col-2">
              <ul class="projects-nav nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">chriswevans.com</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Augury</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">HomeworkHelper</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">BeyWatch</a>
                </li>
              </ul>
            </div>
            <div class="markup-pane col-8">
              <ReactMarkdown source={this.mdsource} escapeHtml={false}/>
            </div>
          </div>
        )
        break;
      case "resume":
        return(
          <h3>Resume will go here, coming soon.</h3>
        )
        break;
    }
  }
}
