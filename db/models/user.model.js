const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  first_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  last_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  admin: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  is_volunteer: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {

  static associate(models) {
    this.belongsToMany(models.ETeam, {
      as: 'eTeamUser',
      through: models.UserETeam,
      foreignKey: 'id_user',
      otherKey: 'id_eteam'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }