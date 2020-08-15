let mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  formIds: {
    type: [],
  },
  previousCoutn: {
    type: Number,
    default: 0,
  },
});

mongoose.model("Dept", DepartmentSchema);
