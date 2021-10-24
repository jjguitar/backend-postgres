const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(1);
const open = Joi.boolean()
const description = Joi.string().min(1);
const userId = Joi.number().integer();

const createProcessSchema = Joi.object({
  name: name.required(),
  userId: userId.required(),
  open: open,
  description: description.required()
});

const updateProcessSchema = Joi.object({
  name: name,
  userId: userId,
  open: open,
  description: description
});

const getProcessSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProcessSchema, updateProcessSchema, getProcessSchema }
