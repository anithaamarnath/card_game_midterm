
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function (table) {
    table.increments();
    table.integer('position');
    table.integer('match_id').unsigned();
    table.foreign('match_id').references('matches.id');
    table.integer('card_id').unsigned();
    table.foreign('card_id').references('card_lookup.id');
    table.integer('position_id').unsigned();
    table.foreign('position_id').references('card_positions.id');
  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('cards');

};
