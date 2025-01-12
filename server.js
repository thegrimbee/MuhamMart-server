const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
const app = express();

app.get('/api/all-customers', (req, res) => {
    res.json(
        {"customer 1": "Alice",
        "customer 2": "Bob"
        }
    )
    });

app.get('/api/customer/:id', (req, res) => {
    res.json(
        {"customer": req.params.id}
    )
    });

app.post('/api/customer', (req, res) => {
    res.json(
        {"customer": "Alice"}
    )
    });
    

    app.listen(8080, () => {
    console.log('localhost:8080/api');
}); 


