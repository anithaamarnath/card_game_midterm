# Node Skeletonls
A web app that allows players to play various card games against other players. Our Team Project is Goofspeil Card Game.

This app supports multiple players playing mutiple game simultaniously across a local internet connection.

All games are saved in the database and the history of every move made can be viewed by any player


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
8. Visit `http://localhost:8080/`. You can also replace `localhost` with your IPv4 adress to play with other computers on your local network.

## Requirements of the Project

  -The app can support multiple types of card games
  -Player can create a new game of a certain type (and get randomly paired with another player)
  -Player can play a game against another player (one move at a time)
  -Player can have multiple active games going
  -Player can see in which of their games is their turn
  -Player can see players rankings per game type (by number of wins)
  -Player can see archive of games played by each player

## Supporting other game types

  -This app comes with one game already programmed in 'Goofspeil', but it can support other game types. When the game type is set to NULL it will run Goofspeil by default, but the code can be altered to insert as many other gametypes as possible.
  -Use the 'position' coloumn in the 'cards' table to designate where the cards would be in the realgame counterpart (ie. 3 = deck, 1 = player1_hand, 4 = discard piles). Using this framework most card games should be able to be created.


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

!["ProfilePages"](https://github.com/juliantomlin/card_game_midterm/blob/master/docs/profile_screens.png)
!["InGameScreens (loggedin/loggedout"](https://github.com/juliantomlin/card_game_midterm/blob/master/docs/card_game_board.png)
!["EndGameStats"](https://github.com/juliantomlin/card_game_midterm/blob/master/docs/endgame_stats.png)







