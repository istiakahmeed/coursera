const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const purchaseSchema = mongoose.Schema({
  userId: {
    type: objectId,
    ref: "user",
    required: true,
  },
  courseId: {
    type: objectId,
    ref: "crouse",
    required: true,
  },
});

const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = purchaseModel;
