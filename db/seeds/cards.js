
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      return Promise.all([
        knex('cards').insert({match_id: 1, card_id: 2, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 1, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 3, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 5, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 8, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 13, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 6, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 4, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 12, position_id: 1,}),
        knex('cards').insert({match_id: 1, card_id: 28, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 31, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 32, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 34, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 27, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 36, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 35, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 38, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 39, position_id: 3,}),
        knex('cards').insert({match_id: 1, card_id: 40, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 41, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 42, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 43, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 45, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 44, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 50, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 51, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 52, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 46, position_id: 2,}),
        knex('cards').insert({match_id: 1, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 1, card_id: 7, position_id: 112,}),
        knex('cards').insert({match_id: 1, card_id: 48, position_id: 212,}),
        knex('cards').insert({match_id: 1, card_id: 30, position_id: 311,}),
        knex('cards').insert({match_id: 1, card_id: 9, position_id: 111,}),
        knex('cards').insert({match_id: 1, card_id: 47, position_id: 211,}),
        knex('cards').insert({match_id: 1, card_id: 10, position_id: 5,}),
        knex('cards').insert({match_id: 1, card_id: 29, position_id: 30,}),
        knex('cards').insert({match_id: 1, card_id: 11, position_id: 10,}),
        knex('cards').insert({match_id: 1, card_id: 49, position_id: 20,}),
        knex('cards').insert({match_id: 1, card_id: 37, position_id: 7,}),

        knex('cards').insert({match_id: 1, card_id: 36, position_id: 30,}),
        knex('cards').insert({match_id: 1, card_id: 12, position_id: 10,}),
        knex('cards').insert({match_id: 1, card_id: 44, position_id: 20,}),
        knex('cards').insert({match_id: 1, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 1, card_id: 9, position_id: 112,}),
        knex('cards').insert({match_id: 1, card_id: 47, position_id: 212,}),
        knex('cards').insert({match_id: 1, card_id: 32, position_id: 311,}),
        knex('cards').insert({match_id: 1, card_id: 6, position_id: 111,}),
        knex('cards').insert({match_id: 1, card_id: 49, position_id: 211,}),
        knex('cards').insert({match_id: 1, card_id: 34, position_id: 310,}),
        knex('cards').insert({match_id: 1, card_id: 5, position_id: 110,}),
        knex('cards').insert({match_id: 1, card_id: 45, position_id: 210,}),
        knex('cards').insert({match_id: 1, card_id: 30, position_id: 39,}),
        knex('cards').insert({match_id: 1, card_id: 11, position_id: 19,}),
        knex('cards').insert({match_id: 1, card_id: 43, position_id: 29,}),
        knex('cards').insert({match_id: 1, card_id: 27, position_id: 38,}),
        knex('cards').insert({match_id: 1, card_id: 2, position_id: 18,}),
        knex('cards').insert({match_id: 1, card_id: 40, position_id: 28,}),
        knex('cards').insert({match_id: 1, card_id: 39, position_id: 37,}),
        knex('cards').insert({match_id: 1, card_id: 13, position_id: 17,}),
        knex('cards').insert({match_id: 1, card_id: 52, position_id: 27,}),
        knex('cards').insert({match_id: 1, card_id: 37, position_id: 36,}),
        knex('cards').insert({match_id: 1, card_id: 1, position_id: 16,}),
        knex('cards').insert({match_id: 1, card_id: 51, position_id: 26,}),
        knex('cards').insert({match_id: 1, card_id: 29, position_id: 35,}),
        knex('cards').insert({match_id: 1, card_id: 4, position_id: 15,}),
        knex('cards').insert({match_id: 1, card_id: 42, position_id: 25,}),
        knex('cards').insert({match_id: 1, card_id: 38, position_id: 34,}),
        knex('cards').insert({match_id: 1, card_id: 3, position_id: 14,}),
        knex('cards').insert({match_id: 1, card_id: 50, position_id: 24,}),
        knex('cards').insert({match_id: 1, card_id: 28, position_id: 33,}),
        knex('cards').insert({match_id: 1, card_id: 7, position_id: 13,}),
        knex('cards').insert({match_id: 1, card_id: 41, position_id: 23,}),
        knex('cards').insert({match_id: 1, card_id: 31, position_id: 32,}),
        knex('cards').insert({match_id: 1, card_id: 8, position_id: 12,}),
        knex('cards').insert({match_id: 1, card_id: 46, position_id: 22,}),
        knex('cards').insert({match_id: 1, card_id: 35, position_id: 31,}),
        knex('cards').insert({match_id: 1, card_id: 10, position_id: 11,}),
        knex('cards').insert({match_id: 1, card_id: 48, position_id: 21,}),

        knex('cards').insert({match_id: 2, card_id: 2, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 1, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 3, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 5, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 8, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 13, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 6, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 4, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 12, position_id: 1,}),
        knex('cards').insert({match_id: 2, card_id: 28, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 31, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 32, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 34, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 27, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 36, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 35, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 38, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 39, position_id: 3,}),
        knex('cards').insert({match_id: 2, card_id: 40, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 41, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 42, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 43, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 45, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 44, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 50, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 51, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 52, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 46, position_id: 2,}),
        knex('cards').insert({match_id: 2, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 2, card_id: 7, position_id: 112,}),
        knex('cards').insert({match_id: 2, card_id: 48, position_id: 212,}),
        knex('cards').insert({match_id: 2, card_id: 30, position_id: 311,}),
        knex('cards').insert({match_id: 2, card_id: 9, position_id: 111,}),
        knex('cards').insert({match_id: 2, card_id: 47, position_id: 211,}),
        knex('cards').insert({match_id: 2, card_id: 10, position_id: 5,}),
        knex('cards').insert({match_id: 2, card_id: 29, position_id: 30,}),
        knex('cards').insert({match_id: 2, card_id: 11, position_id: 10,}),
        knex('cards').insert({match_id: 2, card_id: 49, position_id: 20,}),
        knex('cards').insert({match_id: 2, card_id: 37, position_id: 7,}),

        knex('cards').insert({match_id: 2, card_id: 36, position_id: 30,}),
        knex('cards').insert({match_id: 2, card_id: 12, position_id: 10,}),
        knex('cards').insert({match_id: 2, card_id: 44, position_id: 20,}),
        knex('cards').insert({match_id: 2, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 2, card_id: 9, position_id: 112,}),
        knex('cards').insert({match_id: 2, card_id: 47, position_id: 212,}),
        knex('cards').insert({match_id: 2, card_id: 32, position_id: 311,}),
        knex('cards').insert({match_id: 2, card_id: 6, position_id: 111,}),
        knex('cards').insert({match_id: 2, card_id: 49, position_id: 211,}),
        knex('cards').insert({match_id: 2, card_id: 34, position_id: 310,}),
        knex('cards').insert({match_id: 2, card_id: 5, position_id: 110,}),
        knex('cards').insert({match_id: 2, card_id: 45, position_id: 210,}),
        knex('cards').insert({match_id: 2, card_id: 30, position_id: 39,}),
        knex('cards').insert({match_id: 2, card_id: 11, position_id: 19,}),
        knex('cards').insert({match_id: 2, card_id: 43, position_id: 29,}),
        knex('cards').insert({match_id: 2, card_id: 27, position_id: 38,}),
        knex('cards').insert({match_id: 2, card_id: 2, position_id: 18,}),
        knex('cards').insert({match_id: 2, card_id: 40, position_id: 28,}),
        knex('cards').insert({match_id: 2, card_id: 39, position_id: 37,}),
        knex('cards').insert({match_id: 2, card_id: 13, position_id: 17,}),
        knex('cards').insert({match_id: 2, card_id: 52, position_id: 27,}),
        knex('cards').insert({match_id: 2, card_id: 37, position_id: 36,}),
        knex('cards').insert({match_id: 2, card_id: 1, position_id: 16,}),
        knex('cards').insert({match_id: 2, card_id: 51, position_id: 26,}),
        knex('cards').insert({match_id: 2, card_id: 29, position_id: 35,}),
        knex('cards').insert({match_id: 2, card_id: 4, position_id: 15,}),
        knex('cards').insert({match_id: 2, card_id: 42, position_id: 25,}),
        knex('cards').insert({match_id: 2, card_id: 38, position_id: 34,}),
        knex('cards').insert({match_id: 2, card_id: 3, position_id: 14,}),
        knex('cards').insert({match_id: 2, card_id: 50, position_id: 24,}),
        knex('cards').insert({match_id: 2, card_id: 28, position_id: 33,}),
        knex('cards').insert({match_id: 2, card_id: 7, position_id: 13,}),
        knex('cards').insert({match_id: 2, card_id: 41, position_id: 23,}),
        knex('cards').insert({match_id: 2, card_id: 31, position_id: 32,}),
        knex('cards').insert({match_id: 2, card_id: 8, position_id: 12,}),
        knex('cards').insert({match_id: 2, card_id: 46, position_id: 22,}),
        knex('cards').insert({match_id: 2, card_id: 35, position_id: 31,}),
        knex('cards').insert({match_id: 2, card_id: 10, position_id: 11,}),
        knex('cards').insert({match_id: 2, card_id: 48, position_id: 21,}),

        knex('cards').insert({match_id: 3, card_id: 2, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 1, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 3, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 5, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 8, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 13, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 6, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 4, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 12, position_id: 1,}),
        knex('cards').insert({match_id: 3, card_id: 28, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 31, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 32, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 34, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 27, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 36, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 35, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 38, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 39, position_id: 3,}),
        knex('cards').insert({match_id: 3, card_id: 40, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 41, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 42, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 43, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 45, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 44, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 50, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 51, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 52, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 46, position_id: 2,}),
        knex('cards').insert({match_id: 3, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 3, card_id: 7, position_id: 112,}),
        knex('cards').insert({match_id: 3, card_id: 48, position_id: 212,}),
        knex('cards').insert({match_id: 3, card_id: 30, position_id: 311,}),
        knex('cards').insert({match_id: 3, card_id: 9, position_id: 111,}),
        knex('cards').insert({match_id: 3, card_id: 47, position_id: 211,}),
        knex('cards').insert({match_id: 3, card_id: 10, position_id: 5,}),
        knex('cards').insert({match_id: 3, card_id: 29, position_id: 30,}),
        knex('cards').insert({match_id: 3, card_id: 11, position_id: 10,}),
        knex('cards').insert({match_id: 3, card_id: 49, position_id: 20,}),
        knex('cards').insert({match_id: 3, card_id: 37, position_id: 7,}),

        knex('cards').insert({match_id: 3, card_id: 36, position_id: 30,}),
        knex('cards').insert({match_id: 3, card_id: 12, position_id: 10,}),
        knex('cards').insert({match_id: 3, card_id: 44, position_id: 20,}),
        knex('cards').insert({match_id: 3, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 3, card_id: 9, position_id: 112,}),
        knex('cards').insert({match_id: 3, card_id: 47, position_id: 212,}),
        knex('cards').insert({match_id: 3, card_id: 32, position_id: 311,}),
        knex('cards').insert({match_id: 3, card_id: 6, position_id: 111,}),
        knex('cards').insert({match_id: 3, card_id: 49, position_id: 211,}),
        knex('cards').insert({match_id: 3, card_id: 34, position_id: 310,}),
        knex('cards').insert({match_id: 3, card_id: 5, position_id: 110,}),
        knex('cards').insert({match_id: 3, card_id: 45, position_id: 210,}),
        knex('cards').insert({match_id: 3, card_id: 30, position_id: 39,}),
        knex('cards').insert({match_id: 3, card_id: 11, position_id: 19,}),
        knex('cards').insert({match_id: 3, card_id: 43, position_id: 29,}),
        knex('cards').insert({match_id: 3, card_id: 27, position_id: 38,}),
        knex('cards').insert({match_id: 3, card_id: 2, position_id: 18,}),
        knex('cards').insert({match_id: 3, card_id: 40, position_id: 28,}),
        knex('cards').insert({match_id: 3, card_id: 39, position_id: 37,}),
        knex('cards').insert({match_id: 3, card_id: 13, position_id: 17,}),
        knex('cards').insert({match_id: 3, card_id: 52, position_id: 27,}),
        knex('cards').insert({match_id: 3, card_id: 37, position_id: 36,}),
        knex('cards').insert({match_id: 3, card_id: 1, position_id: 16,}),
        knex('cards').insert({match_id: 3, card_id: 51, position_id: 26,}),
        knex('cards').insert({match_id: 3, card_id: 29, position_id: 35,}),
        knex('cards').insert({match_id: 3, card_id: 4, position_id: 15,}),
        knex('cards').insert({match_id: 3, card_id: 42, position_id: 25,}),
        knex('cards').insert({match_id: 3, card_id: 38, position_id: 34,}),
        knex('cards').insert({match_id: 3, card_id: 3, position_id: 14,}),
        knex('cards').insert({match_id: 3, card_id: 50, position_id: 24,}),
        knex('cards').insert({match_id: 3, card_id: 28, position_id: 33,}),
        knex('cards').insert({match_id: 3, card_id: 7, position_id: 13,}),
        knex('cards').insert({match_id: 3, card_id: 41, position_id: 23,}),
        knex('cards').insert({match_id: 3, card_id: 31, position_id: 32,}),
        knex('cards').insert({match_id: 3, card_id: 8, position_id: 12,}),
        knex('cards').insert({match_id: 3, card_id: 46, position_id: 22,}),
        knex('cards').insert({match_id: 3, card_id: 35, position_id: 31,}),
        knex('cards').insert({match_id: 3, card_id: 10, position_id: 11,}),
        knex('cards').insert({match_id: 3, card_id: 48, position_id: 21,}),

        knex('cards').insert({match_id: 4, card_id: 2, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 1, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 3, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 5, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 8, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 13, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 6, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 4, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 12, position_id: 1,}),
        knex('cards').insert({match_id: 4, card_id: 28, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 31, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 32, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 34, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 27, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 36, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 35, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 38, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 39, position_id: 3,}),
        knex('cards').insert({match_id: 4, card_id: 40, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 41, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 42, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 43, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 45, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 44, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 50, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 51, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 52, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 46, position_id: 2,}),
        knex('cards').insert({match_id: 4, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 4, card_id: 7, position_id: 112,}),
        knex('cards').insert({match_id: 4, card_id: 48, position_id: 212,}),
        knex('cards').insert({match_id: 4, card_id: 30, position_id: 311,}),
        knex('cards').insert({match_id: 4, card_id: 9, position_id: 111,}),
        knex('cards').insert({match_id: 4, card_id: 47, position_id: 211,}),
        knex('cards').insert({match_id: 4, card_id: 10, position_id: 5,}),
        knex('cards').insert({match_id: 4, card_id: 29, position_id: 30,}),
        knex('cards').insert({match_id: 4, card_id: 11, position_id: 10,}),
        knex('cards').insert({match_id: 4, card_id: 49, position_id: 20,}),
        knex('cards').insert({match_id: 4, card_id: 37, position_id: 7,}),

        knex('cards').insert({match_id: 4, card_id: 36, position_id: 30,}),
        knex('cards').insert({match_id: 4, card_id: 12, position_id: 10,}),
        knex('cards').insert({match_id: 4, card_id: 44, position_id: 20,}),
        knex('cards').insert({match_id: 4, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 4, card_id: 9, position_id: 112,}),
        knex('cards').insert({match_id: 4, card_id: 47, position_id: 212,}),
        knex('cards').insert({match_id: 4, card_id: 32, position_id: 311,}),
        knex('cards').insert({match_id: 4, card_id: 6, position_id: 111,}),
        knex('cards').insert({match_id: 4, card_id: 49, position_id: 211,}),
        knex('cards').insert({match_id: 4, card_id: 34, position_id: 310,}),
        knex('cards').insert({match_id: 4, card_id: 5, position_id: 110,}),
        knex('cards').insert({match_id: 4, card_id: 45, position_id: 210,}),
        knex('cards').insert({match_id: 4, card_id: 30, position_id: 39,}),
        knex('cards').insert({match_id: 4, card_id: 11, position_id: 19,}),
        knex('cards').insert({match_id: 4, card_id: 43, position_id: 29,}),
        knex('cards').insert({match_id: 4, card_id: 27, position_id: 38,}),
        knex('cards').insert({match_id: 4, card_id: 2, position_id: 18,}),
        knex('cards').insert({match_id: 4, card_id: 40, position_id: 28,}),
        knex('cards').insert({match_id: 4, card_id: 39, position_id: 37,}),
        knex('cards').insert({match_id: 4, card_id: 13, position_id: 17,}),
        knex('cards').insert({match_id: 4, card_id: 52, position_id: 27,}),
        knex('cards').insert({match_id: 4, card_id: 37, position_id: 36,}),
        knex('cards').insert({match_id: 4, card_id: 1, position_id: 16,}),
        knex('cards').insert({match_id: 4, card_id: 51, position_id: 26,}),
        knex('cards').insert({match_id: 4, card_id: 29, position_id: 35,}),
        knex('cards').insert({match_id: 4, card_id: 4, position_id: 15,}),
        knex('cards').insert({match_id: 4, card_id: 42, position_id: 25,}),
        knex('cards').insert({match_id: 4, card_id: 38, position_id: 34,}),
        knex('cards').insert({match_id: 4, card_id: 3, position_id: 14,}),
        knex('cards').insert({match_id: 4, card_id: 50, position_id: 24,}),
        knex('cards').insert({match_id: 4, card_id: 28, position_id: 33,}),
        knex('cards').insert({match_id: 4, card_id: 7, position_id: 13,}),
        knex('cards').insert({match_id: 4, card_id: 41, position_id: 23,}),
        knex('cards').insert({match_id: 4, card_id: 31, position_id: 32,}),
        knex('cards').insert({match_id: 4, card_id: 8, position_id: 12,}),
        knex('cards').insert({match_id: 4, card_id: 46, position_id: 22,}),
        knex('cards').insert({match_id: 4, card_id: 35, position_id: 31,}),
        knex('cards').insert({match_id: 4, card_id: 10, position_id: 11,}),
        knex('cards').insert({match_id: 4, card_id: 48, position_id: 21,}),

        knex('cards').insert({match_id: 5, card_id: 2, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 1, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 3, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 5, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 8, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 13, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 6, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 4, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 12, position_id: 1,}),
        knex('cards').insert({match_id: 5, card_id: 28, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 31, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 32, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 34, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 27, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 36, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 35, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 38, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 39, position_id: 3,}),
        knex('cards').insert({match_id: 5, card_id: 40, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 41, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 42, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 43, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 45, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 44, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 50, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 51, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 52, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 46, position_id: 2,}),
        knex('cards').insert({match_id: 5, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 5, card_id: 7, position_id: 112,}),
        knex('cards').insert({match_id: 5, card_id: 48, position_id: 212,}),
        knex('cards').insert({match_id: 5, card_id: 30, position_id: 311,}),
        knex('cards').insert({match_id: 5, card_id: 9, position_id: 111,}),
        knex('cards').insert({match_id: 5, card_id: 47, position_id: 211,}),
        knex('cards').insert({match_id: 5, card_id: 10, position_id: 5,}),
        knex('cards').insert({match_id: 5, card_id: 29, position_id: 30,}),
        knex('cards').insert({match_id: 5, card_id: 11, position_id: 10,}),
        knex('cards').insert({match_id: 5, card_id: 49, position_id: 20,}),
        knex('cards').insert({match_id: 5, card_id: 37, position_id: 7,}),

        knex('cards').insert({match_id: 5, card_id: 36, position_id: 30,}),
        knex('cards').insert({match_id: 5, card_id: 12, position_id: 10,}),
        knex('cards').insert({match_id: 5, card_id: 44, position_id: 20,}),
        knex('cards').insert({match_id: 5, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 5, card_id: 9, position_id: 112,}),
        knex('cards').insert({match_id: 5, card_id: 47, position_id: 212,}),
        knex('cards').insert({match_id: 5, card_id: 32, position_id: 311,}),
        knex('cards').insert({match_id: 5, card_id: 6, position_id: 111,}),
        knex('cards').insert({match_id: 5, card_id: 49, position_id: 211,}),
        knex('cards').insert({match_id: 5, card_id: 34, position_id: 310,}),
        knex('cards').insert({match_id: 5, card_id: 5, position_id: 110,}),
        knex('cards').insert({match_id: 5, card_id: 45, position_id: 210,}),
        knex('cards').insert({match_id: 5, card_id: 30, position_id: 39,}),
        knex('cards').insert({match_id: 5, card_id: 11, position_id: 19,}),
        knex('cards').insert({match_id: 5, card_id: 43, position_id: 29,}),
        knex('cards').insert({match_id: 5, card_id: 27, position_id: 38,}),
        knex('cards').insert({match_id: 5, card_id: 2, position_id: 18,}),
        knex('cards').insert({match_id: 5, card_id: 40, position_id: 28,}),
        knex('cards').insert({match_id: 5, card_id: 39, position_id: 37,}),
        knex('cards').insert({match_id: 5, card_id: 13, position_id: 17,}),
        knex('cards').insert({match_id: 5, card_id: 52, position_id: 27,}),
        knex('cards').insert({match_id: 5, card_id: 37, position_id: 36,}),
        knex('cards').insert({match_id: 5, card_id: 1, position_id: 16,}),
        knex('cards').insert({match_id: 5, card_id: 51, position_id: 26,}),
        knex('cards').insert({match_id: 5, card_id: 29, position_id: 35,}),
        knex('cards').insert({match_id: 5, card_id: 4, position_id: 15,}),
        knex('cards').insert({match_id: 5, card_id: 42, position_id: 25,}),
        knex('cards').insert({match_id: 5, card_id: 38, position_id: 34,}),
        knex('cards').insert({match_id: 5, card_id: 3, position_id: 14,}),
        knex('cards').insert({match_id: 5, card_id: 50, position_id: 24,}),
        knex('cards').insert({match_id: 5, card_id: 28, position_id: 33,}),
        knex('cards').insert({match_id: 5, card_id: 7, position_id: 13,}),
        knex('cards').insert({match_id: 5, card_id: 41, position_id: 23,}),
        knex('cards').insert({match_id: 5, card_id: 31, position_id: 32,}),
        knex('cards').insert({match_id: 5, card_id: 8, position_id: 12,}),
        knex('cards').insert({match_id: 5, card_id: 46, position_id: 22,}),
        knex('cards').insert({match_id: 5, card_id: 35, position_id: 31,}),
        knex('cards').insert({match_id: 5, card_id: 10, position_id: 11,}),
        knex('cards').insert({match_id: 5, card_id: 48, position_id: 21,}),

        knex('cards').insert({match_id: 6, card_id: 2, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 1, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 3, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 5, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 8, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 13, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 6, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 4, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 12, position_id: 1,}),
        knex('cards').insert({match_id: 6, card_id: 28, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 31, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 32, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 34, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 27, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 36, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 35, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 38, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 39, position_id: 3,}),
        knex('cards').insert({match_id: 6, card_id: 40, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 41, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 42, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 43, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 45, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 44, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 50, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 51, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 52, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 46, position_id: 2,}),
        knex('cards').insert({match_id: 6, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 6, card_id: 7, position_id: 112,}),
        knex('cards').insert({match_id: 6, card_id: 48, position_id: 212,}),
        knex('cards').insert({match_id: 6, card_id: 30, position_id: 311,}),
        knex('cards').insert({match_id: 6, card_id: 9, position_id: 111,}),
        knex('cards').insert({match_id: 6, card_id: 47, position_id: 211,}),
        knex('cards').insert({match_id: 6, card_id: 10, position_id: 5,}),
        knex('cards').insert({match_id: 6, card_id: 29, position_id: 30,}),
        knex('cards').insert({match_id: 6, card_id: 11, position_id: 10,}),
        knex('cards').insert({match_id: 6, card_id: 49, position_id: 20,}),
        knex('cards').insert({match_id: 6, card_id: 37, position_id: 7,}),

        knex('cards').insert({match_id: 6, card_id: 36, position_id: 30,}),
        knex('cards').insert({match_id: 6, card_id: 12, position_id: 10,}),
        knex('cards').insert({match_id: 6, card_id: 44, position_id: 20,}),
        knex('cards').insert({match_id: 6, card_id: 33, position_id: 312,}),
        knex('cards').insert({match_id: 6, card_id: 9, position_id: 112,}),
        knex('cards').insert({match_id: 6, card_id: 47, position_id: 212,}),
        knex('cards').insert({match_id: 6, card_id: 32, position_id: 311,}),
        knex('cards').insert({match_id: 6, card_id: 6, position_id: 111,}),
        knex('cards').insert({match_id: 6, card_id: 49, position_id: 211,}),
        knex('cards').insert({match_id: 6, card_id: 34, position_id: 310,}),
        knex('cards').insert({match_id: 6, card_id: 5, position_id: 110,}),
        knex('cards').insert({match_id: 6, card_id: 45, position_id: 210,}),
        knex('cards').insert({match_id: 6, card_id: 30, position_id: 39,}),
        knex('cards').insert({match_id: 6, card_id: 11, position_id: 19,}),
        knex('cards').insert({match_id: 6, card_id: 43, position_id: 29,}),
        knex('cards').insert({match_id: 6, card_id: 27, position_id: 38,}),
        knex('cards').insert({match_id: 6, card_id: 2, position_id: 18,}),
        knex('cards').insert({match_id: 6, card_id: 40, position_id: 28,}),
        knex('cards').insert({match_id: 6, card_id: 39, position_id: 37,}),
        knex('cards').insert({match_id: 6, card_id: 13, position_id: 17,}),
        knex('cards').insert({match_id: 6, card_id: 52, position_id: 27,}),
        knex('cards').insert({match_id: 6, card_id: 37, position_id: 36,}),
        knex('cards').insert({match_id: 6, card_id: 1, position_id: 16,}),
        knex('cards').insert({match_id: 6, card_id: 51, position_id: 26,}),
        knex('cards').insert({match_id: 6, card_id: 29, position_id: 35,}),
        knex('cards').insert({match_id: 6, card_id: 4, position_id: 15,}),
        knex('cards').insert({match_id: 6, card_id: 42, position_id: 25,}),
        knex('cards').insert({match_id: 6, card_id: 38, position_id: 34,}),
        knex('cards').insert({match_id: 6, card_id: 3, position_id: 14,}),
        knex('cards').insert({match_id: 6, card_id: 50, position_id: 24,}),
        knex('cards').insert({match_id: 6, card_id: 28, position_id: 33,}),
        knex('cards').insert({match_id: 6, card_id: 7, position_id: 13,}),
        knex('cards').insert({match_id: 6, card_id: 41, position_id: 23,}),
        knex('cards').insert({match_id: 6, card_id: 31, position_id: 32,}),
        knex('cards').insert({match_id: 6, card_id: 8, position_id: 12,}),
        knex('cards').insert({match_id: 6, card_id: 46, position_id: 22,}),
        knex('cards').insert({match_id: 6, card_id: 35, position_id: 31,}),
        knex('cards').insert({match_id: 6, card_id: 10, position_id: 11,}),
        knex('cards').insert({match_id: 6, card_id: 48, position_id: 21,}),
      ]);
    });
};

