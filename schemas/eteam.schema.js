const Joi = require('joi');

const id = Joi.number().integer();
const eTeamName = Joi.string().min(1);

const createETeamSchema = Joi.object({
  eTeamName: eTeamName.required(),
});

const updateETeamSchema = Joi.object({
  id: id,
  eTeamName: eTeamName,
});

const getETeamSchema = Joi.object({
  id: id.required(),
});

module.exports = { createETeamSchema, updateETeamSchema, getETeamSchema }
