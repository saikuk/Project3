const router = require("express").Router();
const menuRoutes = require("./menu");
const checkout = require("./checkout")
// Book routes
router.use("/menu", menuRoutes);
// router.use("/delivery", checkout)
checkout(router);

module.exports = router;
