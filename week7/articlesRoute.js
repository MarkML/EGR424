const express = require("express");
const router = express.Router();
const Joi = require("joi");
const UUID = require("uuid");

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


const schemaArticle = Joi.object().keys({
  title: Joi.string().min(5).max(65).required(),
  content : Joi.string().required(),
  author: Joi.string().forbidden(),  // forbidden will trigger an error message
  timestamp: Joi.date().forbidden()
});

router.get("/articles", (request, response, next) => {
  response.send(articles);
});

router.get("/articles/:id", (request, response, next) => {
  var article = articles.find(article => {
      return article.id == request.params.id;
  });
  response.send(article || {});
});

router.post("/articles", (request, response, next) => {
  var data = request.body;
  const { error, value } = schemaArticle.validate(data, {abortEarly : false});
  if(error){
      return response.status(500).send(error.details);
  }
  value.id = UUID.v4();
  value.timestamp = (new Date()).getTime();

  articles.push(value);
  response.send(articles);
});


router.put("/articles/:id", (request, response, next) => {
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

router.delete("/articles/:id", (request, response, next) => {
  for(var i = 0; i < articles.length; i++) {
      if(articles[i].id == request.params.id) {
          delete articles[i];
          break;
      }
  }
  response.send(articles);
});

module.exports = router
