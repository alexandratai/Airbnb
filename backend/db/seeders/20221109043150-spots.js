'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Spots', [{
    ownerId: 1,
    address: "100 Demo Road",
    city: "Demo Town",
    state: "California",
    country: "United States",
    lat: 1000,
    lng: 2000,
    name: "Demo",
    description: "A very nice spot",
    price: 100,
    previewImage: "www.demo-house.io"
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};