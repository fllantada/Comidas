const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const diet = (sequelize) => {
  sequelize.define(
    "diet",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamp: false, createdAt: false, updatedAt: true }
  );
};

module.exports = { diet };
