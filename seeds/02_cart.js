exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "cart_tb"; ALTER SEQUENCE cart_tb_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('cart_tb').insert([
        {
          id: 1,
          quantity: 0,
          productkey:1
        },
        {
          id: 2,
          quantity: 0,
          productkey:2
        },
        {
          id: 3,
          quantity: 0,
          productkey:3
        },
        {
          id: 4,
          quantity: 0,
          productkey:4
        },
        {
          id: 5,
          quantity: 0,
          productkey:5
        },
        {
          id: 6,
          quantity: 0,
          productkey:6
        }
      ]);
    });
};