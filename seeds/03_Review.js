exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "review_tb"; ALTER SEQUENCE review_tb_id_seq RESTART WITH 3;')
    .then(function () {
      // Inserts seed entries
      return knex('review_tb').insert([
        {
          id: 1,
          name: 'Matt Winzer',
          review: 'This is like THE best thing I have EVER had. Thanks BizEatz!'
        },
        {
          id: 2,
          name: 'James Schultz',
          review: 'A gajillion times tastier than MREs....but JUST as convenient. OMG!!!'
        }
      ]);
    });
};
