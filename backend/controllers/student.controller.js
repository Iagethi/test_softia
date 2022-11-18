const Student = require("../models/student.model");
const Convention = require("../models/convention.model");

module.exports = {
  // find all students
  async findAll(req, res) {
    Student.find()
      .populate("convention")
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving students.",
        });
      });
  },
  // find one student by id
  async findOne(req, res) {
    const id = req.params.id;
    Student.findById(id)
      .populate("convention")
      .then((data) => {
        if (!data)
          res.status(404).send({ message: "Not found Student with id " + id });
        else res.send(data);
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Error retrieving Student with id=" + id });
      });
  },
};
