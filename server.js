const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(require("path").join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.listen(process.env.PORT || 3025, () => console.log("http://localhost:3025")));