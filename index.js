const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3000

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

//Database
const db = require('./config/database');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

app.get('/', (req, res) => {
     res.send('Welcome to the world of KHUDZAKA JUNIOR');
 })

app.get('/list', (req, res) => {
    res.json({msg: "Hello world from back-end!!!"});
})

//Photos routs
app.use('/photos', require('./routes/photos'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
