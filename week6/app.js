const Express = require("express");
const BodyParser = require("body-parser");  //handle payloads
const Joi = require("joi");
const JsonWebToken = require("jsonwebtoken");


const app = Express();

// 3rd party middleware to help us parse our message body
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}))

//set a secret key for our token, signed by server, using EGR424
app.set("jwt-secret", "EGR424");   

var authors = [
    {
        "id": "author-1",
        "username": "mskim",
        "password": "12345",
        "display_name": "Mark Kim",
        "timestamp": 398753498
    },
    {
        "id": "author-2",
        "username": "jdoe",
        "password": "54321",
        "display_name": "John Doe",
        "timestamp": 29347348
    }
];

var articles = [
    {
        "id": "article-1",
        "title": "Blog #1",
        "content": "This is a test article for the first blog",
        "author": "author-1",
        "timestamp": 394875345
    },
    {
        "id": "article-2",
        "title": "Blog #2",
        "content": "This is a test article for the second blog",
        "author": "author-1",
        "timestamp": 564578973
    },
    {
        "id": "article-3",
        "title": "Blog #1",
        "content": "This is a test article for the first blog of another author",
        "author": "author-2",
        "timestamp": 34587345
    }
];

//create our data schema based on our data above
const schemaAuthor = Joi.object().keys({
    username: Joi.string().alphanum().min(5).max(15).required(),
    password: Joi.string().required(),
    display_name: Joi.string().required(),
    timestamp: Joi.date().forbidden()
});


const schemaArticle = Joi.object().keys({
    title: Joi.string().min(20).max(65).required(),
    content : Joi.string().required(),
    author: Joi.string().forbidden(),  // forbidden will trigger an error message
    timestamp: Joi.date().forbidden()
})

//custom middleware function
var validateJWT = (request, response, next) => {
    var authHeader = request.headers["authorization"];
    if(authHeader) {
        var bearerToken = authHeader.split(" ");
        if(bearerToken.length == 2) {
            JsonWebToken.verify(bearerToken[1], app.get("jwt-secret"), (error, decodedToken) => {
                if(error) {
                    return response.status(401).send({ "message": "invalid token" });    
                }
                request.decodedToken = decodedToken;
                next();
            });
        } else {
            return response.status(401).send({ "message": "header is malformed" });
        }
    }
    else {
        response.status(401).send({ "message" : "header is required" });
    }   
};

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

app.get("/authors", (request, response, next) => {
    response.send(authors);
});

app.get("/author/:id", (request, response, next) => {
    var author = authors.find(author => {
        return author.id == request.params.id;
    });
    response.send(author || {});
});

app.post("/author", (request, response, next) => {
    var data = request.body;
    const { error, value } = schemaAuthor.validate(data, {abortEarly : false});
    if(error) {
        return response.status(500).send(error.details);
    }
    authors.push(value);
    response.send(authors);
});


app.put("/author/:id", (request, response, next) => {
    for(var i = 0; i < authors.length; i++) {
        if(authors[i].id == request.params.id) {
            for(key in request.body) {
                authors[i][key] = request.body[key];
            }
            break;
        }
    }
    response.send(authors);
});

app.delete("/author/:id", (request, response, next) => {
    for(var i = 0; i < authors.length; i++) {
        if(authors[i].id == request.params.id) {
            delete authors[i];
            break;
        }
    }
    response.send(authors);
});



app.get("/articles", (request, response, next) => {
    response.send(articles);
});

app.get("/article/:id", (request, response, next) => {
    var author = articles.find(article => {
        return article.id == request.params.id;
    });
    response.send(article || {});
});

app.post("/article", validateJWT, (request, response, next) => {
    var data = request.body;
    const { error, value } = schemaArticle.validate(data, {abortEarly : false});
    if(error){
        return response.status(500).send(error.details);
    }
    value.author = request.decodedToken.author;
    articles.push(value);
    response.send(articles);
});


app.put("/article/:id", (request, response, next) => {
    for(var i = 0; i < articles.length; i++) {
        if(articles[i].id == request.params.id) {
            for(key in request.body) {
                articles[i][key] = request.body[key];
            }
            break;
        }
    }
    response.send(authors);
});

app.delete("/article/:id", (request, response, next) => {
    for(var i = 0; i < articles.length; i++) {
        if(articles[i].id == request.params.id) {
            delete articles[i];
            break;
        }
    }
    response.send(articles);
});


app.listen(3001, () => {
    console.log("Listening at :3001...");
});