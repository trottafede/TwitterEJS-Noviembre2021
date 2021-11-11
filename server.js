require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const port = process.env.PORT || 8000;
const passport = require("./middlewares/passport");

const db = require("./models");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
passport(app);
// Db connection
db();
// Routes
routes(app);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
