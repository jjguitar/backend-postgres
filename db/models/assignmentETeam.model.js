const { Model, DataTypes } = require('sequelize');

const ASSIGNMENT_ETEAM_TABLE = 'assignments_eteam';

const AssignmentETeamSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  id_assignment: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  id_eteam: {
    allowNull: false,
    type: DataTypes.INTEGER
  }
}

class AssignmentETeam extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ASSIGNMENT_ETEAM_TABLE,
      modelName: 'AssignmentETeam',
      timestamps: false
    }
  }
}


module.exports = { ASSIGNMENT_ETEAM_TABLE, AssignmentETeamSchema, AssignmentETeam }