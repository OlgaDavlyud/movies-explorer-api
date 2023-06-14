const usersRouter = require('express').Router();

const { validateUserProfile } = require('../utils/validate/validateRequest');
const { getCurrentUser, updateProfile } = require('../controllers/users');

usersRouter.get('/me', getCurrentUser);
usersRouter.patch('/me', validateUserProfile, updateProfile);

module.exports = usersRouter;
