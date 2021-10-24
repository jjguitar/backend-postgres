'use strict';

const { USER_ETEAM_TABLE, UserETeamSchema } = require('./../models/userETeams.model');
const { USER_TABLE, UserSchema } = require('./../models/user.model');
const { ETEAM_TABLE, EteamSchema } = require('./../models/eteam.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(USER_ETEAM_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ETEAM_TABLE);
  },

  down: async (queryInterface) => {
    await queryInterface.createTable(USER_ETEAM_TABLE, UserETeamSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ETEAM_TABLE, EteamSchema);
  }
};