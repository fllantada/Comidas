const { DataTypes } = require("sequelize");

const recipe = (sequelize) => {
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      healthyScore: {
        type: DataTypes.INTEGER,
      },
      diets_types: {
        type: DataTypes.STRING,
      },

      steps: {
        type: DataTypes.STRING,
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamp: false, createdAt: false, updatedAt: true }
  );
};
module.exports = { recipe };
