const Express = require("express");
const BodyParser = require("body-parser");  //handle payloads
const Joi = require("joi");
const JsonWebToken = require("jsonwebtoken");
const UUID = require("uuid");
const Cors = require("cors");

const authorsRoute = require("./routes/authorsRoute");
const articlesRoute = require("./routes/articlesRoute");

const app = Express();

// 3rd party middleware to help us parse our message body
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}))

//middleware to allow ALL access from other clients (browsers) to your application
app.use(Cors());  

//set a secret key for our token, signed by server, using EGR424
app.set("jwt-secret", "EGR424");   


app.post("/login", (request, response, next) => {
    if(!request.body.username) {
        return response.status(401).send({"message": "A username is required."});
    } else if(!request.body.password) {
        return response.status(401).send({"message": "A password is required."});
    }
    var author = authors.find(author => {
        return author.username == request.body.username &&
               author.password == request.body.password;
    });
    if(!author) {
        return response.status(500).send({"message": "invalid account"});
    }
    //create secure token
    var token = JsonWebToken.sign({"author": author.id }, app.get("jwt-secret"), {});
    response.send({ "token": token })
});

app.use(authorsRoute);

app.use(articlesRoute);

app.listen(3001, () => {
    console.log("Listening at :3001...");
});