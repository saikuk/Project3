const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/menulisting"
);

const menuSeed = [
  {
    itemType: "Pizza",
    itemName: "Plain",
    price: 4.30
  },
  {
    itemType: "Pizza",
    itemName: "Buffalo Chicken",
    price: 7.30
  },
  {
    itemType: "Pizza",
    itemName: "Honolulu Hawaiian",
    price: 8.50
  },
  {
    itemType: "Pizza",
    itemName: "Spinach & Feta",
    price: 7.50
  },
  {
    itemType: "Pizza",
    itemName: "Philly Cheese Steak",
    price: 10.30
  },
  {
    itemType: "Pizza",
    itemName: "Deluxe",
    price: 12.30
  },
  {
    itemType: "Pizza",
    itemName: "MeatZZa",
    price: 9.30
  },
  {
    itemType: "Pasta",
    itemName: "Chicken Carbonara",
    price: 8.99
  },
  {
    itemType: "Pasta",
    itemName: "Pasta Primavera",
    price: 8.99
  },
  {
    itemType: "Pasta",
    itemName: "Italian Sausage Marinara",
    price: 8.99
  },
  {
    itemType: "Pasta",
    itemName: "Chicken Alfredo",
    price: 8.99
  },
  {
    itemType: "Drinks",
    itemName: "Coke",
    price: 2.30
  },
  {
    itemType: "Drinks",
    itemName: "Sprite",
    price: 2.30
  }
];

db.Menu
  .remove({})
  .then(() => db.Book.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
