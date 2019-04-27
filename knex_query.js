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

module.exports.archiveMatchesForUser = function (user_id){
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

module.exports.activeMatchesForUser = function (user_id, cb){
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
module.exports.activeMatches = function (user_id , cb){

  knex
    .select('matches.id','matches.game_state_id','u1.name as name1','u2.name as name2','u1.id as id1','u2.id as id2')
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
        console.error("Connection Error", err);
        cb();
      }
      // console.log("Active games:");
      // console.log(rows);
      cb(rows);
    });
}
//------------------------------------------------
module.exports.archiveMatches = function (user_id, cb){

  knex
    .select('matches.id','matches.game_state_id','u1.name as name1','u2.name as name2',
      'u1.id as id1','u2.id as id2','matches.player1_points','matches.player2_points')
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
        console.error("Connection Error", err);
        cb();
      }
      // console.log("Archive games:");
      // console.log(rows);
      cb(rows);
    });
}

//-------------------------------------------------
module.exports.matchesForUser = function (user_id, cb){

  knex
    .select('matches.id','matches.game_state_id','u1.name as name1','u2.name as name2',
      'u1.id as id1','u2.id as id2','matches.player1_points','matches.player2_points',
      'u1.ranking as rank1','u2.ranking as rank2')
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
    .asCallback(function(err, rows) {
      if(err){
        console.error("Connection Error", err);
        cb();
      }
      // console.log("Archive games:");
      // console.log(rows);
      cb(rows);
    });
}
//-----------------------------------------------

module.exports.userData = function (user_id){
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






