
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('card_lookup').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('card_lookup').insert({id: 1, value: 1, suit: 'h'}),
        knex('card_lookup').insert({id: 2, value: 2, suit: 'h'}),
        knex('card_lookup').insert({id: 3, value: 3, suit: 'h'}),
        knex('card_lookup').insert({id: 4, value: 4, suit: 'h'}),
        knex('card_lookup').insert({id: 5, value: 5, suit: 'h'}),
        knex('card_lookup').insert({id: 6, value: 6, suit: 'h'}),
        knex('card_lookup').insert({id: 7, value: 7, suit: 'h'}),
        knex('card_lookup').insert({id: 8, value: 8, suit: 'h'}),
        knex('card_lookup').insert({id: 9, value: 9, suit: 'h'}),
        knex('card_lookup').insert({id: 10, value: 10, suit: 'h'}),
        knex('card_lookup').insert({id: 11, value: 11, suit: 'h'}),
        knex('card_lookup').insert({id: 12, value: 12, suit: 'h'}),
        knex('card_lookup').insert({id: 13, value: 13, suit: 'h'}),

        knex('card_lookup').insert({id: 14, value: 1, suit: 'c'}),
        knex('card_lookup').insert({id: 15, value: 2, suit: 'c'}),
        knex('card_lookup').insert({id: 16, value: 3, suit: 'c'}),
        knex('card_lookup').insert({id: 17, value: 4, suit: 'c'}),
        knex('card_lookup').insert({id: 18, value: 5, suit: 'c'}),
        knex('card_lookup').insert({id: 19, value: 6, suit: 'c'}),
        knex('card_lookup').insert({id: 20, value: 7, suit: 'c'}),
        knex('card_lookup').insert({id: 21, value: 8, suit: 'c'}),
        knex('card_lookup').insert({id: 22, value: 9, suit: 'c'}),
        knex('card_lookup').insert({id: 23, value: 10, suit: 'c'}),
        knex('card_lookup').insert({id: 24, value: 11, suit: 'c'}),
        knex('card_lookup').insert({id: 25, value: 12, suit: 'c'}),
        knex('card_lookup').insert({id: 26, value: 13, suit: 'c'}),

        knex('card_lookup').insert({id: 27, value: 1, suit: 'd'}),
        knex('card_lookup').insert({id: 28, value: 2, suit: 'd'}),
        knex('card_lookup').insert({id: 29, value: 3, suit: 'd'}),
        knex('card_lookup').insert({id: 30, value: 4, suit: 'd'}),
        knex('card_lookup').insert({id: 31, value: 5, suit: 'd'}),
        knex('card_lookup').insert({id: 32, value: 6, suit: 'd'}),
        knex('card_lookup').insert({id: 33, value: 7, suit: 'd'}),
        knex('card_lookup').insert({id: 34, value: 8, suit: 'd'}),
        knex('card_lookup').insert({id: 35, value: 9, suit: 'd'}),
        knex('card_lookup').insert({id: 36, value: 10, suit: 'd'}),
        knex('card_lookup').insert({id: 37, value: 11, suit: 'd'}),
        knex('card_lookup').insert({id: 38, value: 12, suit: 'd'}),
        knex('card_lookup').insert({id: 39, value: 13, suit: 'd'}),

        knex('card_lookup').insert({id: 40, value: 1, suit: 's'}),
        knex('card_lookup').insert({id: 41, value: 2, suit: 's'}),
        knex('card_lookup').insert({id: 42, value: 3, suit: 's'}),
        knex('card_lookup').insert({id: 43, value: 4, suit: 's'}),
        knex('card_lookup').insert({id: 44, value: 5, suit: 's'}),
        knex('card_lookup').insert({id: 45, value: 6, suit: 's'}),
        knex('card_lookup').insert({id: 46, value: 7, suit: 's'}),
        knex('card_lookup').insert({id: 47, value: 8, suit: 's'}),
        knex('card_lookup').insert({id: 48, value: 9, suit: 's'}),
        knex('card_lookup').insert({id: 49, value: 10, suit: 's'}),
        knex('card_lookup').insert({id: 50, value: 11, suit: 's'}),
        knex('card_lookup').insert({id: 51, value: 12, suit: 's'}),
        knex('card_lookup').insert({id: 52, value: 13, suit: 's'})

      ]);
    });
};
