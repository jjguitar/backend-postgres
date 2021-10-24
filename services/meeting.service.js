const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class MeetingService {
  constructor() {}

  async create(data) {
    const newMeeting = await models.Meeting.create(data);
    return newMeeting;
  }

  async addETeamMeeting(data) {
    const newETeamMeeting = await models.MeetingETeam.create(data);
    return newETeamMeeting;
  }

  async find() {
    const rta = await models.Meeting.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.Meeting.findByPk(id, {
      include: [
        'meetingETeam'
      ]
    });
    if (!user) {
      throw boom.notFound('Meeting not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = MeetingService;