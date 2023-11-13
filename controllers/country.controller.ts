import { Country } from "../entitys/country.entity";
import { Request, Response } from "express";
import { Validation } from "../helper/validation";

export class CountryController {
  //agregar tipado de req, res y respuesta
  //continuar con react o next, falta eso, y luego dockerizar

  static getCountrys = async (req: Request, res: Response, next: Function) => {
    try {
      if(!(Validation.validateName(req.query.name))) {
        res.status(204).end();
        return;
      }

      let query = await Country.findByName(req.query.name);
      let totalPopulation = 0;
      let countryData = query.map((country) => {
        totalPopulation+= country.dataValues.population
        return {
          name: country.dataValues.name,
          population: country.dataValues.population,
        };
      });
      res.status(200).json({countries: countryData, totalPopulation});
    } catch (error) {
      next(error);
    }
  };
}
