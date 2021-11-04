const userAuth = require("./userAuth");
const adminAuth = require('./adminAuth');
const user = require('./user')
const paths = [
  {
    path: "/api/user",
    controller: [userAuth,user],
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
