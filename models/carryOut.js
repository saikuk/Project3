const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carryOutSchema = new Schema({
  order_id: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true }
  
});

const carryOut = mongoose.model("CarryOut", carryOutSchema);

module.exports = carryOut;
