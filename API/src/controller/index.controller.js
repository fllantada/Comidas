require("dotenv").config();
const axios = require("axios");
const { getApiRecipes, getDbRecipes, handleApiResponse } = require("./helpers");
const { Diet, Recipe, Step } = require("../database/database");
const { API_KEY } = process.env;
const local_result = { flag: false, data: {} };
const getDiets = async (req, res) => {
  try {
    const data = await Diet.findAll();
    res.send(data);
  } catch {
    (e) => {
      msg: e;
    };
  }
};

const getRecipes = async (req, res) => {
  const { name } = req.query;

  if (local_result.flag) {
    console.log("retornando data local");
    return res.json(local_result.data);
  }

  try {
    const apiRecipes = await getApiRecipes();
    const dbRecipes = await getDbRecipes();
    const allRecipes = [...dbRecipes, ...apiRecipes];

    if (name) {
      let recipeFinded = allRecipes.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      recipeFinded.length
        ? res.status(200).send(recipeFinded)
        : res.status(404).json({ msg: "no se encontro la receta" });
    } else {
      local_result.flag = true;
      local_result.data = allRecipes;
      res.json(allRecipes);
    }
  } catch {
    res.json({ msg: "no se pudieron encontrar datos" });
  }
};

const get_RecipesId = async (req, res) => {
  const { id } = req.params;

  try {
    const dbRecipes = await getDbRecipes(); //[]
    const recipeFinded = await dbRecipes.filter((e) => e.id === id);

    if (recipeFinded.length) return res.send(recipeFinded);
  } catch (error) {
    console.error(error);
  }

  try {
    const apiRecipes = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information${API_KEY}`
    );

    let response = handleApiResponse(apiRecipes);

    res.json(response);
  } catch {
    res.status(400).send({ msg: "no se encontro el  elemento" });
  }
};

const set_Recipes = async (req, res) => {
  let { name, image, summary, healthyScore, steps, CreatedInDb, dietList } =
    req.body;

  try {
    let recipeCreated = await Recipe.create({
      name,
      image,
      summary,
      healthyScore,
      CreatedInDb,
      steps,
      diets: dietList,
    });

    steps.forEach(async (step) => {
      var stepCreated = await Step.create({
        number: step.number,
        description: step.step,
      });
      await recipeCreated.addStep(stepCreated);
    });
    dietList.forEach(async (diet) => {
      const [newDiet, created] = await Diet.findOrCreate({
        where: { name: diet },
        defaults: {},
      });
      await recipeCreated.addDiet(newDiet);
      await newDiet.addRecipe(recipeCreated);
    });

    res.status(201).send(recipeCreated);
  } catch {
    res.status(404).json({ msg: "Error al crear la receta" });
  }
};

module.exports = {
  set_Recipes: set_Recipes,
  get_RecipesId: get_RecipesId,
  get_Recipes: getRecipes,
  getDiets: getDiets,
};
