const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something Went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      const deleteCity = await City.update({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something Went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityID, data) {
    try {
      const city = await City.update(data, {
        where: {
          id: cityID,
        },
      });
      return city;
    } catch (error) {
      console.log("Something Went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(Cityid) {
    try {
      const city = await City.findByPk(Cityid);
      return city;
    } catch (error) {
      console.log("Something Went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
