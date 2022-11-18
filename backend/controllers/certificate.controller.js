const Certificate = require("../models/certificate.model");
const Student = require("../models/student.model");
const Convention = require("../models/convention.model");

module.exports = {
  // create a new certificate
  async create(req, res) {
    let payload = req.body;
    try {
      let certificate = await Certificate(payload).save();
      console.log(payload);
      return res.status(200).json({
        code: 200,
        message: "Certificate Create Successfully",
        data: certificate,
      });
    } catch (error) {
      res.status(501).json({
        code: 501,
        message: error.message,
        error: true,
      });
    }
  },
};
