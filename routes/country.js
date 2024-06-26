const router = require("express").Router();
const countryController = require("../controllers/countryController");
const { verifyToken } = require("../middleware/jwt_token");

router.post("/", verifyToken, countryController.addCountry);

router.get("/", countryController.getCountries);

router.post("/places", countryController.addPlacesToCountry);

router.get("/:id", countryController.getCountry);

module.exports = router;
