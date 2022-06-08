require("dotenv").config();
const axios = require("axios");
const {
  getApiRecipes,
  handleDietList,
  stringToArray,
  getDbRecipes,
  handleApiResponse,
} = require("./helpers");
const { Diet, Recipe } = require("../database/database");

const { API_KEY } = process.env;

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

  try {
    const apiRecipes = await getApiRecipes(); //[]
    const dbRecipes = await getDbRecipes(); //[]
    let allRecipes = [...apiRecipes, ...dbRecipes];

    if (name) {
      let recipeFinded = allRecipes.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      recipeFinded.length
        ? res.status(200).send(recipeFinded)
        : res.status(404).json({ msg: "no se encontro la receta" });
    } else {
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

    let r = handleApiResponse(apiRecipes);

    res.json(r);
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
    //en diet list espero recibir un string del tipo [diet1,diet2]
    dietList = stringToArray(dietList);
    //transforme dietList en un arreglo iterable
    dietList && Array.isArray(dietList) && (await handleDietList(dietList));

    dietList.forEach(async (diet_name) => {
      const diet_finded = await Diet.findOne({ where: { name: diet_name } });
      recipeCreated.addDiet(diet_finded);
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
