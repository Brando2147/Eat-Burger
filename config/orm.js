var connection = require("./connection.js");


var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });

    },
    insertOne: function (colInsert, tableInput) {
        var queryString = "INSERT ?? INTO  ?? ";
        connection.query(queryString, [colInsert, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function (tableInput, colToUpdate, updatedCol) {
        var queryString = "UPDATE ?? SET ?? WHERE ??= ?";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        })


    }

}


module.exports = orm;
