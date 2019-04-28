
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', function (table) {
  table.integer('used');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', function (table) {
    table.dropColumn('used');
    })

};
