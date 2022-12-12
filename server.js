const express = require('express');
const app = express();
const route = require("./src/routes/route")
require("dotenv").config();
const path = require("path")
const bodyParser = require("body-parser");
const Post = require("./models/Post")

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/login', function(req, res){
    Post.create({
        username: req.body.username,
        password: req.body.password
    }).then(function(){
        res.redirect('/login');
    }).catch(function(err){
        res.send("ouve um erro"+err.message)
    })
})

app.set('view engine', 'ejs');
app.set("views",path.resolve(__dirname , "src","views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(route)
app.listen(process.env.PORT, () => {
    console.log("listening on http://localhost:", process.env.PORT);
});