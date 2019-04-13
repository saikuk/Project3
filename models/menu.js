const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  itemType: { type: String, required: true },
  itemName: { type: String, required: true },
  price: {type: Number, required: true}
});


// Getter
menuSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
menuSchema.path('price').set(function(num) {
  return num * 100;
});
const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
