const express = require('express');
const port = 3000;
const app = express();

const { runQuery } = require('./database');

const getUsername = async (uid) => {
    const sql = 'SELECT name FROM users WHERE id = ?';
    const results = await runQuery(sql, uid);
    return results[0];
};

const getFare = async (uid) => {
    const sql = 
        'SELECT users.id, sum(round(distance*fare_rate/1000, -2)) AS fare ' +
        'FROM users INNER JOIN tickets ON users.id = tickets.user AND users.id = ? ' +
        'INNER JOIN trains ON tickets.train = trains.id INNER JOIN types ON type = types.id ' +
        'GROUP BY tickets.user';
    const results = await runQuery(sql, uid);
    return results[0];
};

const IsEmpty = async (tid) => {
    const sql = 
        'SELECT max_seats = count(tickets.id) as flag ' +
        'FROM tickets INNER JOIN trains ON train = trains.id INNER JOIN types ON type = types.id ' +
        'WHERE trains.id = ? ' +
        'GROUP BY trains.id';
    const result = await runQuery(sql, tid);
    return result[0];
};

app.get("/fare", async (req, res) => {
    const { uid } = req.query;
    const username = await(getUsername(uid));
    const fare = await(getFare(uid));
    res.send(`Total fare of ${username.name} is ${fare.fare} KRW.`);
});

app.get("/train/status", async (req, res) => {
    const { tid } = req.query;
    const flag = await(IsEmpty(tid));
    if (flag.flag)
        res.send(`Train ${tid} is sold out`);
    else
        res.send(`Train ${tid} is not sold out`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));