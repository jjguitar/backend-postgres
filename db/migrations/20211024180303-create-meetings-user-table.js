'use strict';

const { MEETING_USER_TABLE, MeetingUserSchema } = require('./../models/meetingUser.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(MEETING_USER_TABLE, MeetingUserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MEETING_USER_TABLE);
  }
};