const Joi = require('joi');

const id = Joi.number().integer();
const id_assignment = Joi.number().integer();
const id_eteam = Joi.number().integer();

const createAssignmentETeamSchema = Joi.object({
  id_assignment: id_assignment.required(),
  id_eteam: id_eteam.required()
});

const updateAssignmentETeamSchema = Joi.object({
  id_assignment: id_assignment,
  id_eteam: id_eteam,
});

const getAssignmentETeamSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAssignmentETeamSchema, updateAssignmentETeamSchema, getAssignmentETeamSchema }
