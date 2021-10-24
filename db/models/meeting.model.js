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
  static associate(models) {
    this.belongsToMany(models.ETeam, {
      as: 'meetingETeam',
      through: models.MeetingETeam,
      foreignKey: 'id_meeting',
      otherKey: 'id_eteam'
    });
    this.belongsToMany(models.User, {
      as: 'meetingUser',
      through: models.MeetingUser,
      foreignKey: 'id_meeting',
      otherKey: 'id_user'
    });
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