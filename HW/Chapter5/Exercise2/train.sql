SELECT users.id, name, seat_number
FROM users INNER JOIN tickets ON users.id = user AND train = 11
ORDER BY seat_number;


SELECT users.id, name, count(*) AS train_count, sum(trains.distance)/10 as total_distance
FROM users INNER JOIN tickets ON users.id = user
INNER JOIN trains ON train = trains.id
GROUP BY users.id ORDER BY total_distance DESC limit 6;


SELECT trains.id, types.name, A.name AS src_stn, B.name AS dst_stn, timediff(arrival, departure) AS travel_time
FROM trains INNER JOIN types ON type = types.id INNER JOIN stations AS A ON A.id = source INNER JOIN stations AS B ON B.id = destination
ORDER BY travel_time DESC limit 6;


SELECT types.name, A.name AS src_stn, B.name AS dst_stn, departure, arrival, round(distance*fare_rate/1000, -2) AS fare
FROM trains INNER JOIN types ON type = types.id INNER JOIN stations AS A ON A.id = source INNER JOIN stations AS B ON B.id = destination
ORDER BY departure;


SELECT trains.id, types.name AS type, A.name AS src_stn, B.name AS dst_stn, count(tickets.id) AS occupied, max_seats as maximum
FROM trains INNER JOIN types ON type = types.id INNER JOIN stations AS A ON A.id = source INNER JOIN stations AS B ON B.id = destination
INNER JOIN tickets ON trains.id = tickets.train
GROUP BY trains.id ORDER BY trains.id;


SELECT trains.id, types.name AS type, A.name AS src_stn, B.name AS dst_stn, count(tickets.id) AS occupied, max_seats as maximum
FROM trains INNER JOIN types ON type = types.id INNER JOIN stations AS A ON A.id = source INNER JOIN stations AS B ON B.id = destination
LEFT OUTER JOIN tickets ON trains.id = tickets.train
GROUP BY trains.id ORDER BY trains.id;

