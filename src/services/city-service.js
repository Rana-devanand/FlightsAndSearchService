const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.CityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = await this.CityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const response = await this.CityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      const city = await this.CityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await this.CityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw { error };
    }
  }

  async getCities(filter) {
    try {
      const getALlCities = await this.CityRepository.getALlCities({
        name: filter.name,
      });
      return getALlCities;
    } catch (error) {
      console.log("Something went wrong on service layer");
      throw { error };
    }
  }
}

module.exports = CityService;
