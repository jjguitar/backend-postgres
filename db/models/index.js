const { User, UserSchema } = require('./user.model');
const { MeetingUser, MeetingUserSchema } = require('./meetingUser.model');
const { AssignmentETeam, AssignmentETeamSchema } = require('./assignmentETeam.model');
const { ETeam, EteamSchema } = require('./eteam.model');
const { Meeting, MeetingSchema } = require('./meeting.model');
const { MeetingETeam, MeetingETeamSchema } = require('./meetingETeam.model');
const { Process, ProcessSchema } = require('./process.model');
const { ProcessUser, ProcessUserSchema } = require('./processUser.model');
const { UserETeam, UserETeamSchema } = require('./userETeams.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  MeetingUser.init(MeetingUserSchema, MeetingUser.config(sequelize));
  AssignmentETeam.init(AssignmentETeamSchema, AssignmentETeam.config(sequelize));
  ETeam.init(EteamSchema, ETeam.config(sequelize));
  Meeting.init(MeetingSchema, Meeting.config(sequelize));
  MeetingETeam.init(MeetingETeamSchema, MeetingETeam.config(sequelize));
  Process.init(ProcessSchema, Process.config(sequelize));
  ProcessUser.init(ProcessUserSchema, ProcessUser.config(sequelize));
  UserETeam.init(UserETeamSchema, UserETeam.config(sequelize));

  User.associate(sequelize.models);
  ETeam.associate(sequelize.models);
  Process.associate(sequelize.models);
  Meeting.associate(sequelize.models);
}

module.exports = setupModels;