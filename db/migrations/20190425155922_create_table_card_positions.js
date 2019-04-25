
exports.up = function(knex, Promise) {
 return knex.schema.createTable('card_positions', function (table) {
      table.increments();
      table.integer('position');
    });
    /*Card position options 1,2,3,4,5,6,7*/

};

exports.down = function(knex, Promise) {

  return knex.schema.dropTable('card_positions');

};
