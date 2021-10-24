const Joi = require('joi');

const id_process = Joi.number().integer();
const id_user = Joi.number().integer();

const addProcessUser = Joi.object({
  id_process: id_process.required(),
  id_user: id_user.required()
});

module.exports = { addProcessUser }
