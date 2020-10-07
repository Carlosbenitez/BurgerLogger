const express = require("express");
const exphs = require("express-handlebars")
const app = express();
const PORT = process.env.PORT||8080;

app.engine("handlebars", exphs({
    defaultLayout:"main"
}))
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const catsController = require("./controllers/catsController");
app.use(catsController)
app.listen(PORT,function(){
    console.log("The server is listening.", PORT)
})