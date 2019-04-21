# chriswevans.com
A website to showcase, my projects, my resume, and me. All of the code for this site can be found at https://www.github.com/ChrisWeldon/chriswevans.com

## Overview
 - Runs on a Node.js backend with a React.js Frontend.
 - Bootstrap styling
 - Data driven for ease of updating.
 - Content outsourcing to github for automatic project page updating.
 - nginx load balancer and proxy.

## Installation

To download this code run
```
git clone https://www.github.com/ChrisWeldon/chriswevans.com
```
then navigate to the directory and run
```
npm install
```
to get all the dependencies.
When ready for deployment you can run
```
npm run build
```
to optimize on a host service.

The website is open source so you are more than welcome to use this as a jumpoff point for your own personal sites, but please provide ample credit if you don't overhaul with your own code.

## An In Depth Review.
A more in depth review of the code.

### Architecture
The base of this website runs on pretty much the usual structure for React apps. All images/icons, data files (including data.json), text files, and index.html exist in the `./public` directory. The rest of the css and js files sit in the `./src` directory.

All the styling is done with Bootstrap.js to keep the front end simple and aesthetically pleasing, while also being easy to implement a mobile version without bending over backwards to ensure compatibility for all screen sizes.

### Keeping Up To Date.
The main goal of this site was to host all of my personal material. So I had one main goal: make it easy to update. There are two main features that I used to do this: make all content data-driven, and avoid redundancy.

#### Content
`./public/data.json` holds pretty much all the content for the site such as personal info, text-content, resume info. That way as my experience grows and changes I don't have to completely overhaul the site just fit a couple of extra features (this also makes it easy for anyone to customize the site for themselves).

#### Projects
Project info will probably all change change drastically every month. To keep the site up to date on my projects, serverside scrapes https://github.com/ChrisWeldon/Projects. For each project found in that directory, it pulls the https://raw.githubusercontent.com/ChrisWeldon/<project>/master/README.md and renders that through rexxars' markdown interpreter. This allow me to update all the project info through regular commits.
