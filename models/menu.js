const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  itemType: { type: String, required: true },
  itemName: { type: String, required: true },
  price: {type: Number, required: true}
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;


