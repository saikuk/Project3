const router = require("express").Router();
const menuRoutes = require("./menu");
const passport = require("passport")

router.post('/login',
  passport.authenticate('local', { successRedirect: '/menu',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);
// Book routes
router.use("/menu", menuRoutes);

module.exports = router;
