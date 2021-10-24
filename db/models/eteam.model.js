const { Model, DataTypes } = require('sequelize');

const ETEAM_TABLE = 'e_teams';

const EteamSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  eTeamName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  }
}

class ETeam extends Model {

  static associate(models) {
    this.belongsToMany(models.User, {
      as: 'usersETeam',
      through: models.UserETeam,
      foreignKey: 'id_eteam',
      otherKey: 'id_user'
    });
    this.belongsToMany(models.Meeting, {
      as: 'eTeamMeeting',
      through: models.MeetingETeam,
      foreignKey: 'id_eteam',
      otherKey: 'id_meeting'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ETEAM_TABLE,
      modelName: 'ETeam',
      timestamps: false
    }
  }
}


module.exports = { ETEAM_TABLE, EteamSchema, ETeam }