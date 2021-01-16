const connection = require("./connection.js");

let orm = {
  selectAll: function(tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertUno: function(table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  updateUno: function(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objColVals} = true WHERE id = ${condition};`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  deleteUno: function(table, condition, cb) {
    var queryString = `DELETE FROM ${table} WHERE ${condition}`;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;