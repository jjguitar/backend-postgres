const Joi = require('joi');

const id_user = Joi.number().integer();
const id_eteam = Joi.number().integer();

const addUserETeamSchema = Joi.object({
  id_user: id_user.required(),
  id_eteam: id_eteam.required()
});


module.exports = { addUserETeamSchema }
