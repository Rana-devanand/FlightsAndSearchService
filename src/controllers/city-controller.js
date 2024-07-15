const { CityService } = require("../services/index");
const { ServerErrorCodes, SuccessCodes } = require("../utils/error-codes");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(SuccessCodes.CREATED).json({
      // status code 201, because we are sending some request to the server.
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to create a city",
      err: error,
    });
  }
};

// delete -> /city/:id [id.params]
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(SuccessCodes.OK).json({
      // status code 200, because we are getting a response from the server.
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to delete a city",
      err: error,
    });
  }
};

// Patch -> /city/:id  -> req.body
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: " Successfully update the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to update the city",
      err: error,
    });
  }
};

// Get -> city/:id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id, req.body);
    return res.status(SuccessCodes.OK).json({
      data: city,
      success: true,
      message: " Successfully Fetched the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetched the city",
      err: error,
    });
  }
};

const getALlCities = async (req, res) => {
  try {
    const fetchCities = await cityService.getCities(req.query);
    return res.status(SuccessCodes.OK).json({
      data: fetchCities,
      success: true,
      message: " Successfully fetched all the cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(ServerErrorCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "Not able to fetched the data",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getALlCities,
};
