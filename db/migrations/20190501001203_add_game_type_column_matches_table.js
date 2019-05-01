exports.up = function(knex, Promise) {
  return knex.schema.table('matches', function (table) {
  table.integer('game_type');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('matches', function (table) {
    table.dropColumn('game_type');
    })

};
