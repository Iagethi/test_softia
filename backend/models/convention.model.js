const mongoose = require("mongoose");

const ConventionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nbHours: {
      // number of hours
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Convention", ConventionSchema);
