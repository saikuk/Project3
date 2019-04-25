const router = require("express").Router();
const menuRoutes = require("./menu");
const orderRoutes = require("./order");
const addOrderRoutes = require("./addorder");


// Book routes
router.use("/menu", menuRoutes);
router.use("/order", orderRoutes);
router.use("/addorder",addOrderRoutes);

module.exports = router;
