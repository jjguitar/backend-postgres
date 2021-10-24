const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(1);
const description = Joi.string().min(1);
const date = Joi.date();
const reqVolunteer = Joi.boolean()

const createMeetingSchema = Joi.object({
  name: name.required(),
  date: date,
  reqVolunteer: reqVolunteer,
  description: description.required()
});

const updateMeetingSchema = Joi.object({
  name: name,
  date: date,
  reqVolunteer: reqVolunteer,
  description: description
});

const getMeetingSchema = Joi.object({
  id: id.required(),
});

module.exports = { createMeetingSchema, updateMeetingSchema, getMeetingSchema }
