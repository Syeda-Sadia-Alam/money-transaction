const userAuth = require("./userAuth");
const adminAuth = require('./adminAuth');

const paths = [
  {
    path: "/api/user",
    controller: [userAuth],
  },
  {
    path:'/api/admin',
    controller:adminAuth
  },
  {
    path: "/api/welcome",
    controller: (req, res) => {
      res.send("Assalamu Alaikum");
    },
  },
];

module.exports = (app) => {
  paths.forEach(({ path, controller }) => {
    app.use(path, controller);
  });
};
