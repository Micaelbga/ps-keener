const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(cors());

const store = require('./routes/api/store')
const history = require('./routes/api/history')

app.use('/api/history',history);
app.use('/api/store',store);

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
