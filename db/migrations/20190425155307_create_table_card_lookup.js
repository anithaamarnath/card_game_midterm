
exports.up = function(knex, Promise) {
  return knex.schema.createTable('card_lookup', function (table) {
    table.increments();
    table.integer('value');
    table.string('suit', 10);
  });
};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('card_lookup');

};
