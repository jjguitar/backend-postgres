const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class ProcessService {
  constructor() {}

  async create(data) {
    console.log(data);
    const newProcess = await models.Process.create(data);
    return newProcess;
  }

  async addProcess(data) {
    const newProcess = await models.Process.create(data);
    return newProcess;
  }

  async find() {
    const rta = await models.Process.findAll({
      include: [
        'user'
      ]
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Process.findByPk(id, {
      include: [
        'user'
      ]
    });
    if (!user) {
      throw boom.notFound('ETeam not found')
    }
    return user;
  }

  async update(id, changes) {
    const process = await this.findOne(id);
    const rta = await process.update(changes);
    return rta
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = ProcessService;