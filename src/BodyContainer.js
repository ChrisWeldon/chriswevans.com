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
              <div class="jumbotron jumbotron-fluid about-header">
                <div class="container">
                  <h3 class="display-5">About Me</h3>
                  <hr/>
                  <p>I was born and raised in Portland Maine, and attended highschool at the Maine School of Science and Mathematics in Limestone. After graduating Highschool and attending a summer long intership at Tilson Tech,
                  I was offered a fulltime position. Two weeks before classes were scheduled to start, I made an abrupt change of plans and took a gap year. During my gap year, I dedicated my free time to fun and enjoyable pastimes:</p>
                </div>
              </div>
            </div>
            <div class="row about-row bowling-row justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <h3>I Love Bowling,</h3>
              </div>
            </div>
            <div class="row about-row programming-row justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <h3>I Love Programming,</h3>
              </div>
            </div>
            <div class="row about-row keyboard-row justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <h3>I Love Building Keyboards,</h3>
              </div>
            </div>
            <div class="row about-row painting-row justify-content-center  bottom-row">
              <div class="d-flex flex-column justify-content-center">
                <h3>and I Love Painting</h3>
              </div>
            </div>
          </div>
        )
        break;
      case "projects":
        return(
          <div class="row">
            <div class="col-2">
              <ul class="projects-nav nav flex-column">
              Working on docs for disabled links
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
