const Joi = require('joi');

const id = Joi.number().integer();
const id_meeting = Joi.number().integer();
const id_eteam = Joi.number().integer();

const createMeetingETeamSchema = Joi.object({
  id_meeting: id_meeting.required(),
  id_eteam: id_eteam.required()
});

const updateMeetingETeamSchema = Joi.object({
  id_meeting: id_meeting,
  id_eteam: id_eteam,
});

const getMeetingETeamSchema = Joi.object({
  id: id.required(),
});

module.exports = { createMeetingETeamSchema, updateMeetingETeamSchema, getMeetingETeamSchema }
