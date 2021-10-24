'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(USER_TABLE, 'first_name', UserSchema.first_name);
    await queryInterface.addColumn(USER_TABLE, 'last_name', UserSchema.last_name);
    await queryInterface.addColumn(USER_TABLE, 'admin', UserSchema.admin);
    await queryInterface.addColumn(USER_TABLE, 'is_volunteer', UserSchema.is_volunteer);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'first_name', UserSchema.first_name);
    await queryInterface.removeColumn(USER_TABLE, 'last_name', UserSchema.last_name);
    await queryInterface.removeColumn(USER_TABLE, 'admin', UserSchema.admin);
    await queryInterface.removeColumn(USER_TABLE, 'is_volunteer', UserSchema.is_volunteer);
  }
};