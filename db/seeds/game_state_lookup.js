
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game_state_lookup').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('game_state_lookup').insert({id: 1, game_state: 'wait for p1'}),
        knex('game_state_lookup').insert({id: 2, game_state: 'wait for p2'}),
        knex('game_state_lookup').insert({id: 3, game_state: 'active'}),
        knex('game_state_lookup').insert({id: 4, game_state: 'inactive'}),
      ]);
    });
};
