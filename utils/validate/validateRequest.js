const { celebrate, Joi } = require('celebrate');
const { REGEX_URL } = require('./validateURL');

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "email" обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email-адрес'),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "password" обязательное для заполнения',
      }),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .messages({
        'string.min': 'Минимальное количество символов - 2',
        'string.max': 'Максимальное количество символов - 30',
      }),
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "email" обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email-адрес'),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "password" обязательное для заполнения',
      }),
  }),
});

const validateUserProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .required()
      .min(2)
      .max(30)
      .messages({
        'string.empty': 'Поле "name" обязательное для заполнения',
        'string.min': 'Минимальное количество символов - 2',
        'string.max': 'Максимальное количество символов - 30',
      }),
    email: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "email" обязательное для заполнения',
      })
      .email()
      .message('Введите корректный email-адрес'),
  }),
});

const validateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "country" обязательное для заполнения',
      }),
    director: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "director" обязательное для заполнения',
      }),
    duration: Joi.number()
      .required()
      .messages({
        'string.empty': 'Поле "duration" обязательное для заполнения',
      }),
    year: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "year" обязательное для заполнения',
      }),
    description: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "description" обязательное для заполнения',
      }),
    image: Joi.string()
      .required()
      .pattern(REGEX_URL)
      .message('Введите корректный url-адрес')
      .messages({
        'string.empty': 'Поле "image" обязательное для заполнения',
      }),
    trailerLink: Joi.string()
      .required()
      .pattern(REGEX_URL)
      .message('Введите корректный url-адрес')
      .messages({
        'string.empty': 'Поле "trailerLink" обязательное для заполнения',
      }),
    thumbnail: Joi.string()
      .required()
      .pattern(REGEX_URL)
      .message('Введите корректный url-адрес')
      .messages({
        'string.empty': 'Поле "thumbnail" обязательное для заполнения',
      }),
    movieId: Joi.number()
      .required()
      .messages({
        'string.empty': 'Поле "movieId" обязательное для заполнения',
      }),
    nameRU: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "nameRU" обязательное для заполнения',
      }),
    nameEN: Joi.string()
      .required()
      .messages({
        'string.empty': 'Поле "nameEN" обязательное для заполнения',
      }),
  }),
});

const validateMovieId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string()
      .length(24)
      .hex()
      .message('Обязательный формат id - hex')
      .required()
      .messages({
        'string.length': 'Фиксированное количество символов id - 24',
      }),
  }),
});

module.exports = {
  validateLogin,
  validateUser,
  validateUserProfile,
  validateMovie,
  validateMovieId,
};
