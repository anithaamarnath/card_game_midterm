
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.table('matches', function (table) {
      table.dropForeign('player1_id');
      table.dropForeign('player2_id');
      table.dropForeign('game_state_id');
    }),
    knex.schema.table('cards', function (table) {
      table.dropForeign('match_id');
      table.dropForeign('card_id');
      table.dropColumn('position'); //created by mistake
      table.dropForeign('position_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('matches', function (table) {
      table.foreign('player1_id').references('users.id');
      table.foreign('player2_id').references('users.id');
      table.foreign('game_state_id').references('game_state_lookup.id');

    }),
    knex.schema.table('cards', function (table) {
      table.foreign('match_id').references('matches.id');
      table.foreign('card_id').references('card_lookup.id');
      table.foreign('position_id').references('card_positions.id');

    })

  ]);

};
