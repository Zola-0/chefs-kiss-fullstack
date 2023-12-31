const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/recipe/"
router.route("/")
    .get(recipesController.findAll)
    .post(recipesController.create);

// Matches with "/api/recipe/:id"
router.route("/:id")
    .get(recipesController.findById)
    .put(recipesController.update)
    .delete(recipesController.remove);

module.exports = router;