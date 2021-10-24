const Joi = require('joi');

const id_meeting = Joi.number().integer();
const id_user = Joi.number().integer();

const addUserMeeting = Joi.object({
  id_meeting: id_meeting.required(),
  id_user: id_user.required()
});

module.exports = { addUserMeeting }
