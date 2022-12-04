const express = require('express');
const app = express();
const route = require("./src/routes/route")
require("dotenv").config();

app.use(route)
app.listen(process.env.PORT, () => {
    console.log("listening on http://localhost:",process.env.PORT);
});