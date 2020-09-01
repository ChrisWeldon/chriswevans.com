# Augury
***This project is ongoing, so for that reason I am keeping portions of it private***


The goal of this project was to see if we can use machine learning to predict CS:GO professional match winners with enough accuracy to turn a "profit" on match betting websites.

At this stage we have been able to achieve mild success with some weeks as accurate as 72%. Without any suitable system for streamlining bets, this code and machine learning model remains little more than a valuable learning experience.

I (Chris Evans) was responsible for the programming, databases/servers, and ML models. While Julian Brandmaier was responsible for the Data tracking, Metadata/spreadsheets, and wager-vectoring.

The spreadsheets to show all of our betting and prediction history can be found here: https://docs.google.com/spreadsheets/d/1CMVwr_ccM0Qq5YzAJKEPFy5_e5seUUw2KlkPLIaSns8/edit?usp=sharing

There are two main portions of the code: database building, and prediction.


## Database Building

An in depth understanding of the video game CS:GO is not necessary to interpret the data. The database is built using MySQL and Python.

The largest hurdle is the lack of time-series data. To overcome this issue, we have had to build the database as games happen.

The only player specific time sensitive data available to us was the scores achieved in each match from the past. All of which are labels that we are hoping to be able to predict (no good).

<image of match here>

The only data that we have to work with is kept is the running average of each competitors stats. IE kills/round, deaths/round, etc. So, the best dataset that we could build regarding player specific data would have to be the running average of each individual on each team specifically at the time that a match occurs. The label (team win/loss) would then be gathered after the game had occurred.

To achieve this I built a series of web scrapers to scrape www.htlv.org and attached them to cron jobs to collect all data right before the matches happen.

There were a series of three different scrapers:
 - One to find upcoming match times
 - One to pull team/player data
 - One to pull data on a match once the game is over

 The process of scraping the data went something like this:
 Find all matches that happen within given time frame --> Set timer for when match is supposed to start --> Collect data on both teams and INSERT into MySQL database -> Wait for game to finish then collect labels (achieved scores).

 CS:GO Pro matches happen fairly frequently so the building the database has so far proven to be worth the effort.

As of right now the scrapers will remain partially private, but if you would like to do this yourself then you can checkout my Medium post on "How to build a good Web Scraper with Python BeautifulSoup4".


## Prediction
