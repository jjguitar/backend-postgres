const { Model, DataTypes, Sequelize } = require('sequelize');

const MEETING_TABLE = 'meetings';

const MeetingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  reqVolunteer: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Meeting extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEETING_TABLE,
      modelName: 'Meeting',
      timestamps: false
    }
  }
}


module.exports = { MEETING_TABLE, MeetingSchema, Meeting }