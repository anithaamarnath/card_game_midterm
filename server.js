"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

const cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
}))

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  res.render("test");
});

app.post("/login", (req, res) => {
  knex('users').returning('id').insert({'name': req.body.user_id}).asCallback(function(err, output){
    if (err){
      console.log(err)
    }
    req.session.user_id = output[0]
    res.redirect("/")
  })
  // req.session.user_id = knex('users').select('id').where({'name': req.body.user_id}).then(function(err, rows){
  //   console.log(`return ${rows[0].id} return`)
  // })
  // console.log(`user_id${req.session.user_id}`)

})

app.post("/newgame", (req, res) => {
  knex.select('id').from('matches').whereNot('player1_id', req.session.user_id).andWhere('player2_id', null).asCallback(function(err, number){
    if (!number[0]) {
      knex.insert({player1_id: req.session.user_id, player1_points: '0', player2_points: '0', game_state_id: '3', last_move: new Date()})
          .into('matches')
          .asCallback(function(err){
            if (err){
              console.log(err)
            }
            res.redirect(`/`)
          })
    }
    else {
      knex('matches')
        .where({id: number[0].id})
        .update({player2_id: req.session.user_id, last_move: new Date()})
        .asCallback(function(err){
          if (err){
            console.log(err)
          }
          console.log('NewGameMade Sucessfully')
          dealHands(number[0].id)
          res.redirect(`/`)
        })
    }
  })
})

function dealHands (matchId){
  knex('card_lookup').select('id', 'suit').asCallback(function(err,cards){
    let position = '1'
    let deck = []
    const drawnCardIndex = Math.floor(Math.random() * 13)
    for (let card in cards){
      console.log(card)
      console.log(`THESE ARE THE SUITS ${cards[card].suit}, index ${card}, id ${cards[card].id}`)
      let skip = false
      if (cards[card].suit === 'h'){
        position = '1'
      } else if (cards[card].suit === 's'){
        position = '2'
      } else if (cards[card].suit === 'd'){
        position = '3'
        deck.push(cards[card].id)
      } else {
        skip = true
      }
      if (!skip){
        knex('cards').insert({'match_id': matchId, 'card_id': cards[card].id, 'position_id': position})
        .returning('id')
        .then((id) => {
          console.log(id);
          if (deck.length === 13){
            console.log("drawnCardIndex", drawnCardIndex, deck, deck[drawnCardIndex])
            knex('cards').where('match_id', matchId).andWhere('card_id', deck[drawnCardIndex])
            .update({'position_id': '7'}).asCallback(function(err){})
          }
        });
      }
    }
  })
}

app.post("/:gameId", (req, res) => {
  knex.select('game_state_id', 'player1_id', 'player2_id').from('matches').where('id', req.params.gameId).asCallback(function(err, gameInfo){       // find the current gamestate
    const playerId = req.session.user_id
    const gameState = gameInfo[0].game_state_id
    if (playerId === gameInfo[0].player1_id) {
      const player = 'player1'
    }
    else if (playerId === gameInfo[0].player2_id) {
      const player = 'player2'
    }
    if (((player === 'player1') && (gameState === 1)) || (gameState === 3) || ((player === 'player2') && (gameState === 2))) {
      if (player === 'player1'){
        knex('cards').where({match_id: req.params.gameId, card_id: req.body.card}).update({position: '5'}).asCallback(function(err){
          if (gameState === 3) {
            knex('matches').where({id: req.params.gameId}).update({game_state_id: '2', last_move_time: new Date()}).asCallback(function(err){
              newTurn(req.params.gameId)
            })                     //change gamestate to the other player
          }
          else {
            knex('matches').where({id: req.params.gameId}).update({game_state_id: '3', last_move_time: new Date()}).asCallback(function(err){
              res.redirect(`/`)
            })
          }
        })  //update player 1 bid
      }
      else if (player === 'player2') {
        knex('cards').where({match_id: req.params.gameId, card_id: req.body.card}).update({position: '6'})  //update player 2 bid
        if (gameState === 3) {
          knex('matches').where({id: req.params.gameId}).update({game_state_id: '1', last_move_time: new Date()}).asCallback(function(err){
            newTurn(req.params.gameId)
          })                        //change gamestate to the other player
        }
        else {
          knex('matches').where({id: req.params.gameId}).update({game_state_id: '3', last_move_time: new Date()}).asCallback(function(err){
            res.redirect(`/`)
          })
        }
      }
    }
  })
})

function newTurn (matchId) {
  knex('cards').select('value').where({'match_id': matchId}, {'position_id': '7'}).join('card_lookup', {'card_lookup.id': 'card_id'}).asCallback(function(err, prize){
    knex('cards').select('value').where({'match_id': matchId}, {'position_id': '5'}).join('card_lookup', {'card_lookup.id': 'card_id'}).asCallback(function(err, player1Card){
      knex('cards').select('value').where({'match_id': matchId}, {'position_id': '6'}).join('card_lookup', {'card_lookup.id': 'card_id'}).asCallback(function(err, player2Card){
        if (player1Card[0].value > player2Card[0].value){
          const winner = 'player1_points'
        }
        else if (player1Card[0].value < player2Card[0].value){
          const winner = 'player2_points'
        }
        knex('matches').where({'id': matchId}).update({winner: prize[0].value}).asCallback(function(err){
          knex('cards').where({'match_id': matchId}, {'position_id': '7'}).update({'position_id': '4'}).asCallback(function(err){
            knex('cards').where({'match_id': matchId}, {'position_id': '5'}).update({'position_id': '4'}).asCallback(function(err){
              knex('cards').where({'match_id': matchId}, {'position_id': '6'}).update({'position_id': '4'}).asCallback(function(err){
                newPrize(matchId)
              })
            })
          })
        })
      })
    })
  })
}


function newPrize (matchId) {
  knex('cards').select('id').where({'match_id': matchId}, {'position_id': '3'}).asCallback(function(err, cards){
    if (cards.length === 0 ) {
      knex('matches').where({'id': matchId}).update({'game_state_id': '4'}).asCallback(function(err){         //gameover
        res.redirect(`/`)
      })
    } else {
      const drawnCardIndex = Math.floor(Math.random() * cards.length)
      knex('cards').where({'match_id': matchId}, {'id': cards[drawnCardIndex].id }, {'position_id': '3'}).update({'position_id': '7'}).asCallback(function(err){
        knex('matches').where({'id': matchId}).update({'game_state_id': '3'}).asCallback(function(err){        //new prize selected and next turn
          res.redirect(`/`)
        })
      })
    }
  })
}

function generateRandomString () {
  while (true) {
    let r = Math.random().toString(36).substring(7)
    if (r.length === 6) {
      return r
    }
  }
}

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
