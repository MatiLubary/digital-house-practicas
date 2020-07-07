-- Primer practica

SELECT *
FROM actors;
-- 1.) Gunn

SELECT title
FROM movies;
-- 2.) Parque

SELECT *
FROM movies
WHERE title = 'Titanic';
-- 3.) 320

SELECT id, title, genre_id
FROM series
WHERE id = 4;
-- 4.) 4

SELECT *
FROM episodes
WHERE number = 2;
-- 5.) 2

-- Segunda practica

SELECT *
FROM movies
WHERE release_date BETWEEN '1999-10-01 00:00:00' AND '2004-12-01 00:00:00';
-- 1.) rey

SELECT *
FROM movies
WHERE title LIKE '%a';
-- 2.) Hotel

SELECT *
FROM actors
WHERE first_name = 'Jim';
-- 3.) 3 (ya viene resuelto XD)

SELECT SUM(awards)
FROM movies
WHERE title LIKE '%La Guerra de las galaxias%';
-- 4.) 13

SELECT *
FROM actors
INNER JOIN movies 
ON actors.favorite_movie_id = movies.id
WHERE first_name = 'Leonardo' AND last_name = 'Di Caprio';
-- 5.) de

-- Tercera practica

SELECT title, actors.id
FROM movies
INNER JOIN actors 
ON actors.favorite_movie_id = movies.id
WHERE actors.rating = 2.3
Order by actors.id;
-- 1.) Buscando a Nemo   (el segundo registro seria titanic)

SELECT *
FROM series
INNER JOIN genres 
ON series.genre_id = genres.id;
-- 2.) Fantasia

SELECT *
FROM movies
INNER JOIN genres 
ON movies.genre_id = genres.id
WHERE name = 'Animacion';
-- 3.) Intensamente

SELECT *
FROM actors
INNER JOIN actor_movie ON actors.id = actor_movie.actor_id
INNER JOIN movies ON actor_movie.movie_id = movies.id
WHERE movies.title = 'Parque Jurásico';
-- 4.) Dern

SELECT title, rating
FROM movies
INNER JOIN genres ON genres.id = movies.genre_id
WHERE movies.rating BETWEEN 1 and 4;
-- 5.) Mi

-- Cuarta practica

SELECT genres.name, AVG(movies.length)
FROM movies
INNER JOIN genres ON genres.id = movies.genre_id
group by genres.name;
-- 1.) Infantiles

SELECT actors.first_name, Count(actor_movie.id)
FROM actors
INNER JOIN actor_movie ON actor_movie.actor_id = actors.id
INNER JOIN movies ON actor_movie.movie_id = movies.id
group by actors.id DESC;
-- 2.) Emma

SELECT genres.name, Count(movies.id)
FROM movies
INNER JOIN genres ON genres.id = movies.genre_id
group by genres.name;
-- 3.) 5	




