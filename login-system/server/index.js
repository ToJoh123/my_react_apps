const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());


const db  = mysql2.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'UserLogin',
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log("username",username);
    db.query("insert into users (username, password) values (?, ?)", [username, password], (err, result) => {
        console.log("query",err);
    })

});
app.listen (3001, () => {
    console.log("running server on port http://localhost:3001");
});

