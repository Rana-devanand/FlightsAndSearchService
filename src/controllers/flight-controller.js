const { FlightService } = require("../services/index");
const { ServerErrorCodes, SuccessCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flightRequestData = {
      FlightNumber: req.body.FlightNumber,
      AirplaneId: req.body.AirplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      Price: req.body.Price,
    };

    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully created a Flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to create a Flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlight(req.query);
    return res.status(SuccessCodes.OK).json({
      data: flights,
      success: true,
      message: "Successfully fetched all Flights",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetch all Flights",
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
