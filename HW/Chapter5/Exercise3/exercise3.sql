SELECT max_seats = count(tickets.id)
FROM tickets INNER JOIN trains ON train = trains.id INNER JOIN types ON type = types.id
WHERE trains.id = 5
GROUP BY trains.id;

SELECT max_seats = count(tickets.id)
FROM tickets INNER JOIN trains ON train = trains.id INNER JOIN types ON type = types.id
GROUP BY trains.id;


SELECT users.id, sum(round(distance*fare_rate/1000, -2)) AS fare
FROM users INNER JOIN tickets ON users.id = tickets.user AND users.id = 22
INNER JOIN trains ON tickets.train = trains.id INNER JOIN types ON type = types.id
GROUP BY tickets.user;

SELECT users.id, sum(round(distance*fare_rate/1000, -2)) AS fare
FROM users INNER JOIN tickets ON users.id = tickets.user
INNER JOIN trains ON tickets.train = trains.id INNER JOIN types ON type = types.id
GROUP BY tickets.user;