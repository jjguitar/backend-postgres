const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const USER_ETEAM_TABLE = 'users_eteam';

const UserETeamSchema = {
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
  id_eteam: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class UserETeam extends Model {
  static associate(models) {
    this.belongsTo(models.User, {as: 'user' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_ETEAM_TABLE,
      modelName: 'UserETeam',
      timestamps: false
    }
  }
}


module.exports = { USER_ETEAM_TABLE, UserETeamSchema, UserETeam }