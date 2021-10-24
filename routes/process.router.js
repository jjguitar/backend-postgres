const express = require('express');

const ProcessService = require('./../services/process.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProcessSchema, updateProcessSchema, getProcessSchema } = require('./../schemas/process.schema');
// const { addUserETeamSchema } = require('./../schemas/userETeam.schema');

const router = express.Router();
const service = new ProcessService();

router.get('/', async (req, res, next) => {
  try {
    const eTeams = await service.find();
    res.json(eTeams);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProcessSchema, 'params'),
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
  validatorHandler(createProcessSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const process = await service.create(body);
      res.status(201).json(process);
    } catch (error) {
      next(error);
    }
  }
);

// router.post('/add-user',
//   validatorHandler(updateProcessSchema, 'body'),
//   async (req, res, next) => {
//     try {
//       const body = req.body;
//       const newUserETeam = await service.addUserETeam(body);
//       res.status(201).json(newUserETeam);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

router.patch('/:id',
  validatorHandler(getProcessSchema, 'params'),
  validatorHandler(updateProcessSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const process = await service.update(id, body);
      res.json(process);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getProcessSchema, 'params'),
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
