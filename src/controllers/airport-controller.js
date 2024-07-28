const { AirportService } = require("../services/index");
const { ServerErrorCodes, SuccessCodes } = require("../utils/error-codes");
const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: airport,
      message: "Airport created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Something went wrong to create the Airport");
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      message: "Not able to create the Airport",
      success: false,
      err: error,
    });
  }
};

const getAirportByID = async (req, res) => {
  try {
    const response = await airportService.getAirport(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      message: "Airport fetch successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "Not able to get the Airport",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  getAirportByID,
};
