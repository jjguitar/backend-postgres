const Joi = require('joi');

const id = Joi.number().integer();
const id_meeting = Joi.number().integer();
const id_user = Joi.number().integer();

const createAssignmentSchema = Joi.object({
  id_meeting: id_meeting.required(),
  id_user: id_user.required()
});

const updateAssignmentSchema = Joi.object({
  id_meeting: id_meeting,
  id_user: id_user,
});

const getAssignmentSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAssignmentSchema, updateAssignmentSchema, getAssignmentSchema }
