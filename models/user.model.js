let mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dept: {
      type: ObjectId,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model("Users", UserSchema);
