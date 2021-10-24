'use strict';

const { MEETING_ETEAM_TABLE, MeetingETeamSchema } = require('./../models/meetingETeam.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(MEETING_ETEAM_TABLE, MeetingETeamSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MEETING_ETEAM_TABLE);
  }
};