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
const knexQueries = require('./knex_query.js');

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

  res.render("user_id");

});

app.get("/test", (req, res) => {
  res.render('test');
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
    const drawnCardIndex = Math.floor(Math.random() * 13)
    let deck = []
    for (let card in cards){
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
          if (deck.length === 13){
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
    if ( (gameState != 4) ) {
      console.log(`test ${playerId}, ${ gameInfo[0].player1_id}, ${ gameInfo[0].player2_id}, ${gameState}`)
      if (playerId === gameInfo[0].player1_id) {
        placeBid(5, 2, req.params.gameId, req.body.card, gameState, res, 1)
      }
      else if (playerId === gameInfo[0].player2_id) {
        console.log('correct path')
        placeBid(6, 1, req.params.gameId, req.body.card, gameState, res, 2)
      }
    }
  })
})

function placeBid (newPosition, newGamestate, gameId, card, gameState, res, otherTurn) {
  console.log('bid is trying to be placed')
    if (gameState === 3) {
      console.log('trying to place bid with gamestate 3')
      console.log(newPosition, newGamestate, gameId, card, gameState, otherTurn)
      knex('cards').where({'match_id': gameId}).andWhere({'card_id': card}).update({'position_id': newPosition}).asCallback(function(err){
        knex('matches').where({'id': gameId}).update({'game_state_id': newGamestate, 'last_move': new Date()}).asCallback(function(err){
          res.redirect(`/`)
        })
      })                     //change gamestate to the other player
    }
    else if (gameState === otherTurn){
      knex('cards').where({'match_id': gameId}).andWhere({'card_id': card}).update({'position_id': newPosition}).asCallback(function(err){
        knex('matches').where({'id': gameId}).update({'game_state_id': '3', 'last_move': new Date()}).asCallback(function(err){
          newTurn(gameId, res)
        })
      })
    }
    else {
      res.redirect(`/`)
    }
}


function newTurn (matchId, res) {
  knex('cards').select('value').where({'match_id': matchId}).andWhere({'position_id': '7'}).join('card_lookup', {'card_lookup.id': 'card_id'}).asCallback(function(err, prize){
    knex('cards').select('value').where({'match_id': matchId}).andWhere({'position_id': '5'}).join('card_lookup', {'card_lookup.id': 'card_id'}).asCallback(function(err, player1Card){
      knex('cards').select('value').where({'match_id': matchId}).andWhere({'position_id': '6'}).join('card_lookup', {'card_lookup.id': 'card_id'}).asCallback(function(err, player2Card){
        console.log(`p1 card ${player1Card[0].value}, p2 card ${player2Card[0].value}, prize ${prize[0].value}`, player1Card, player2Card, prize)
        if (player1Card[0].value > player2Card[0].value){
          awardPoints('player1_points', prize[0].value, matchId)
        }
        else if (player1Card[0].value < player2Card[0].value){
          awardPoints('player2_points', prize[0].value, matchId)
        }
        knex('cards').where({'match_id': matchId}).andWhere({'position_id': '7'}).update({'position_id': '4'}).asCallback(function(err){
          knex('cards').where({'match_id': matchId}).andWhere({'position_id': '5'}).update({'position_id': '4'}).asCallback(function(err){
            knex('cards').where({'match_id': matchId}).andWhere({'position_id': '6'}).update({'position_id': '4'}).asCallback(function(err){
              newPrize(matchId, res)
            })
          })
        })
      })
    })
  })
}

function awardPoints (winner, prize, matchId) {
  knex('matches').where({'id': matchId}).select(winner).asCallback(function(err, points){
    const newPrize = (points[0][winner]) + (prize)
    const updateString = `{"${winner}": ${newPrize}}`
    const updateValue = {winner: newPrize}
    console.log(typeof newPrize, newPrize, winner, points[0], points[0][winner])
    knex('matches').where({'id': matchId}).update(JSON.parse(updateString)).asCallback(function(err){
      if (err){
        throw err
      }
    })
  })
}


function newPrize (matchId, res) {
  knex('cards').select('card_id').where({'match_id': matchId}).andWhere({'position_id': '3'}).asCallback(function(err, cards){
    if (cards.length === 0 ) {
      knex('matches').where({'id': matchId}).update({'game_state_id': '4'}).asCallback(function(err){         //gameover
        res.redirect(`/`)
      })
    } else {
      const drawnCardIndex = Math.floor(Math.random() * cards.length)
      console.log(`card to be selected for a new prize ${cards[drawnCardIndex].card_id}`)
      knex('cards').where('match_id', matchId).andWhere('card_id', cards[drawnCardIndex].card_id).update({'position_id': '7'}).asCallback(function(err){
        res.redirect(`/`)
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

//--------------------------------------------------------------------------
app.get("/user/:userid", (req, res) => {
  const userid = req.params.userid;
    //res.send(userid);
    knexQueries.matchesForUser(userid,function (data) {
          console.log(data);
          let templateVars = {data: data, userid: userid};
          res.render("user_id",templateVars);

    });
});



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
