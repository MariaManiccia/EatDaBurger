/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
// Grabbing the ORM file
const orm = require('../config/orm.js');

// Burger Model
const burger = {

  selectAll(callback) {
    orm.selectAll((res) => {
      callback(res);
    });
  },

  insertOne(burger_name, callback) {
    orm.insertOne(burger_name, (res) => {
      callback(res);
    });
  },

  updateOne(burger_id, callback) {
    orm.updateOne(burger_id, (res) => {
      callback(res);
    });
  },

};

// Export
module.exports = burger;
