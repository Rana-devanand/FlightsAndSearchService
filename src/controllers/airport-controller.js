const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.create(req.body);
    return res.status(201).json({
      data: airport,
      message: "Airport created successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.error("Something went wrong to create the Airport");
    return res.status(500).json({
      data: {},
      message: "Not able to create the Airport",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
};
