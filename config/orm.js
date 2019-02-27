/* eslint-disable linebreak-style */
// Grabbing the connection
const connection = require('../config/connection.js');

// Creating the ORM
const orm = {
  // Connecting with the DB through the right syntax
  selectAll(callback) {
    connection.query('SELECT * FROM burgers', (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },


  // eslint-disable-next-line camelcase
  insertOne(burger_name, callback) {
    connection.query('INSERT INTO burgers SET ?',
      {
        burger_name,
        devoured: false,
      }, (err, result) => {
        if (err) throw err;
        callback(result);
      });
  },


  updateOne(burgerID, callback) {
    connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }],
      (err, result) => {
        if (err) throw err;
        callback(result);
      });
  },
};

// Export
module.exports = orm;
