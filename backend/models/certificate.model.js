const mongoose = require("mongoose");

const CertificateSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    convention: { type: mongoose.Schema.Types.ObjectId, ref: "Convention" },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Certificate", CertificateSchema);
