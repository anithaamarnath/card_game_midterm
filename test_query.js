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

const user_id = 1;

knex.select('*').from('users')
  // .where('first_name', '=', args)
  // .orWhere('last_name', '=', args)
  .asCallback(function(err, rows) {
    if(err){
      return console.error("Connection Error", err);
    }
    console.log(rows);
  });

