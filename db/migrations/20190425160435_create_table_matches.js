
exports.up = function(knex, Promise) {
  return  knex.schema.createTable('matches', function (table) {
    table.increments();
    table.integer('player1_id').unsigned();
    table.foreign('player1_id').references('users.id');
    table.integer('player2_id').unsigned();
    table.foreign('player2_id').references('users.id');
    table.integer('player1_points');
    table.integer('player2_points');
    table.integer('game_state_id').unsigned();
    table.foreign('game_state_id').references('game_state_lookup.id');
    table.timestamp('last_move');
    });

};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('matches');
};
