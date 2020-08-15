let mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const FormSchema = new mongoose.Schema(
  {
    sender: {
      type: ObjectId,
      required: true,
    },
    receiver: {
      type: ObjectId,
      required: true,
    },
    receiverDept: {
      type: ObjectId,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    msg: {
      type: String,
    },
  },
  { timestamps: true }
);

// FormSchema.methods.updateStatus = function(_id, status){
//      FormSchema.findById
// }

mongoose.model("Form", FormSchema);
