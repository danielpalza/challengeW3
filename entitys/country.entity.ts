import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";

class Country extends Model {}

Country.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,

    },
    population: {
      type: DataTypes.NUMBER,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: "Country",
  }
);

module.exports = Country;
