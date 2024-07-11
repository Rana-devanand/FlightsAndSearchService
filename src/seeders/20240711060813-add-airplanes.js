"use strict";

const { Model } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNo: "Lockheed C-130",
          Capacity: 450,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Airbus A380",
          Capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Boeing 747",
          Capacity: 400,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Blériot XI",
          Capacity: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Wright Flyer",
          Capacity: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          modelNo: "Air Force One",
          Capacity: 300,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
