const { Op } = require("sequelize");
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
      const deleteCity = await City.destroy({
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
      // This code return the output as boolean value -> true / false
      // const city = await City.update(data, {
      //   where: {
      //     id: cityID,
      //   },
      // });

      // this one is return the update value...->
      const city = await City.findByPk(cityID);
      city.name = data.name;
      await city.save();
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

  // Added filtration with name attribute
  async getALlCities(filter) {
    try {
      if (filter.name) {
        const FilterCities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return FilterCities;
      }

      const getALlCities = await City.findAll();
      return getALlCities;
    } catch (error) {
      console.log("Something Went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
