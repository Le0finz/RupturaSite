const express = require('express');
const app = express();
const route = require("./src/routes/route")
require("dotenv").config();
const path = require("path")
const handlebars = require("express-handlebars");

const Sequelize =  require("Sequelize");
const sequelize = new Sequelize("ruptura", "root", "Leonardo123@",{
    host : "localhost",
    dialect : "mysql"
});

sequelize.authenticate().then (function(){
    console.log("Authenticated")
}).catch (function(err){
    console.log("Failed to authenticate: " + err.message)
})

//handlebars
app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.set('view engine', 'ejs');
app.set("views",path.resolve(__dirname , "src","views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(route)
app.listen(process.env.PORT, () => {
    console.log("listening on http://localhost:", process.env.PORT);
});