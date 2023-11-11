import { Model, DataTypes } from "sequelize";
import { Op } from "sequelize";
import sequelize from "../config/db";

export class Country extends Model {
  static findByName(name: string) {
    return this.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      limit: 5,
    });
  }
}

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
    modelName: "Countries",
  }
);

