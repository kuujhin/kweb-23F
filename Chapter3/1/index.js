const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use('/', router);

//app.use('/path', router);
//는 http://127.0.0.1:3000/path
//app.get('/', (req, res) =>res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
