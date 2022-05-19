const express = require('express');
const connection = require('./dbconfig');

const app = express();

app.use(express.json());

app.get('/getall', (req, res) => {
    connection.query('SELECT id, name, email, password FROM users', (error, result) => {
        if (error) {
            res.send('error to fetch student all records')
        } else {
            res.send(result)
        }
    })
});

app.get('/getmail', (req, res) => {
    connection.query('SELECT email, name FROM users WHERE email = ? or name = ?', [req.body.email, req.body.name], (error, result) => {
        if (error) {
            res.send('error to fetch email records')
        } else {
            res.send(result)
        }
    })
});

app.post('/create', (req, res) => {
    const data = req.body;
    date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    connection.query('INSERT INTO users SET ?, created_at = "' + date + '", modified_at = "'+ date + '"', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.put('/update/:id', (req, res) => {
    const data = [req.body.name, req.body.password, req.body.email, req.params.id];
    connection.query('UPDATE users SET name = ?, password = ?, email = ? WHERE id = ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
});

// app.delete('/delete/:id', (req, res) => {
//     const id = req.params.id;
//     connection.query('DELETE FROM student WHERE id =' + id, (error, result) => {
//         if (error) throw error;
//         res.send(result);
//     });
// });

app.listen(7000);