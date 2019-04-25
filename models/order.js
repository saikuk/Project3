const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: { type: String },
  price: { type: Number, required: true },
  item: { type: String, required: true },
  createdate: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
