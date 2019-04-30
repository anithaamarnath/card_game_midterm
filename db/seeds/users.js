exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ name: 'Alice', ranking: 1010}),
        knex('users').insert({ name: 'Bob', ranking: 1000}),
        knex('users').insert({ name: 'Charlie', ranking: 990})
      ]);
    });
};
