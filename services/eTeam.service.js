const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ETeamService {
  constructor() {}

  async create(data) {
    const newETeam = await models.ETeam.create(data);
    return newETeam;
  }

  async addUserETeam(data) {
    const newUserETeam = await models.UserETeam.create(data);
    return newUserETeam;
  }

  async find() {
    const rta = await models.ETeam.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.ETeam.findByPk(id, {
      include: [
        'usersETeam'
      ]
    });
    if (!user) {
      throw boom.notFound('ETeam not found')
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

module.exports = ETeamService;