
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game_state_lookup', function (table) {
    table.increments();
    table.integer('game_state');
  });
  /*Game state options 1,2,3,4*/

};

exports.down = function(knex, Promise) {

  return  knex.schema.dropTable('game_state_lookup');

};
