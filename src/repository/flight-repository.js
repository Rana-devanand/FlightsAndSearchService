const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository {
  // Private members functions
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    let priceFilter = [];
    if (data.minPrice) {
      // Object.assign(filter, { Price: { [Op.gte]: data.minPrice } });
      priceFilter.push({
        Price: {
          [Op.gte]: data.minPrice,
        },
      });
    }
    if (data.maxPrice) {
      // Object.assign(filter, { Price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({
        Price: {
          [Op.lte]: data.maxPrice,
        },
      });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something Went wrong in the [flight] repository layer");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const response = await Flights.findByPk(flightId);
      return response;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
}

module.exports = FlightRepository;
