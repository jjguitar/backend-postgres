'use strict';

const { MEETING_TABLE, MeetingSchema } = require('./../models/meeting.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(MEETING_TABLE, MeetingSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(MEETING_TABLE);
  }
};