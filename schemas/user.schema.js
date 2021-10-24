const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const last_name = Joi.string().min(1);
const first_name = Joi.string().min(1);
const admin = Joi.boolean();
const is_volunteer = Joi.boolean();

const createUserSchema = Joi.object({
  email: email.required(),
  last_name: last_name.required(),
  first_name: first_name.required(),
  password: password.required()
});

const updateUserSchema = Joi.object({
  email: email,
  last_name: last_name,
  first_name: first_name,
  admin: admin,
  is_volunteer: is_volunteer,
  password: password
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
