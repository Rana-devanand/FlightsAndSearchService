"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      FlightNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      AirplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      BoardingGate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      TotalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Flights");
  },
};
