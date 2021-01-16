const orm = require("../config/orm");

let burgers = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
 
  createUno: function (cols, vals, cb) {
    orm.createUno("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  insertUno: function (objColVals, boolean, condition, cb) {
    orm.insertUno("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },

    // update a burger within the database
    updateUno: function (objColVals,  condition, cb) {
      orm.updateUno("burgers", objColVals, condition, function (res) {
        cb(res);
      });
    },

  deleteUno: function (condition, cb) {
    orm.deleteUno("burgers", condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
