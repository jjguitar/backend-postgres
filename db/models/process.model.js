const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const PROCESS_TABLE = 'processes';

const ProcessSchema = {
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
  open: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  userId: {
    field: 'id_user_leader',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Process extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROCESS_TABLE,
      modelName: 'Process',
      timestamps: false
    }
  }
}


module.exports = { PROCESS_TABLE, ProcessSchema, Process }