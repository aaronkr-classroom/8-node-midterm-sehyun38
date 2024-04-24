
"use strict";

const port = 3002,
    express =require("express"),
    layouts = require("express-ejs-layouts"),
    homeController = require("./controllers/homeController"),
    errorController = require("./controllers/errorController"),
    app = express();

app.set("port", process.env.PORT || port);

app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.use(
    express.urlencoded({
        extended:false
    })
);
app.use(express.json());


app.get("/", homeController.getHome);
app.get("/contact",homeController.showSignUp);
app.post("/contact",homeController.postedContactForm);
app.get("/transportation",homeController.showTrans);


app.use(errorController.pageNotFoundError); //404
app.use(errorController.internalServerError); //500

app.listen(app.get("port"),()=>{
    console.log(`Sever at : http://localHost:${app.get("port")}`)
})