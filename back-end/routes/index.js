const userAuth = require("./userAuth");
const user = require("./user");
const card = require("./card");
const adminAuth = require("./adminAuth");
const contact = require("./contact");
const paths = [
  {
    path: "/api/user",
    controller: [userAuth, user],
  },
  {
    path: "/api/admin",
    controller: adminAuth,
  },
  {
    path: "/api/card",
    controller: card,
  },
  {
    path: "/api/contact",
    controller: contact,
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
