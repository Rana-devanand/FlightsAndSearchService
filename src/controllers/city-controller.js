const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      // status code 201, because we are sending some request to the server.
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
    const response = await cityService.destroy(req.params.id);
    return res.status(200).json({
      // status code 200, because we are getting a response from the server.
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
    return res.status(200).json({
      data: city,
      success: true,
      message: " Successfully update the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
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
    return res.status(200).json({
      data: city,
      success: true,
      message: " Successfully Fetched the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetched the city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};
