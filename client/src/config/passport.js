// // STRATEGY
// // Requiring the Local Strategy
// var passport = require('passport')
//   , LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy({usernameField: 'email'},
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// MIDDLEWARE
// app.configure(function() {
//     app.use(express.static('public'));
//     app.use(express.cookieParser());
//     app.use(express.bodyParser());
//     app.use(express.session({ secret: 'keyboard cat' }));
//     app.use(passport.initialize());
//     app.use(passport.session());
//     app.use(app.router);
//   });

// SESSIONS
// passport.serializeUser(function(user, done) {
//     done(null, user.id);
// });
  
// passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
// });

// ROUTES
// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                    failureFlash: true })
// );