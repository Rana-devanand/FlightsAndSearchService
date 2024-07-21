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
  async getAllFlight(data) {
    try {
      const flights = await this.flightRepository.getAllFlight(data);
      return flights;
    } catch (error) {
      console.log("Something is going wrong in Service Layer");
      throw { error };
    }
  }

  async getFlight(flightID) {
    try {
      const flight = await this.flightRepository.getFlight(flightID);
      return flight;
    } catch (error) {
      console.log("Something is going wrong in Service Layer");
      throw { error };
    }
  }

  async updateFlight(flightId, data) {
    try {
      const updateFLight = await this.flightRepository.updateFlight(
        flightId,
        data
      );
      return updateFLight;
    } catch (error) {
      console.log("Something is going wrong in Service Layer");
      throw { error };
    }
  }
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
