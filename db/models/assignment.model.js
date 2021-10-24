const { Model, DataTypes } = require('sequelize');

const ASSIGNMENT_TABLE = 'assignments';

const AssignmentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_meeting: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_user: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class Assignment extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSIGNMENT_TABLE,
      modelName: 'Assignment',
      timestamps: false
    }
  }
}


module.exports = { ASSIGNMENT_TABLE, AssignmentSchema, Assignment }