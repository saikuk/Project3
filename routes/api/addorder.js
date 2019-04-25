const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/books"
router.route("/")
  .post(menuController.create)

module.exports = router;
