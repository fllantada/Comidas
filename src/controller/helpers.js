require("dotenv").config();
const { URL_API } = process.env;
const axios = require("axios");
const { Diet, Recipe } = require("../database/database");
//////////////////////TEST HELPERS////////////////////
async function test_Db(db) {
  try {
    await db.authenticate();

    return "conected";
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return "No conectado";
  }
}

async function close(db) {
  await db.sync({ force: true });
  db.close();
}
/////////////////////CONTROLER HELPERS//////////////
const filterSteps = (r) => {
  if (
    typeof r === "object" &&
    Array.isArray(r.analyzedInstructions[0]?.steps)
  ) {
    return r.analyzedInstructions[0]?.steps.map((e) => {
      return { number: e.number, step: e.step };
    });
  } else return "No hay pasos en esta ID";
};
const handleApiResponse = (response) => {
  if (Array.isArray(response.data.results)) {
    var apiRecipes = response.data.results.map((r) => {
      return {
        id: r.id,
        image: r.image,
        name: r.title,
        type: r.diets,
        summary: r.summary,
        healthyScore: r.healthScore,
        dishTypes: r.dishTypes,
        steps: filterSteps(r),
        createdInDb: false,
      };
    });
    return apiRecipes;
  }

  const apiRecipe = {
    id: response.data.id,
    name: response.data.title,
    steps: response.data.instructions,
    diets: response.data.diets,
    image: response.data.image,
    summary: response.data.summary,
    steps: filterSteps(response.data),
  };
  return apiRecipe;
};

const getApiRecipes = () => {
  return axios
    .get(URL_API)
    .then(handleApiResponse)
    .catch((e) => {
      return [{ API: "no se pudo hacer la consulta", e: e }];
    });
};
const getDbRecipes = () => {
  return Recipe.findAll({
    include: {
      model: Diet,
      through: { attributes: [] },
      attributes: ["name"],
    },
  });
};

const handleDietList = async (dietList) => {
  await dietList.map(async (dietName) => {
    await Diet.findOrCreate({
      where: { name: dietName },
      default: { name: dietName },
    });
  });
};

const stringToArray = (str) =>
  str.replaceAll("[", "").replaceAll("]", "").split(",");
module.exports = {
  test_Db,
  getApiRecipes,
  handleDietList,
  stringToArray,
  getDbRecipes,
  close,
  handleApiResponse,
};
