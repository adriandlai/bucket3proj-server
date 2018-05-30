exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "menu_tb"; ALTER SEQUENCE menu_tb_id_seq RESTART WITH 7;')
    .then(function () {
      // Inserts seed entries
      return knex('menu_tb').insert([
        {
          id: 1,
          picture_url: './assets/paleoburger.png',
          product_name: 'Paleo Burger',
          price: '16.95',
          productkey:1
        },
        {
          id: 2,
          picture_url: './assets/chipotlebowl.png',
          product_name: 'Chipotle Beef Burrito Bowl',
          price: '14.95',
          productkey:2
          
        },
        {
          id: 3,
          picture_url: './assets/salmonandrice.png',
          product_name: 'Salmon and Brown Rice',
          price: '17.95',
          productkey:3
          
        },
        {
          id: 4,
          picture_url: './assets/searedtuna.png',
          product_name: 'Seared Yellowfin Tuna Salad',
          price: '17.95',
          productkey:4
          
        },
        {
          id: 5,
          picture_url: './assets/kalesalad.png',
          product_name: 'Beet and Baby Kale Salad',
          price: '12.95',
          productkey:5
          
        },
        {
          id: 6,
          picture_url: './assets/rosemarychicken.png',
          product_name: 'Rosemary Lemon Grilled Chicken',
          price: '14.95',
          productkey:6
        }
      ]);
    });
};

