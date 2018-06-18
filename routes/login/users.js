const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/login/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

// Matches with "/login/users/:id"
router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.remove);

module.exports = router;
