const express = require('express')
const cors  = require('cors')
const middlewares = [
  express.urlencoded({extended:true}),
  express.json(),
  cors()
];

module.exports = (app) => {
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
};
