const controller = require("../controllers/student.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/students", controller.findAll);
  app.get("/api/students/:id", controller.findOne);
};
