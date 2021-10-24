const { Model, DataTypes } = require('sequelize');

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
  id_user_leader: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
}

class Process extends Model {
  static associate() {
    // associate
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