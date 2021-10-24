'use strict';

const { EteamSchema, ETEAM_TABLE } = require('./../models/eteam.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ETEAM_TABLE, EteamSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ETEAM_TABLE);
  }
};