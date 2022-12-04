const express = require('express');
const app = express();


const route = require("./routes/route")
app.use(route)



app.listen(3002, () => {
    console.log("listening on http://localhost:3002")
});