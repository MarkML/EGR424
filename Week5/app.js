const Express = require("express");
const BodyParser = require("body-parser");

const app = Express();

// 3rd party middleware to help us parse our message body
app.use(BodyParser.json());



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

// app.get("/", (request, response) => {
//     response.send("Welcome to EGR424");
// });

app.get("/authors", (request, response) => {
    response.send(authors);
});

app.get("/author/:id", (request, response) => {
    var author = authors.find(author => {
        return author.id == request.params.id;
    });
    response.send(author || {});
});

app.post("/author", (request, response) => {
    var data = request.body;
    authors.push(value);
    response.send(authors);
});


app.put("/author/:id", (request, response) => {
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


app.listen(3000, () => {
    console.log("Listening at :3000...");
});