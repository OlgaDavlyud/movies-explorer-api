const moviesRouter = require('express').Router();
const {
  validateMovie,
  validateMovieId,
} = require('../utils/validate/validateRequest');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

moviesRouter.get('/', getMovies);
moviesRouter.post('/', validateMovie, createMovie);
moviesRouter.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = moviesRouter;
