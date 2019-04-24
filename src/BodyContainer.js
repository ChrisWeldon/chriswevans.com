import React, { Component } from 'react';
import './App.css';
import Markdown from 'markdown-to-jsx';
const ReactMarkdown = require('react-markdown')

export class BodyContainer extends Component{
  constructor(props){
    console.log("BODY CONTAINER CONSTRUCTED")
    super(props)
    this.data = this.props.data
    this.mdsource = null
  }

  render(){
    this.data = this.props.data
    console.log("BODY CONTAINER RENDERED")
    //TODO make it render based on project, can do later
      if(Object.keys(this.data.projects).length != 0){
        fetch(this.data.projects[0].url_readme)//this.data.projects[1].url_readme
        .then(response=>response.text())
        .then(function(data){
          this.mdsource = data
        }.bind(this))
        console.log("MD FETCHED IN RENDER")
      }

    switch(this.props.open){
      case "about_me":
        return(
          <div>
            <div class="row">
              About Me
            </div>
            <div class="row">
              <img src="./pics/SA_CHALK.JPG" class="about-pic" alt="SA Chalk DZ60"/>
              I love to assemble keyboards,
            </div>
            <div class="row">
              <img src="./pics/Tada68.JPG" class="about-pic" alt="Tada68"/>
              I love to Bowl,
            </div>
            <div class="row">
              <img src="./pics/Tada68.JPG" class="about-pic" alt="SA Chalk DZ60"/>
              and I love to Program.
            </div>
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
          <h3>Resume will go here, just need to write it.</h3>
        )
        break;
    }
  }
}
