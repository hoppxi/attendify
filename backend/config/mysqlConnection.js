const mysql = require("mysql2");
const util = require("util")
const database_name = "attendify";
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "NDM@1998?!1999",
    database: database_name
    
});
connection.connect(
    function (err) {
        if (err) {
            console.log("[DATABASE ERROR] Cannot connect to "+ database_name);
            console.log(err)

        }
        else {
           
        }
    }
)
const query = util.promisify(connection.query).bind(connection)

module.exports = { query, connection}