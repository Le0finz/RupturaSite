const express = require('express');
const app = express();
const route = require("./src/routes/route")
require("dotenv").config();
const path = require("path")

app.set('view engine', 'ejs');
app.set("views",path.resolve(__dirname , "src","views"));
app.use(route)
app.listen(process.env.PORT, () => {
    console.log("listening on http://localhost:",process.env.PORT);
});