const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure Time " };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.AirplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        TotalSeats: airplane.Capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong on [Flight] service layer");
      throw { error };
    }
  }

  async getFLightData() {}
}

module.exports = FlightService;

/**
 *      {
 *       FlightNumber,
 *       AirplaneId,
 *       departureAirportId
 *       arrivalAirportId,
 *       departureTime
 *       arrivalTime
 *       Price
 *       TotalSeats  -> [data]  came from the Airplane table. [capacity]
 *      },
 *
 *  */
