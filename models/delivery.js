const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const deliverySchema = new Schema({
  order_id: { type: String, required: true },
  address: { type: String, required: true }
});

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
