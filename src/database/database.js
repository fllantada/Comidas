require("dotenv").config();
const { DB_URL, URL_API } = process.env;

const { diet } = require("../models/Diet");
const { recipe } = require("../models/Recipe");

const Sequelize = require("sequelize");
const axios = require("axios");

const sequelize = new Sequelize(DB_URL, {
  logging: false,
  native: false,
});

diet(sequelize);
recipe(sequelize);

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);
const { Recipe, Diet } = sequelize.models;
Recipe.belongsToMany(Diet, {
  through: "diet_recipe_connection",
});

Diet.belongsToMany(Recipe, {
  through: "diet_recipe_connection",
});

const initialize = () => {
  // axios.get(URL_API).then((r) => {
  //   var dietList = r.data.results.map((e) => e.diets);
  //   dietList = dietList.flat();
  //   console.log(dietList);
  //   dietList.map((e) => Diet.findOrCreate({ where: { name: e } }));
  // });

  Diet.findOrCreate({ where: { name: "Gluten Free" } });
  Diet.findOrCreate({ where: { name: "Vegetarian" } });
  Diet.findOrCreate({ where: { name: "Lacto-Vegetarian" } });
  Diet.findOrCreate({ where: { name: "Ovo-Vegetarian" } });
  Diet.findOrCreate({ where: { name: "Vegan" } });
  Diet.findOrCreate({ where: { name: "Pescetarian" } });
  Diet.findOrCreate({ where: { name: "Paleo" } });
  Diet.findOrCreate({ where: { name: "Primal" } });
  Diet.findOrCreate({ where: { name: "Low FODMAP" } });
  Diet.findOrCreate({ where: { name: "Whole30" } });
  Diet.findOrCreate({ where: { name: "Ketogenic" } });
};

module.exports = { conn: sequelize, Diet, Recipe, initialize };
