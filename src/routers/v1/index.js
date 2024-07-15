const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const FlightMiddleware = require("../../middlewares/flight-middleware");

const router = express.Router();

router.post("/city", CityController.create);
router.delete("/city/:id", CityController.destroy);
router.get("/city/:id", CityController.get);
router.get("/city", CityController.getALlCities);
router.patch("/city/:id", CityController.update);

router.post(
  "/flights",
  FlightMiddleware.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);

router.post("/airports", AirportController.create);

module.exports = router;
