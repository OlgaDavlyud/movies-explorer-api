const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../utils/errors/NotFoundError');

const usersRoutes = require('./users');
const moviesRoutes = require('./movies');

router.use('/users', auth, usersRoutes);
router.use('/movies', auth, moviesRoutes);

router.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница по указанному маршруту не найдена'));
});

module.exports = router;
