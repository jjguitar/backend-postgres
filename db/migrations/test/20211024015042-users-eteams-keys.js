'use strict';

const { USER_TABLE, UserSchema } = require('./../models/user.model');
const { USER_ETEAM_TABLE, UserETeamSchema } = require('./../models/userETeams.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(USER_ETEAM_TABLE);
  },

  down: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(USER_ETEAM_TABLE, UserETeamSchema);
  }
};