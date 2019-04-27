const express = require("express");
// const path = require("path");
const User = require("./models/user");
const Delivery = require("./models/delivery")
const CarryOut = require("./models/carryOut")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const session = require("express-session");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001
if (process.env.NODE_ENV === "production") { app.use(express.static("client/build")); }

// Set our passport strategy to local (username and password)
// Change the username to an email to match our user model
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) {
        console.log(err)
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info){
      if(err) { return next(err); }
      if(!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if(err) { return next(err); }
        return res.redirect('/menu')
      })
    })(req, res, next);
 })
app.post('/signup', (req, res, next) => {
  console.log("testing")
  const { body } = req;
  let {
      firstName,
      lastName,
      password,
      email
  } = body;
  console.log(firstName)
  console.log(lastName)
  console.log(email)
  console.log(password)


  if(!firstName) {
      return res.send({
          success: false,
          message: "First name cannot be blank"
      });
  }
  if(!lastName) {
      return res.send({
          success: false,
          message: "Last name cannot be blank"
      });
  }
  if(!email) {
      return res.send({
          success: false,
          message: "Email cannot be blank"
      });
  }
  if(!password) {
      return res.send({
          success: false,
          message: "Password cannot be blank"
      });
  }
  email = email.toLowerCase();

  const newUser = new User();
  newUser.email = email;
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.password = password;
  newUser.save((err, user) => {
    console.log("SOMETHING")
      if (err) {
        console.log(err)
      //     res.end({
      //     //     success: false,
      //     //     message: 'ERROR: Server'
      //     });
      }else{
        res.redirect('/login')
      }
      // res.end({
      //     // success: true,
      //     // message: 'Signed Up'
      // });
  });
});
app.post('/delivery', (req, res, next) => {
  const { body } = req;
  let {
      name,
      address,
      phone,
      email
  } = body;
  console.log(name)
  console.log(address)
  console.log(phone)
  console.log(email)


  if(!name) {
      return res.send({
          success: false,
          message: "Name cannot be blank"
      });
  }
  if(!address) {
      return res.send({
          success: false,
          message: "Address cannot be blank"
      });
  }
  if(!phone) {
      return res.send({
          success: false,
          message: "Phone cannot be blank"
      });
  }
  if(!email) {
      return res.send({
          success: false,
          message: "Email cannot be blank"
      });
  }
  email = email.toLowerCase();

  const newDelivery = new Delivery(); 
  newDelivery.name = name;
  newDelivery.address = address;
  newDelivery.phone = phone;
  newDelivery.email = email;
  newDelivery.save((err, delivery) => {
      if (err) {
        console.log(err)
      //     res.end({
      //         success: false,
      //         message: 'ERROR: Server'
      //     });
      }else{
          res.redirect('/menu')
      }
      //     res.end({
      //         success: true,
      //         message: 'Delivery Success'
      //     });
  });
});
app.post('/carryout', (req, res, next) => {
  const { body } = req;
  let {
      name,
      phone,
      email
  } = body;
  console.log(name)
  console.log(phone)
  console.log(email)



  if(!name) {
      return res.send({
          success: false,
          message: "Name cannot be blank"
      });
  }
  if(!phone) {
      return res.send({
          success: false,
          message: "Phone cannot be blank"
      });
  }
  if(!email) {
      return res.send({
          success: false,
          message: "Email cannot be blank"
      });
  }
  email = email.toLowerCase();


      const newCarryOut = new CarryOut();
      newCarryOut.name = name;
      console.log("^^^^^^^^^^^^^^^^")        
      newCarryOut.phone = phone;
      console.log("----------------")
      newCarryOut.email = email;
      console.log("%%%%%%%%%%%%%%%%")
      newCarryOut.save((err, carryOut) => {
          if (err) {
            console.log(err)
          //     res.end({
          //         success: false,
          //         message: 'ERROR: Server'
          //     });
          }else{
            res.redirect('/menu')
          }
          // res.end({
          //     success: true,
          //     message: 'Carry Out Success'
          // });
      });
  });


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect( process.env.MONGODB_URI ||
"mongodb://localhost/project3db" );

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
