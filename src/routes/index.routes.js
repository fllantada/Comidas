const { Router } = require("express");
const router = Router();
const {
  get_Recipes,
  getDiets,
  get_RecipesId,
  set_Recipes,
} = require("../controller/index.controller");

router.get("/recipes", get_Recipes);
router.get("/recipes/:id", get_RecipesId);
router.get("/diets", getDiets);
router.post("/recipes", set_Recipes);

module.exports = router;
