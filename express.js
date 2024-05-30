const express = require('express');
const path = require('path');
const buyRouter = require('./buy');
const signRouter = require('./signin');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/buy', buyRouter);
app.use('/signin', signRouter);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

app.listen(8000, () => {
    console.log('Server is running on port http://localhost:8000');
});
