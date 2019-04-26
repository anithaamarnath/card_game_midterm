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

function activeMatchesForUser(user_id){
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
    console.log(rows);
  });
}

//-----------------------------------------------
// function active(user_id){
//  //knex.select('*').from('matches')
// //   //.innerJoin('users', 'users.id', 'matches.player1_id')
//   knex.select('matches.id','matches.game_state_id')
//   .from('matches').innerJoin('users', function() {
//   this.on('users.id','=','matches.player1_id').orOn('users.id', '=','matches.player2_id')
// })
//   .distinct()
//   .where(function(){
//     this.where('player1_id', user_id).orWhere('player2_id',user_id)
//   })
//   .whereNot('game_state_id', 4)
//   .asCallback(function(err, rows) {
//     if(err){
//       return console.error("Connection Error", err);
//     }
//     console.log("Active games:");
//     console.log(rows);
//   });
// }
//------------------------------------------------

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

activeMatchesForUser(user_id);
userName(user_id);





