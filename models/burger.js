var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertRow: function (cols, vals, cb) {
        orm.insertRow("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateRow: function (objColVals, condition, cb) {
        orm.updateRow("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    deleteRow: function (condition, cb) {
        orm.deleteRow("burgers ", condition, function (res) {
            cb(res);
        });
    }
};


// Export the database functions for the controller 
module.exports = burger;