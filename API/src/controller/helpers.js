require("dotenv").config();
const { URL_API } = process.env;
const axios = require("axios");
const { Diet, Recipe, Step } = require("../database/database");
//////////////////////TEST HELPERS////////////////////
async function test_Db(db) {
  try {
    await db.authenticate();
    console.log("Conexion a la base de datos OK");

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
  } else
    return [
      {
        number: "No hay pasos en esta Receta",
        step: "Te sugerimos buscar otra receta",
      },
    ];
};
const handleApiResponse = (response) => {
  console.log("Inicie handle api Response");
  //const regEx = new RegExp("((</w+>|<w+>))");
  if (Array.isArray(response.data.results)) {
    var apiRecipes = response.data.results.map((r) => {
      return {
        id: r.id,
        image: r.image,
        name: r.title,
        diets: r.diets.map((e) => {
          return { name: e };
        }), //r.diets, //normalize  con la base de datos aca
        summary: r.summary
          .replaceAll("</b", "")
          .replaceAll("<b>", "")
          .replaceAll("<a>", "")
          .replaceAll("</a>", "")
          .replaceAll(`<a href="https://`, "www")
          .replaceAll(`>`, ""),
        healthyScore: r.healthScore,

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
    summary: response.data.summary
      .replaceAll("</b", "")
      .replaceAll("<b>", "")
      .replaceAll("<a>", "")
      .replaceAll("</a>", "")
      .replaceAll(`<a href="https://`, "www")
      .replaceAll(`>`, ""),
    steps: filterSteps(response.data),
  };
  return apiRecipe;
};

const getApiRecipes = () => {
  console.log("---->inicie Get Api Recipes en helpers");
  //URL_API="www.fdfdhola.com"
  return axios
    .get(URL_API)
    .then(handleApiResponse)
    .catch((e) => {
      console.log("---->retornando error");
      return [{ Get_a_LA_API: "no se pudo hacer la consulta", Error_API: e }];
    });
};
const getDbRecipes = () => {
  console.log("Inicie GetdbRecipes de Helpers");

  return Recipe.findAll({
    include: [
      {
        model: Diet,
        through: { attributes: [] },
        attributes: ["name"],
      },
      {
        model: Step,
        //through: { attributes: [] },
        attributes: ["number", "description"],
      },
    ],
  });
};

module.exports = {
  test_Db,
  getApiRecipes,

  getDbRecipes,
  close,
  handleApiResponse,
};
