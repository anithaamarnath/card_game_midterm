# Node Skeletonls
A web app that allows players to play various card games against other players. Our Team Project is Goofspeil Card Game.



## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Requirements of the Project

  -The app can support multiple types of card games
  -Player can create a new game of a certain type (and get randomly paired with another player)
  -Player can play a game against another player (one move at a time)
  -Player can have multiple active games going
  -Player can see in which of their games is their turn
  -Player can see players rankings per game type (by number of wins)
  -Player can see archive of games played by each player



## Dependencies



- body-parser: 1.15.2
- cookie:  0.3.1
- cookie-session 1.3.3
- dotenv  2.0.0
- ejs 2.4.1
- express 4.13.4
- knex 0.11.7
- knex-logger 0.1.0
- morgan 1.7.0
- node-sass-middleware 0.9.8
- pg 6.0.2
- nodemon 1.18.11
- Node 5.10
- NPM 3.8

## Final Product

!["Screenshot of login page"]()
!["Screenshot of User Profile"]()
!["Screenshot of Match Page"]()
!["Screenshot of Ranking Page"]()







