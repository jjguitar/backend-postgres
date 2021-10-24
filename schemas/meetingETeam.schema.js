const Joi = require('joi');

const id_meeting = Joi.number().integer();
const id_eteam = Joi.number().integer();

const addETeamMeeting = Joi.object({
  id_meeting: id_meeting.required(),
  id_eteam: id_eteam.required()
});


module.exports = { addETeamMeeting }
