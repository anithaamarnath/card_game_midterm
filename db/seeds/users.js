exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({ name: 'Alice', ranking: 0}),
        knex('users').insert({ name: 'Bob', ranking: 0}),
        knex('users').insert({ name: 'Charlie', ranking: 0})
      ]);
    });
};
