const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.FlightNumber ||
    !req.body.AirplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.Price
  ) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing mandatory properties to create a flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
