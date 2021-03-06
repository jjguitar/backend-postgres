const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const orderRouter = require('./orders.router');
const eTeamRouter = require('./eTeam.router');
const processRouter = require('./process.router');
const meetingRouter = require('./meetings.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/orders', orderRouter);
  router.use('/eteams', eTeamRouter);
  router.use('/process', processRouter);
  router.use('/meeting', meetingRouter);
}

module.exports = routerApi;
