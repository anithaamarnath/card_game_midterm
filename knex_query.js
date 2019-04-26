var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : 'localhost',
    user : 'labber',
    password : 'labber',
    database : 'midterm'
  }
});


//------------query to select inactive games for an user---------------

function archiveMatchesForUser(user_id){
  knex.select('*').from('matches')
  .where(function(){
    this.where('player1_id', user_id).orWhere('player2_id',user_id)
  })
  .andWhere('game_state_id', 4)
  .asCallback(function(err, rows) {
    if(err){
      return console.error("Connection Error", err);
    }
    console.log("Archive games:");
    console.log(rows);
  });
}

//--------------------------------------------------------

function activeMatchesForUser(user_id, cb){
  knex.select('*').from('matches')
  .whereNot('game_state_id', 4)
  .where(function(){
    this.where('player1_id', user_id).orWhere('player2_id',user_id)
  })
  .asCallback(function(err, rows) {
    if(err){
      return console.error("Connection Error", err);
    }
    console.log("Active games:");
    //console.log(rows);
    cb(rows);
  });
}

//-----------------------------------------------
function activeMatches(user_id){

  knex
    .select('matches.id','matches.game_state_id','u1.name as name1','u2.name as name2')
    .from('matches')
    .innerJoin('users as u1', function() {
      this.on('u1.id','=','matches.player1_id')
    })
    .innerJoin('users as u2', function() {
      this.on('u2.id','=','matches.player2_id')
    })
    .where(function(){
      this.where('player1_id', user_id).orWhere('player2_id',user_id)
    })
    .whereNot('game_state_id', 4)
    .asCallback(function(err, rows) {
      if(err){
        return console.error("Connection Error", err);
      }
      console.log("Active games:");
      console.log(rows);
    });
}
//------------------------------------------------
function archiveMatches(user_id){

  knex
    .select('matches.id','matches.game_state_id','u1.name as name1','u2.name as name2')
    .from('matches')
    .innerJoin('users as u1', function() {
      this.on('u1.id','=','matches.player1_id')
    })
    .innerJoin('users as u2', function() {
      this.on('u2.id','=','matches.player2_id')
    })
    .where(function(){
      this.where('player1_id', user_id).orWhere('player2_id',user_id)
    })
    .where('game_state_id', 4)
    .asCallback(function(err, rows) {
      if(err){
        return console.error("Connection Error", err);
      }
      console.log("Archive games:");
      console.log(rows);
    });
}
//-----------------------------------------------

function userName(user_id){
  knex.select('*').from('users')
  .where('users.id',user_id)
  .asCallback(function(err, rows) {
    if(err){
      return console.error("Connection Error", err);
    }
    console.log("User:");
    console.log(rows);
  });
}

//-------------------------------------------------



const user_id = 2;

//archiveMatchesForUser(user_id);

// activeMatchesForUser(user_id, function(data){
//   console.log(data);
// });

activeMatches(1);
archiveMatches(1);


//userName(user_id);





