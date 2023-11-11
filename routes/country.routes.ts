import express from "express";
import { CountryController } from "../controllers/country.controller";

const router = express.Router();

//get country data
router.get("/getCountrys", CountryController.getCountrys);

module.exports = router;
