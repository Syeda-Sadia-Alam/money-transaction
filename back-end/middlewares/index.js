const express = require('express')

const middlewares = [
  express.urlencoded({extended:true}),
  express.json(),
];

module.exports = (app) => {
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
};
