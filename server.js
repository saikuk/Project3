const express = require("express");
// const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001
if (process.env.NODE_ENV === "production") { app.use(express.static("client/build")); }

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3db" ||  "mongodb://heroku_q3c9t3nd:Saikuk123@ds015334.mlab.com:15334/heroku_q3c9t3nd" );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`); 
});
