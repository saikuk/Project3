const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/books"
router.route("/")
  .get(menuController.findAll)

module.exports = router;
