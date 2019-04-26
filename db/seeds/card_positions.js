
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('card_positions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('card_positions').insert({id: 1, position: 1}),
        knex('card_positions').insert({id: 2, position: 2}),
        knex('card_positions').insert({id: 3, position: 3}),
        knex('card_positions').insert({id: 4, position: 4}),
        knex('card_positions').insert({id: 5, position: 5}),
        knex('card_positions').insert({id: 6, position: 6}),
        knex('card_positions').insert({id: 7, position: 7})
      ]);
    });
};
