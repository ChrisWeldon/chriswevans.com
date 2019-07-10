import ReactDOM from 'react-dom'
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import {Navbar, NavDropdown, Button, Nav, Form, FormControl, Spinner} from 'react-bootstrap'
import React, { Component, useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import logo from './logo.svg';
import './App.css';
import {BodyContainer} from './BodyContainer.js'
const ReactMarkdown = require('react-markdown')
const Discord = require('discord.js')


class About extends Component{
  constructor(props){
    super(props)
    // console.log("About constructor: ", this.props)
    // this.data = this.props.data
  }

  render(){
    return (
      <div className="body-column">
        <div class="row about-row row-top justify-content-center">
          <div class="jumbotron jumbotron-fluid about-header">
            <div class="container-fluid">
              <h3 class="display-5">About Me</h3>
              <hr/>
              <p>{this.props.data.description}</p>
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
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      'data': {
        'projects':[]
      },
      'open': 'about_me',
      'readme': "https://raw.githubusercontent.com/ChrisWeldon/Beywatch/master/README.md",
      'readmedata':null
    }

    this.handleProjectChange = this.handleProjectChange.bind(this)
  }


  componentDidMount(){
    //TODO separate README file from data get
    console.log("CALL: componentDidMount")
    fetch(this.state.readme)
      .then(response=>response.text())
      .then(function(readmedata){
        fetch('/data.json')
        .then(response=>response.json())
        .then(data=>this.setState({'data':data, "readmedata":readmedata}))
      }.bind(this))

    // fetch('data.json')
    //   .then(response=>response.json())
    //   .then(function(data){
    //     console.log(data)
    //     this.setState({data:data})
    //   }.bind(this))
  }

  componentDidUpdate(){
    console.log("CALL: componentDidUpdate")
    // fetch('/data.json')
    // .then(response=>response.json())
    // .then(data=>this.setState({'data':data}))
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

  state = { modalIsOpen: false};
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };

  openLightbox = (event, {photo, index}) => {
    this.setState(state => ({modalIsOpen: !state.modalIsOpen , currentImage:index}))
  }

  render() {
    const { modalIsOpen } = this.state;

    return (
      <div className="App">
        <div class="app-top-bar">
        </div>
        <div class="jumbotron jumbotron-fluid masthead">
          <div class=" masthead-container justify-content-center container">
            <div class="row  align-items-center">
              <div class="col-md-5 align-items-center">
                <h1 class="name-head display-4">{this.state.data.name}, {this.state.data.age}</h1>
                <p class="lead">{this.state.data.location}</p>
                <Navbar class="primary-nav"  expand="lg">
                  <Nav className="desk-nav primary-nav mr-auto">
                    <a class="nav-item nav-link" href="https://github.com/ChrisWeldon"><img src="/web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
                    <a class="nav-item nav-link" href="https://www.linkedin.com/in/christopher-e-594b63128/"><img src="/web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
                    <a class="nav-item nav-link" href="https://www.instagram.com/cwevans612/"><img src="/web_icons/instagram.png" class="social-media" alt="Github"/></a>
                    <Link class = "nav-item nav-link" to="/about" >About</Link>
                    <Link class = "nav-item nav-link" to="/projects" >Projects</Link>
                    <Link class = "nav-item nav-link" to="/resume" >Résumé</Link>
                    <Link class = "nav-item nav-link" to="/gallery" >Gallery</Link>
                  </Nav>
                </Navbar>
              </div>
              <div class="col-md-5 profile-pic-column justify-content-center">
                <img src={this.state.data.profile_img} class="rounded-circle profile-pic allign-middle" alt="Chris Evans"/>
              </div>
            </div>
          </div>
          <Navbar class=""  expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mobile-nav flex-wrap primary-nav mr-auto">
                <a class="nav-item nav-link" href="https://github.com/ChrisWeldon"><img src="/web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
                <a class="nav-item nav-link" href="https://www.linkedin.com/in/christopher-e-594b63128/"><img src="/web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
                <a class="nav-item nav-link" href="https://www.instagram.com/cwevans612/"><img src="/web_icons/instagram.png" class="social-media" alt="Github"/></a>
                <Link class = "nav-item nav-link" to="/about" >About</Link>
                <Link class = "nav-item nav-link" to="/projects" >Projects</Link>
                <Link class = "nav-item nav-link" to="/resume" >Résumé</Link>
                <Link class = "nav-item nav-link" to="/gallery" >Gallery</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div class="body container-fluid body-container">
          <Route exact path="/" render={()=>(
            <Redirect to="/about"/>
          )}/>
          <Route path="/about" render = {() => (
            <About data={this.state.data}/>
          )}
          />
          <Route exact path="/projects" render={({match})=>(
            <Redirect to ={match.url + "/Beywatch"}/>
          )}/>
          <Route path="/projects" render = {({match}) => (
            <>
            <Navbar className="" bg="light" expand="lg">
              <Nav className="flex-wrap secondary-nav mr-auto">
                <Link class="nav-link" to={match.url + "/chriswevans.com"}>chrisevans.com</Link>
                <Link class="nav-link" to={match.url + "/Augury"}>Augury</Link>
                <Link class="nav-link" to={match.url + "/Beywatch"}>beybladematch.com</Link>
              </Nav>
            </Navbar>

            <Route path={match.url + "/:project"} render={function({match}){
              if(this.state.project != match.params.project){
                fetch("https://raw.githubusercontent.com/ChrisWeldon/" +match.params.project+"/master/README.md")
                  .then(function(response){
                    if(response.status != 200){
                      throw new Error("response not 200")
                    }else{
                      return(response.text())
                    }
                  })
                  .then(data=>this.setState({project:match.params.project, projectreadme:data}))
                  .catch(function(err){
                    fetch("/private_markdowns/"+match.params.project+".md")
                          .then(response=>response.text())
                          .then(data=>this.setState({project:match.params.project, projectreadme:data}))
                  }.bind(this))

                return(
                  <>
                  <h2>Loading...</h2>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  </>
                )
              }else{
                return(
                  <div class="markup-row row justify-content-center">
                    <div class="markup-pane col-md-8" id="markdown-holder">
                      <ReactMarkdown source={this.state.projectreadme} escapeHtml={false} />
                    </div>
                  </div>
                )
              }
            }.bind(this)}/>
            </>
          )}/>
          <Route path="/resume" render = {()=>(
            <div>
              <h3 className="row justify-content-center"><a href="./Resume.pdf">www.chriswevans.com/Resume.pdf</a></h3>
              <div className="resume-div row justify-content-center">
                <object className="resume row" data="./Resume.pdf" type="application/pdf">
                  <embed src="./Resume.pdf" type="application/pdf"/>
                </object>
              </div>
            </div>
          )}/>
          <Route exact path="/gallery" render={()=>(
            <Redirect to="/gallery/All"/>
          )}/>
          <Route path="/gallery" render = {({match})=>(
            <>
            <Navbar className="" bg="light" expand="lg">
              <Nav className="flex-wrap secondary-nav mr-auto">
                <Link class="nav-link" to={match.url + "/All"}>All</Link>
                <Link class="nav-link" to={match.url + "/NiigataShrine"}>Niigata Shrine</Link>
                <Link class="nav-link" to={match.url + "/KiteFighting"}>Kite Fighting</Link>
              </Nav>
            </Navbar>

            <Route path={match.url + "/:album"} render = {function({match}){
              if(this.state.album != match.params.album){
                fetch("/pics/gallery/" + match.params.album + "/ratios.json")
                  .then(response=>response.json())
                  .then(data=>this.setState({album:match.params.album, photos:data}))
                return(
                  <>
                  <h2>Loading...</h2>
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                  </>
                )
              }else{
                return(
                  <>
                  <Gallery photos={this.state.photos} onClick={this.openLightbox}/>
                  <ModalGateway>
                    {modalIsOpen ? (
                      <Modal onClose={this.toggleModal}>
                        <Carousel views={this.state.photos} currentIndex={this.state.currentImage} />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                  </>
                )
              }
            }.bind(this)}/>
            </>
          )}/>
        </div>
        <footer class="app-bot-bar text-center">
          <div class="d-flex justify-content-center">
            <a class="nav-item nav-link" href="https://github.com/ChrisWeldon"><img src="/web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
            <a class="nav-item nav-link" href="https://www.linkedin.com/in/christopher-e-594b63128/"><img src="/web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
            <a class="nav-item nav-link" href="https://www.instagram.com/cwevans612/"><img src="/web_icons/instagram.png" class="social-media" alt="Github"/></a>
          </div>
          <p>Website designed and built by Chris Evans.
          Code License <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank" rel="license noopener">MIT</a>
          , docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>
          </p>
          <p>All photos are protected under Copywrite.</p>
        </footer>
      </div>
    );
  }
}
export default App;
