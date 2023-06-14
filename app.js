require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { errors } = require('celebrate');
const cors = require('cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { validateLogin, validateUser } = require('./utils/validate/validateRequest');

const { DB_ADDRESS, PORT } = require('./config');

const routes = require('./routes/index');
const { createUser, login } = require('./controllers/users');
const InternalServerError = require('./middlewares/error');
const authLimiter = require('./middlewares/rateLimit');

const app = express();
app.use(helmet());
app.use(cors());
mongoose.connect(DB_ADDRESS);

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

app.post('/signin', authLimiter, validateLogin, login);
app.post('/signup', authLimiter, validateUser, createUser);

app.use(routes);

app.use(errorLogger);

app.use(errors());
app.use(InternalServerError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
