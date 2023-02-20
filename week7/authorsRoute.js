const express = require("express");
const router = express.Router();
const Joi = require("joi");
const UUID = require("uuid");

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

//create our data schema based on our data above
const schemaAuthor = Joi.object().keys({
    username: Joi.string().alphanum().min(5).max(15).required(),
    password: Joi.string().required(),
    display_name: Joi.string().required(),
    timestamp: Joi.date().forbidden()
});

router.get("/authors", (request, response, next) => {
    response.send(authors);
});

router.get("/authors/:id", (request, response, next) => {
    var author = authors.find(author => {
        return author.id == request.params.id;
    });
    response.send(author || {});
});

router.post("/authors", (request, response, next) => {
    var data = request.body;
    const { error, value } = schemaAuthor.validate(data, {abortEarly : false});
    if(error) {
        return response.status(500).send(error.details);
    }
    value.id = UUID.v4();
    value.timestamp = (new Date()).getTime();
    authors.push(value);
    response.send(authors);
});


router.put("/authors/:id", (request, response, next) => {
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

router.delete("/authors/:id", (request, response, next) => {
    for(var i = 0; i < authors.length; i++) {
        if(authors[i].id == request.params.id) {
            delete authors[i];
            break;
        }
    }
    response.send(authors);
});

module.exports = router;

