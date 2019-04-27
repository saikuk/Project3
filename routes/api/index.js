const router = require("express").Router();
const menuRoutes = require("./menu");
const passport = require("passport")
const orderRoutes = require("./order");
const addOrderRoutes = require("./addorder");


router.post('/login',
  passport.authenticate('local', { successRedirect: '/menu',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);
// Book routes
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);
router.use("/addorder",addOrderRoutes);

module.exports = router;
