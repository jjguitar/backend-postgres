const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');
const { MEETING_TABLE } = require('./meeting.model');

const MEETING_USER_TABLE = 'meeting_user';

const MeetingUserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_user: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
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
  }
}

class MeetingUser extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEETING_USER_TABLE,
      modelName: 'MeetingUser',
      timestamps: false
    }
  }
}


module.exports = { MEETING_USER_TABLE, MeetingUserSchema, MeetingUser }