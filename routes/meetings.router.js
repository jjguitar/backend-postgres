const express = require('express');

const MeetingService = require('./../services/meeting.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createMeetingSchema, updateMeetingSchema, getMeetingSchema } = require('./../schemas/meeting.schema');
const { addETeamMeeting } = require('./../schemas/meetingETeam.schema');
const { addUserMeeting } = require('./../schemas/meetingUser.schema');

const router = express.Router();
const service = new MeetingService();

router.get('/', async (req, res, next) => {
  try {
    const meeting = await service.find();
    res.json(meeting);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getMeetingSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const meeting = await service.findOne(id);
      res.json(meeting);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createMeetingSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newMeeting = await service.create(body);
      res.status(201).json(newMeeting);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/add-eteam',
  validatorHandler(addETeamMeeting, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newETeamMeeting = await service.addETeamMeeting(body);
      res.status(201).json(newETeamMeeting);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/add-users',
  validatorHandler(addUserMeeting, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUserMeeting = await service.addUserMeeting(body);
      res.status(201).json(newUserMeeting);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getMeetingSchema, 'params'),
  validatorHandler(updateMeetingSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const meeting = await service.update(id, body);
      res.json(meeting);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getMeetingSchema, 'params'),
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
