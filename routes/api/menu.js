const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/books"
router.route("/")
  .get(menuController.findAll)
  // .post(booksController.create);

// Matches with "/api/books/:id"
// router.route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
