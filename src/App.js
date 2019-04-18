import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log(this.data)
    this.state = {
      'data': {}
    }
  }

  componentDidMount(){
    fetch('./data.json')
      .then(response=>response.json())
      .then(data=>this.setState({'data':data}))
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
                      <a class="nav-item nav-link active" href="#">About Me <span class="sr-only">(current)</span></a>
                      <a class="nav-item nav-link" href="#">Projects</a>
                      <a class="nav-item nav-link" href="#">Résumé</a>
                      <a class="nav-item nav-link" href="#"><img src="web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
                      <a class="nav-item nav-link" href="#"><img src="web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
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
          <p>Gaiman's family is of Polish Jewish and other Eastern European Jewish origins;[8] his great-grandfather emigrated from Antwerp, Belgium, to the UK before 1914[9] and his grandfather eventually settled in the south of England in the Hampshire city of Portsmouth and established a chain of grocery stores. His father, David Bernard Gaiman, worked in the same chain of stores;[10] his mother, Sheila Gaiman (née Goldman), was a pharmacist. He has two younger sisters, Claire and Lizzy.[11]

After living for a period in the nearby town of Portchester, Hampshire, where Neil was born in 1960, the Gaimans moved in 1965 to the West Sussex town of East Grinstead, where his parents studied Dianetics at the Scientology centre in the town; one of Gaiman's sisters works for the Church of Scientology in Los Angeles. His other sister, Lizzy Calcioli, has said, "Most of our social activities were involved with Scientology or our Jewish family. It would get very confusing when people would ask my religion as a kid. I'd say, 'I'm a Jewish Scientologist.'" Gaiman says that he is not a Scientologist, and that like Judaism, Scientology is his family's religion.[12] About his personal views, Gaiman has stated, "I think we can say that God exists in the DC Universe. I would not stand up and beat the drum for the existence of God in this universe. I don't know, I think there's probably a 50/50 chance. It doesn't really matter to me."[13]

Gaiman was able to read at the age of four. He said, "I was a reader. I loved reading. Reading things gave me pleasure. I was very good at most subjects in school, not because I had any particular aptitude in them, but because normally on the first day of school they'd hand out schoolbooks, and I'd read them—which would mean that I'd know what was coming up, because I'd read it."[14] When he was about ten years old, he read his way through the works of Dennis Wheatley, where especially The Ka of Gifford Hillary and The Haunting of Toby Jugg made an impact on him.[15] One work that made a particular impression on him was J. R. R. Tolkien's The Lord of the Rings from his school library, although it only had the first two volumes of the novel. He consistently took them out and read them. He would later win the school English prize and the school reading prize, enabling him to finally acquire the third volume.[16]

For his seventh birthday, Gaiman received C. S. Lewis's The Chronicles of Narnia series. He later recalled that "I admired his use of parenthetical statements to the reader, where he would just talk to you ... I'd think, 'Oh, my gosh, that is so cool! I want to do that! When I become an author, I want to be able to do things in parentheses.' I liked the power of putting things in brackets."[16] Narnia also introduced him to literary awards, specifically the 1956 Carnegie Medal won by the concluding volume. When Gaiman won the 2010 Medal himself, the press reported him recalling, "it had to be the most important literary award there ever was"[6] and observing, "if you can make yourself aged seven happy, you're really doing well – it's like writing a letter to yourself aged </p>
        </div>
        <nav class="row app-bot-bar">
          <a class="nav-item nav-link" href="#"><img src="web_icons/GitHub-Mark-120px-plus.png" class="social-media" alt="Github"/></a>
          <a class="nav-item nav-link" href="#"><img src="web_icons/In-Black-128px-R.png" class="social-media" alt="Github"/></a>
        </nav>
      </div>
    );
  }
}

export default App;
