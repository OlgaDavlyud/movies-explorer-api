# movies-explorer-api

IP 51.250.94.252

К серверу можно было обратиться по адресу: https://api.damovies-explorer.nomoredomains.rocks

`GET /users/me` - возвращает информацию о пользователе (email и имя)

`PATCH /users/me` - обновляет информацию о пользователе (email и имя)

`GET /movies` - возвращает все сохранённые текущим  пользователем фильмы

`POST /movies` - создаёт фильм с переданными в теле country, director, duration, year, description, image, trailerLink, thumbnail, nameRU, nameEN и movieId

`DELETE /movies/_id` - удаляет сохранённый фильм по id

`POST /signup` - создаёт пользователя с переданными в теле email, password и name

`POST /signin` - проверяет переданные в теле почту и пароль и возвращает JWT
____

**Статус проекта**

Проект находится на доработке из-за смены сервера
