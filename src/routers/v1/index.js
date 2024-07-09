const express = require("express");
const CityController = require("../../controllers/city-controller");

const router = express.Router();

// post request...
router.post("/city", CityController.create);

// delete requests...
router.delete("/city/:id", CityController.destroy);

// get requests..
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getALlCities);

// update request...
router.patch("/city/:id", CityController.update);

module.exports = router;
