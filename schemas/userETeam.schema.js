const Joi = require('joi');

const id = Joi.number().integer();
const id_user = Joi.number().integer();
const id_eteam = Joi.number().integer();

const createUserETeamSchema = Joi.object({
  id_user: id_user.required(),
  id_eteam: id_eteam.required()
});

const updateUserETeamSchema = Joi.object({
  id_user: id_user,
  id_eteam: id_eteam,
});

const getUserETeamSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserETeamSchema, updateUserETeamSchema, getUserETeamSchema }
