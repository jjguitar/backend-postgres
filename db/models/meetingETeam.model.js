const { Model, DataTypes } = require('sequelize');
const { MEETING_TABLE } = require('./meeting.model');
const { ETEAM_TABLE } = require('./eteam.model');

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
    type: DataTypes.INTEGER,
    references: {
      model: MEETING_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  id_eteam: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ETEAM_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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