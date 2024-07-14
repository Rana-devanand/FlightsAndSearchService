const { Flights } = require("../models/index");

class FlightRepository {
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something Went wrong in the [flight] repository layer");
      throw { error };
    }
  }

  async getAllFlight(data) {
    try {
      const flight = await Flights.findAll(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong");
      throw { error };
    }
  }
}
// const check = async () => {
//   const obj = new FlightRepository();
//   const x = await obj.getAllFlight();
//   console.log(x);
// };

// check();
module.exports = FlightRepository;
