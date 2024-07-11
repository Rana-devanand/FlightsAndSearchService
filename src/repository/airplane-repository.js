const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplaneId = await Airplane.findByPk(id);
      return airplaneId;
    } catch (error) {
      console.log("Something went wrong in the [Airplane] repository layer ");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
