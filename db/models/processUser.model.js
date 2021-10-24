const { Model, DataTypes } = require('sequelize');

const { USER_TABLE } = require('./user.model');
const { PROCESS_TABLE } = require('./process.model');
const PROCESS_USER_TABLE = 'processes_user';

const ProcessUserSchema = {
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
  id_process: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PROCESS_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class ProcessUser extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PROCESS_USER_TABLE,
      modelName: 'ProcessUser',
      timestamps: false
    }
  }
}


module.exports = { PROCESS_USER_TABLE, ProcessUserSchema, ProcessUser }