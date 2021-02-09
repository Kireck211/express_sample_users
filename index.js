const express = require('express');
const usersRouter = require('./routes/users')
const indexRouter = require('./routes/index');

const app = express();
app.use(express.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000, () => console.log('Listening on port 3000'));