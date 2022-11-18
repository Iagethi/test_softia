const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    convention: [{ type: mongoose.Schema.Types.ObjectId, ref: "Convention" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
