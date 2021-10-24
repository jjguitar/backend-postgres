const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(1);
const open = Joi.boolean()
const description = Joi.string().min(1);
const id_user_leader = Joi.number().integer();

const createProcessSchema = Joi.object({
  name: name.required(),
  id_user_leader: id_user_leader.required(),
  open: open,
  description: description.required()
});

const updateProcessSchema = Joi.object({
  name: name,
  id_user_leader: id_user_leader,
  open: open,
  description: description
});

const getProcessSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProcessSchema, updateProcessSchema, getProcessSchema }
