"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flights.init(
    {
      FlightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      AirplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      arrivalTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      BoardingGate: {
        type: DataTypes.STRING,
      },
      TotalSeats: DataTypes.INTEGER,
      allowNull: false,
    },
    {
      sequelize,
      modelName: "Flights",
    }
  );
  return Flights;
};
