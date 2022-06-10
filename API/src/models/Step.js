const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const step = (sequelize) => {
  sequelize.define(
    "step",
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamp: false, createdAt: false, updatedAt: true }
  );
};

module.exports = { step };
