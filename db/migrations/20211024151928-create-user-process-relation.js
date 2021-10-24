'use strict';

const { PROCESS_USER_TABLE, ProcessUserSchema } = require('./../models/processUser.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(PROCESS_USER_TABLE, ProcessUserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PROCESS_USER_TABLE);
  }
};