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



// knex.select('*').from('users')
//   // .where('first_name', '=', args)
//   // .orWhere('last_name', '=', args)
//   .asCallback(function(err, rows) {
//     if(err){
//       return console.error("Connection Error", err);
//     }
//     console.log(rows);
//   });


//------------query to select inactive games for an user---------------

function archiveMatchesForUser(user_id){
  knex.select('*').from('matches')
  .where('player1_id', user_id)
  .orWhere('player2_id',user_id)
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

function activeMatchesForUser(user_id){
  knex.select('*').from('matches')
  .whereNot('game_state_id', 4)
  .andWhere('player1_id', user_id)
  .orWhere('player2_id',user_id)
  .asCallback(function(err, rows) {
    if(err){
      return console.error("Connection Error", err);
    }
    console.log("Active games:");
    console.log(rows);
  });
}

//-----------------------------------------------
function active(user_id){
  knex.select('*').from('matches')
//   //.innerJoin('users', 'users.id', 'matches.player1_id')
//   knex.select('*').from('matches').innerJoin('users', function() {
//   this.on('users.id','=','matches.player1_id').orOn('users.id', '=','matches.player2_id')
// })
  .whereNot('game_state_id', 4)
  .andWhere('player1_id', user_id)
  .orWhere('player2_id',user_id)
  .asCallback(function(err, rows) {
    if(err){
      return console.error("Connection Error", err);
    }
    console.log("Active games:");
    console.log(rows);
  });
}
//------------------------------------------------

const user_id = 2;

activeMatchesForUser(user_id);
//active(user_id);




