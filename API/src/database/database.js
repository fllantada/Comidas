require("dotenv").config();
const { DB_URL, URL_API, DB, USER, PWD } = process.env;
const { diet } = require("../models/Diet");
const { recipe } = require("../models/Recipe");
const { step } = require("../models/Step");
const axios = require("axios");

const Sequelize = require("sequelize");
//const [DB,USER,PWD]=["comidas","postgres","sldkfj"]
console.log(DB, USER, PWD);
//create DB
const sequelize = new Sequelize(DB, USER, PWD, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  native: false,
});
//Create Models

diet(sequelize);
recipe(sequelize);
step(sequelize);

//Transform model to Model
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
const { Recipe, Diet, Step } = sequelize.models;
console.log(typeof sequelize.models.Step);
//create the FK
Step.belongsTo(Recipe);
Recipe.hasMany(Step);
Recipe.belongsToMany(Diet, {
  through: "diet_recipe_connection",
});

Diet.belongsToMany(Recipe, {
  through: "diet_recipe_connection",
});

const initialize = async () => {
  axios
    .get(URL_API)
    .then((r) => {
      var dietList = r.data.results.map((e) => e.diets);
      dietList = dietList.flat();
      console.log(dietList);
      dietList.map((e) => Diet.findOrCreate({ where: { name: e } }));
    })
    .catch((e) => {
      console.log(e.message);
      Diet.findOrCreate({ where: { name: "Gluten Free" } });
      Diet.findOrCreate({ where: { name: "Vegetarian" } });
      Diet.findOrCreate({ where: { name: "Lacto-Vegetarian" } });
      Diet.findOrCreate({ where: { name: "Ovo-Vegetarian" } });
      Diet.findOrCreate({ where: { name: "Vegan" } });
      Diet.findOrCreate({ where: { name: "Pescetarian" } });
      Diet.findOrCreate({ where: { name: "Paleolithic" } });
      Diet.findOrCreate({ where: { name: "Primal" } });
      Diet.findOrCreate({ where: { name: "Low FODMAP" } });
      Diet.findOrCreate({ where: { name: "Whole 30" } });
      Diet.findOrCreate({ where: { name: "Ketogenic" } });
    });
  // const conection = await test_Db(sequelize);
  //typeof test_Db;
  sequelize
    .authenticate()
    .then(() => console.log("---->Conexion a la base de datos OK"))
    .catch((e) => console.log("fallo la conexion a la DB", e));
  // Diet.findOrCreate({ where: { name: "Gluten Free" } });
  // Diet.findOrCreate({ where: { name: "Vegetarian" } });
  // Diet.findOrCreate({ where: { name: "Lacto-Vegetarian" } });
  // Diet.findOrCreate({ where: { name: "Ovo-Vegetarian" } });
  // Diet.findOrCreate({ where: { name: "Vegan" } });
  // Diet.findOrCreate({ where: { name: "Pescetarian" } });
  // Diet.findOrCreate({ where: { name: "Paleolithic" } });
  // Diet.findOrCreate({ where: { name: "Primal" } });
  // Diet.findOrCreate({ where: { name: "Low FODMAP" } });
  // Diet.findOrCreate({ where: { name: "Whole 30" } });
  // Diet.findOrCreate({ where: { name: "Ketogenic" } });
};

module.exports = { conn: sequelize, Diet, Recipe, Step, initialize };
