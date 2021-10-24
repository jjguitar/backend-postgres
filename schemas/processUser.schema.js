const Joi = require('joi');

const id = Joi.number().integer();
const id_process = Joi.number().integer();
const id_user = Joi.number().integer();

const createProcessUserETeamSchema = Joi.object({
  id_process: id_process.required(),
  id_user: id_user.required()
});

const updateProcessUserETeamSchema = Joi.object({
  id_process: id_process,
  id_user: id_user,
});

const getProcessUserETeamSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProcessUserETeamSchema, updateProcessUserETeamSchema, getProcessUserETeamSchema }
