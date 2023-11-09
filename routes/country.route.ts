import express from "express";
import { CountryController } from "../controllers/country.controller";

const router = express.Router();

//get country data
router.post("/getCountry");

module.exports = router;
