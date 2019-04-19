const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  image:{type: String, required: true },
  itemType: { type: String, required: true },
  itemName: { type: String, required: true },
  price: {type: Number, required: true}
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;


