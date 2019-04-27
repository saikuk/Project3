const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/project3db" 
);

const menuSeed = [
  {
    image: "assets/images/cheese150.png",
    itemType: "Pizza",
    itemName: "Plain",
    price: 4.30
  },
  { 
    image: "assets/images/Buffalo-Chicken-Pizza150.png",
    itemType: "Pizza",
    itemName: "Buffalo Chicken",
    price: 7.30
  },
  {
    image: "assets/images/Hawaiian150.png",
    itemType: "Pizza",
    itemName: "Honolulu Hawaiian",
    price: 8.50
  },
  {
    image: "assets/images/Spinach-Pizza150.png",
    itemType: "Pizza",
    itemName: "Spinach & Feta",
    price: 7.50
  },
  {
    image: "assets/images/PcPizzaPhillyCheesesteak150.png",
    itemType: "Pizza",
    itemName: "Philly Cheese Steak",
    price: 10.30
  },
  {
    image: "assets/images/Deluxe150.png",
    itemType: "Pizza",
    itemName: "Deluxe",
    price: 12.30
  },
  {
    image: "assets/images/Meat-Lovers150.png",
    itemType: "Pizza",
    itemName: "MeatZZa",
    price: 9.30
  },
  {
    image: "assets/images/chicken-carbonara150.png",
    itemType: "Pasta",
    itemName: "Chicken Carbonara",
    price: 8.99
  },
  {
    image: "assets/images/Pasta-Primavera150.png",
    itemType: "Pasta",
    itemName: "Pasta Primavera",
    price: 8.99
  },
  {
    image: "assets/images/italian150.png",
    itemType: "Pasta",
    itemName: "Italian Sausage Marinara",
    price: 8.99
  },
  {
    image: "assets/images/ChickenAlfredo150.png",
    itemType: "Pasta",
    itemName: "Chicken Alfredo",
    price: 8.99
  },
  {
    image: "assets/images/coke150.png",
    itemType: "Drinks",
    itemName: "Coke",
    price: 2.30
  },
  {
    image: "assets/images/sprite150.png",
    itemType: "Drinks",
    itemName: "Sprite",
    price: 2.30
  }
];

const userSeed = [
  {
    firstName: "jack",
    lastName: "curry",
    email: "abc@google.com",
    password: "abcd"
  }
];

const orderSeed = [
  {
    userId: "1",
    item: "Sprite",
    price: 2.30
  }
];

const deliverySeed = [
  {
    order_id: "1",
    name: "Jim ",
    address: "10 South Ave Philadelphia",
    phone: 1234567890,
    email: 'test@gmail.com'
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
  })
  .catch(err => {
    console.error(err);
  });


  db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.result.n + " user records inserted!");
  })
  .catch(err => {
    console.error(err);
  });

  db.Delivery
  .remove({})
  .then(() => db.Delivery.collection.insertMany(deliverySeed))
  .then(data => {
    console.log(data.result.n + " delivery records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Menu
  .remove({})
  .then(() => db.Menu.collection.insertMany(menuSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});

db.Order
  .remove({})
  .catch(err => {
    console.error(err);
    process.exit(1);
});






