
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('matches').insert({player1_id: 1, player2_id: 3,
          player1_points: 1, player2_points: 12, game_state_id: 4}), //inactive
        knex('matches').insert({player1_id: 1, player2_id: 2,
          player1_points: 10, player2_points: 2, game_state_id: 4}), //inactive
        knex('matches').insert({player1_id: 1, player2_id: 3,
          player1_points: 3, player2_points: 4, game_state_id: 2}), //waiting for p2
        knex('matches').insert({player1_id: 2, player2_id: 3,
          player1_points: 6, player2_points: 4, game_state_id: 1}),// waiting for p1
        knex('matches').insert({player1_id: 2, player2_id: 3,
          player1_points: 2, player2_points: 0, game_state_id: 1}), //waiting for p1
        knex('matches').insert({player1_id: 1, player2_id: 2,
          player1_points: 0, player2_points: 0, game_state_id: 3}) //active
      ]);
    });
};
