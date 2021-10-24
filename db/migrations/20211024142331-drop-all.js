'use strict';

const { USER_TABLE, UserSchema } = require('./../models/user.model');
const { AssignmentSchema, ASSIGNMENT_TABLE } = require('./../models/assignment.model');
const { AssignmentETeamSchema, ASSIGNMENT_ETEAM_TABLE } = require('./../models/assignmentETeam.model');
const { EteamSchema, ETEAM_TABLE } = require('./../models/eteam.model');
const { MeetingSchema, MEETING_TABLE } = require('./../models/meeting.model');
const { MeetingETeamSchema, MEETING_ETEAM_TABLE } = require('./../models/meetingETeam.model');
const { ProcessSchema, PROCESS_TABLE } = require('./../models/process.model');
const { ProcessUserSchema, PROCESS_USER_TABLE } = require('./../models/processUser.model');
const { UserETeamSchema, USER_ETEAM_TABLE } = require('./../models/userETeams.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.dropTable(ASSIGNMENT_TABLE);
    await queryInterface.dropTable(ASSIGNMENT_ETEAM_TABLE);
    await queryInterface.dropTable(MEETING_TABLE);
    await queryInterface.dropTable(MEETING_ETEAM_TABLE);
    await queryInterface.dropTable(PROCESS_USER_TABLE);
    await queryInterface.dropTable(USER_ETEAM_TABLE);
    await queryInterface.dropTable(PROCESS_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ETEAM_TABLE);
  },

  down: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(ASSIGNMENT_TABLE, AssignmentSchema);
    await queryInterface.createTable(ASSIGNMENT_ETEAM_TABLE, AssignmentETeamSchema);
    await queryInterface.createTable(ETEAM_TABLE, EteamSchema);
    await queryInterface.createTable(MEETING_TABLE, MeetingSchema);
    await queryInterface.createTable(MEETING_ETEAM_TABLE, MeetingETeamSchema);
    await queryInterface.createTable(PROCESS_TABLE, ProcessSchema);
    await queryInterface.createTable(PROCESS_USER_TABLE, ProcessUserSchema);
    await queryInterface.createTable(USER_ETEAM_TABLE, UserETeamSchema);
  }
};