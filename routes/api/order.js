const router = require("express").Router();
const orderController = require("../../controllers/orderController");

// Matches with "/api/books"
router.route("/")
  .get(orderController.findAll);



router.route("/:id")
  .delete(orderController.remove);



module.exports = router;
