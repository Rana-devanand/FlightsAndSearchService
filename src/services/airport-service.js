const CrudService = require("./crud-Services");
const { AirportRepository } = require("../repository/index");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async getAirport(cityId) {
    try {
      const city = await this.airportRepository.getAirport(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw { error };
    }
  }
}

module.exports = AirportService;
