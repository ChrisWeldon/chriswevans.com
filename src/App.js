import ReactDOM from 'react-dom'
import { Link, Route, Redirect, Switch } from 'react-router-dom';
import {Navbar, NavDropdown, Button, Nav, Form, FormControl, Spinner, Row, Col, Image} from 'react-bootstrap'
import React, { Component, useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";
import logo from './logo.svg';
import './App.css';
import {BodyContainer} from './BodyContainer.js'
const ReactMarkdown = require('react-markdown')
const Discord = require('discord.js')

// <Link class="nav-link" to={match.url + "/MTGForcasting"}>ARIMA on MTG</Link>

class About extends Component{
  constructor(props){
    super(props)
    // console.log("About constructor: ", this.props)
    // this.data = this.props.data
  }

  render(){
    if(false){
      return(
        <>
      <div class="row about-row bowling-row justify-content-center">
        <div class="d-flex flex-column justify-content-center">
        </div>
      </div>
      <div class="row about-row programming-row justify-content-center">
        <div class="d-flex flex-column justify-content-center">
        </div>
      </div>
      <div class="row about-row keyboard-row justify-content-center">
        <div class="d-flex flex-column justify-content-center">
        </div>
      </div>
      <div class="row about-row painting-row justify-content-center  bottom-row">
        <div class="d-flex flex-column justify-content-center">
        </div>
      </div>
      </>
    )
    }
    return (
      <div className="about-body">
        <div class="about-text container">
          <Row>
            <Col>
            </Col>
            <Col xs={8} md={4}>
              <Image src={this.props.data.profile_img} class="allign-middle" alt="Chris Evans" roundedCircle/>
            </Col>
            <Col>
            </Col>
          </Row>
          <h3 class="display-5">About Me</h3>
          <hr/>
          <p>{this.props.data.description}</p>
        </div>
      </div>
    )
  }
}

class MainNav extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (<>
      </>)
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
          <div class="masthead-container justify-content-center container">
            <Row>
              <h1 class="name-head display-4">{this.state.data.name}, {this.state.data.age}</h1>
            </Row>
            <Row>
              <p class="lead">{this.state.data.location}</p>
            </Row>
            <Row class="mt-2">
              <Navbar >
                <Nav className="flex-wrap desk-nav mr-auto">
                  <span className="d-flex flex-direction-row">
                    <a class="nav-item nav-link" href="https://github.com/ChrisWeldon"><img src="/web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
                    <a class="nav-item nav-link" href="https://www.linkedin.com/in/christopher-e-594b63128/"><img src="/web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
                    <a class="nav-item nav-link" href="https://www.instagram.com/cwevans612/"><img src="/web_icons/instagram.png" class="social-media" alt="Github"/></a>
                  </span>
                  <span  className="d-flex flex-direction-row flex-wrap">
                    <Link class = "nav-item nav-link" to="/about" >About</Link>
                    <Link class = "nav-item nav-link" to="/projects" >Projects</Link>
                    <Link class = "nav-item nav-link" to="/resume" >Résumé</Link>
                    <Link class = "nav-item nav-link" to="/gallery" >Gallery</Link>
                  </span>
                </Nav>
              </Navbar>
            </Row>
          </div>

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
                <Link class="nav-link" to={match.url + "/GarminMinimalVenuWatchface"}>Colors.MC + Minimalist Watchface</Link>
                <Link class="nav-link" to={match.url + "/MTG-Plays-Frontend"}>MTG Plays Redux Client</Link>
                <Link class="nav-link" to={match.url + "/MTG-Database-API"}>MTG Database API</Link>
                <Link class="nav-link" to={match.url + "/chriswevans.com"}>chriswevans.com</Link>
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
                  <embed className="resume-embed" src="./Resume.pdf" type="application/pdf"/>
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
                <Link class="nav-link" to={match.url + "/Iwakuni"}>Iwakuni</Link>
                <Link class="nav-link" to={match.url + "/Tosho-Gu"}>Tosho-Gu</Link>
                <Link class="nav-link" to={match.url + "/Hokkaido"}>Hokkaido</Link>
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
          <p>&copy; Chris Evans.
          Code License <a href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank" rel="license noopener">MIT</a>
          , docs <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="license noopener">CC BY 3.0</a>
          </p>
<<<<<<< HEAD
=======
          <p>All photos are protected under Copyright.</p>
>>>>>>> eaa51ae37d5f03506b58d9b50d47450f56ba03a4
        </footer>
      </div>
    );
  }
}
export default App;
