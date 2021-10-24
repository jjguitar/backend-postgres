const express = require('express');

const ETeamService = require('./../services/eTeam.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { updateETeamSchema, createETeamSchema, getETeamSchema } = require('./../schemas/eteam.schema');
const { addUserETeamSchema } = require('./../schemas/userETeam.schema');

const router = express.Router();
const service = new ETeamService();

router.get('/', async (req, res, next) => {
  try {
    const eTeams = await service.find();
    res.json(eTeams);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getETeamSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const eTeam = await service.findOne(id);
      res.json(eTeam);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createETeamSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newETeam = await service.create(body);
      res.status(201).json(newETeam);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/add-user',
  validatorHandler(addUserETeamSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUserETeam = await service.addUserETeam(body);
      res.status(201).json(newUserETeam);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getETeamSchema, 'params'),
  validatorHandler(updateETeamSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const eTeam = await service.update(id, body);
      res.json(eTeam);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getETeamSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
