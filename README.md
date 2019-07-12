# chriswevans.com
A website to showcase, my projects, my resume, and me. All of the code for this site can be found at https://www.github.com/ChrisWeldon/chriswevans.com

## Overview
 - Runs on a Node.js backend with a React.js Frontend.
 - Bootstrap styling
 - Data driven for ease of updating.
 - Content outsourcing to github for automatic project page updating.
 - nginx load balancer and proxy.

## Installation

To download this code run:
```
git clone https://www.github.com/ChrisWeldon/chriswevans.com
```
Then navigate to the directory and run:
```
npm install
```
to install all the dependencies.

For dev:
```
npm start
```

When ready for deployment you can run:
```
npm run build
```
to optimize on a host service.

The website is open source so you are more than welcome to use this as a jumpoff point for your own personal sites, but please provide ample credit if you don't overhaul with your own code.

## An In Depth Review.
A more in depth review of the code.
I didn't do an in depth review of the code line-by-line because that would be too boring. I tried to follow somewhat standard practice though. This was my first in React project so if you're an experienced developer you might have a hard time understanding what the hell is going on.

### Architecture
The base of this website runs on pretty much the usual structure for React apps. All images/icons, data files (including data.json), text files, and index.html exist in the `./public` directory. The rest of the css and js files sit in the `./src` directory.

All the styling is done with Bootstrap.js to keep the front end simple and aesthetically pleasing. Bootstrap also allows for easy implementation of a mobile version without bending over backwards to ensure compatibility for all screen sizes. With that being said, my mobile version still is not all that great.

The whole webpage is designed to look like one page. So I have NGINX routing serverside, primarily because I have multiple webpages running off of the same server. Pages like "^/phpMyAdmin" are routed with NGINX and will never be seen by the end user. For chriswevans.com/ specific pages I used React-Routing to have more control over how the page looks to the user.

### Keeping Up To Date.
The main goal of this site was to host all of my personal material. So I had one main goal: make it easy to update. There are two main features that I used to do this: make all content data-driven, and avoid redundancy. Most pages will outsource their content to other platforms where I also host my content. For example, the project descriptions will outsource to github.

#### Content
`./public/data.json` holds pretty much all the content for the site such as personal info, text-content. That way, when I want to change the basic content, I don't have to completely overhaul the site just fit a couple of extra features (this also makes it easy for anyone to customize the site for themselves). With that being said, the least amount of data contained in data.json the better. Hopefully most of the data can be figured out dynamically so I don't even have to write updates.

<img src="http://chriswevans.com/pics/datajson.png" width="300">

#### Projects
Project data is fetched realtime from Github and interpreted with the React-Markdown library.

```js
renderFunction({match}){
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
}.bind(this)
```

Above is the render function for the projects route chriswevans.com/projects/:project

You might notice that there are nested fetches. This is because I have a few projects that have private repositories. Any project that gets 404'ed on Github will automatically try to reach the local files.

I cp'ed this code into the docs because I use a similar structure for the rest of the website.

```html

<Route path="/projects" render = {({match}) => (
  <Navbar className="" bg="light" expand="lg">
    <Nav className="flex-wrap secondary-nav mr-auto">
      <Link class="nav-link" to={match.url + "/chriswevans.com"}>chrisevans.com</Link>
      <Link class="nav-link" to={match.url + "/Augury"}>Augury</Link>
      <Link class="nav-link" to={match.url + "/Beywatch"}>beybladematch.com</Link>
    </Nav>
  </Navbar>

  <Route path={match.url + "/:project"} render={renderFunction()}/>

```

### Gallery

The code for the Gallery portion was very similar to the code for the projects section only instead of using React-markdown, I used React-Gallery and React-Images. I originally played with writing my own Mosaic viewer but landed on using this because I have other projects I am more interested...why reinvent the wheel.

### Resume

Also very simple page, just Iframe's into a hosted version of my resume.
