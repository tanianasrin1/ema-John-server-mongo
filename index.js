const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Running My emaJohn server')
})

app.listen(port, ()=>{
    console.log('Ema-john server is running')
})
