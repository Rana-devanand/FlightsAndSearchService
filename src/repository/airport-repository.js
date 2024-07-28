const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

class AirportRepository extends CrudRepository {
  async getAirport(id) {
    try {
      const getAirport = await Airport.findByPk(id);
      return getAirport;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = AirportRepository;
