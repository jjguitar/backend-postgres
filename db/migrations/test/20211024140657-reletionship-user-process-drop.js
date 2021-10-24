'use strict';

const { PROCESS_TABLE, ProcessSchema } = require('./../models/process.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(PROCESS_TABLE);
  },

  down: async (queryInterface) => {
    await queryInterface.createTable(PROCESS_TABLE, ProcessSchema);
  }
};