const database = require("./database")
const app = require("./app");
const morgan = require("morgan");


app.listen(app.get("port"));

console.log("server on port", app.get("port"));