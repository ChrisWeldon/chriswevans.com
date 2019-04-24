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
              <p>I grew up in Portland, Maine. Attended Highschool at the Maine School of Science and Mathematics in Limestone.
                As my gap year working at Tilson Tech Management concludes, I am preparing for a month long trip to Japan and the following year at university where I will be studying Computer Science.</p>
            </div>
            <div class="row about-row">
              <div class="col-md-8 d-flex flex-column align-items-center justify-content-center">
                <h4>I Love Bowling</h4>
              </div>

              <div class="col-md-4">
                <img class="img-fluid rounded" src="./pics/SACHALK_tilt.JPG"/>
              </div>
            </div>
            <div class="row about-row">
              <div class="col-md-4">
                <img class="img-fluid rounded" src="./pics/DESK2.JPG"/>
              </div>
              <div class="col-md-8 d-flex flex-column align-items-center justify-content-center">
                <h4>I Love Programming</h4>
              </div>
            </div>
            <div class="row about-row">
              <div class="col-md-8 d-flex flex-column align-items-center justify-content-center">
                <h4>I Love Painting</h4>
              </div>
              <div class="col-md-4">
                <img class="img-fluid rounded" src="./pics/PAINTING.JPG"/>
              </div>
            </div>
            <div class="row about-row bottom-row">
              <div class="col-md-4">
                <img class="img-fluid rounded" src="./pics/SA_CHALK.JPG"/>
              </div>
              <div class="col-md-4 d-flex flex-column align-items-center justify-content-center">
                <h4>Here are my Keyboards</h4>
              </div>
              <div class="col-md-4">
                <img class="img-fluid rounded" src="./pics/Tada68.JPG"/>
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
