//sequelize
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

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}