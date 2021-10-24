const { Model, DataTypes } = require('sequelize');

const MEETING_ETEAM_TABLE = 'meetings_eteam';

const MeetingETeamSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_meeting: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_eteam: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class MeetingETeam extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEETING_ETEAM_TABLE,
      modelName: 'MeetingETeam',
      timestamps: false
    }
  }
}


module.exports = { MEETING_ETEAM_TABLE, MeetingETeamSchema, MeetingETeam }