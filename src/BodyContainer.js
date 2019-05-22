import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
const ReactMarkdown = require('react-markdown')

export class BodyContainer extends Component{
  constructor(props){
    super(props)
    this.data = this.props.data
  }

  changeProject(e, url_i){
    e.preventDefault();
    this.props.onProjectChange(this.data.projects[url_i].url_readme)
  }

  projectLinks(){
    let ret_html = []
    for(let i=0; i<this.data.projects.length;i++){
      ret_html.push(
        <li class="nav-item">
          <a class="nav-link" onClick={(e)=>this.changeProject(e, i)} href= "#">{this.data.projects[i].name}</a>
        </li>
      )
    }
    return ret_html
  }

  render(){
    this.data = this.props.data
    //TODO make it render based on project, can do later
    switch(this.props.open){
      case "about_me":
        return(
          <div className="body-column">
            <div class="row about-row row-top justify-content-center">
              <div class="jumbotron jumbotron-fluid about-header">
                <div class="container-fluid">
                  <h3 class="display-5">About Me</h3>
                  <hr/>
                  <p>{this.data.description}</p>
                </div>
              </div>
            </div>
            <div class="row about-row bowling-row justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <h3>Bowling,</h3>
              </div>
            </div>
            <div class="row about-row programming-row justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <h3>Programming,</h3>
              </div>
            </div>
            <div class="row about-row keyboard-row justify-content-center">
              <div class="d-flex flex-column justify-content-center">
                <h3>Keyboards,</h3>
              </div>
            </div>
            <div class="row about-row painting-row justify-content-center  bottom-row">
              <div class="d-flex flex-column justify-content-center">
                <h3>and Painting</h3>
              </div>
            </div>
          </div>
        )
        break;


      case "projects":
        return(
          <div class="row justify-content-center">
            <div class="col-md-2 projects-nav-column justify-content-center">
              <ul class="projects-nav nav flex-column faded-border">
                {this.projectLinks()}
              </ul>
            </div>
            <div class="markup-pane col-md-8" id="markdown-holder">
              <ReactMarkdown source={this.props.readmedata} escapeHtml={false} />
            </div>
          </div>
        )
        break;


      case "resume":
        return(
          <div>
            <h3 className="row justify-content-center"><a href="./Resume.pdf">www.chriswevans.com/Resume.pdf</a></h3>
            <div className="resume-div row justify-content-center">
              <object className="resume row" data="./Resume.pdf" type="application/pdf">
                <embed src="./Resume.pdf" type="application/pdf"/>
              </object>
            </div>
          </div>
        )
        break;
    }
  }
}
